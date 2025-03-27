const express = require('express')
const sqlite3 = require('better-sqlite3')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// เชื่อมต่อกับฐานข้อมูล
const db = new sqlite3('users.db')

// สร้างตารางถ้ายังไม่มี
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstname TEXT NOT NULL,
        lastname TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        tel TEXT UNIQUE,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );
`)

// ดึงข้อมูลผู้ใช้ทั้งหมด
app.get('/users', (req, res) => {
    const users = db.prepare('SELECT id, firstname, lastname, email, tel, username FROM users').all()
    res.json(users)
})

// เพิ่มผู้ใช้ใหม่
app.post('/users', (req, res) => {
    const { firstname, lastname, email, tel, username, password } = req.body
    if (!firstname || !lastname || !email || !username || !password) {
        return res.status(400).json({ error: 'Missing required fields' })
    }

    try {
        const stmt = db.prepare(`
            INSERT INTO users (firstname, lastname, email, tel, username, password) 
            VALUES (?, ?, ?, ?, ?, ?)
        `)
        const result = stmt.run(firstname, lastname, email, tel, username, password)

        res.status(201).json({
            message: 'User created successfully',
            user: { id: result.lastInsertRowid, firstname, lastname, email, tel, username }
        })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

// ดึงข้อมูลผู้ใช้ตาม ID
app.get('/users/:id', (req, res) => {
    const user = db.prepare('SELECT id, firstname, lastname, email, tel, username FROM users WHERE id = ?').get(req.params.id)

    if (user) {
        res.json(user)
    } else {
        res.status(404).json({ error: 'User not found' })
    }
})

// แก้ไขข้อมูลผู้ใช้
app.put('/users/:id', (req, res) => {
    const { firstname, lastname, email, tel, username, password } = req.body

    const user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id)
    if (!user) {
        return res.status(404).json({ error: 'User not found' })
    }

    const updatedUser = {
        firstname: firstname || user.firstname,
        lastname: lastname || user.lastname,
        email: email || user.email,
        tel: tel || user.tel,
        username: username || user.username,
        password: password || user.password
    }

    const stmt = db.prepare(`
        UPDATE users 
        SET firstname = ?, lastname = ?, email = ?, tel = ?, username = ?, password = ?
        WHERE id = ?
    `)
    stmt.run(updatedUser.firstname, updatedUser.lastname, updatedUser.email, updatedUser.tel, updatedUser.username, updatedUser.password, req.params.id)

    res.json({ message: 'User updated successfully' })
})

// ลบผู้ใช้
app.delete('/users/:id', (req, res) => {
    const stmt = db.prepare('DELETE FROM users WHERE id = ?')
    const result = stmt.run(req.params.id)

    if (result.changes > 0) {
        res.json({ message: 'User deleted successfully' })
    } else {
        res.status(404).json({ error: 'User not found' })
    }
})

// เริ่มเซิร์ฟเวอร์
app.listen(8000, () => {
    console.log('Server started on port 8000')
})
