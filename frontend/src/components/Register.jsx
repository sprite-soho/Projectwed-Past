import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';

function Register() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState(""); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        await submitData();  
    };

    const submitData = async () => {
        let data = { firstname, lastname, email, tel, username, password };

        try {
            let response = await axios.post('http://localhost:8000/users', data);
            console.log(response.data);
            alert('User created successfully!');
        } catch (error) {
            console.error('Axios error:', error);
            alert('Error: ' + (error.response?.data?.error || 'Something went wrong'));
        }
    };

    return (
        <div className='containerRegister'>
            <h1>Create an account</h1>
            <div className='boxRegister'>
                <form className='formRegister' onSubmit={handleSubmit}>
                    <div className='flexRegister'>
                        <label>Firstname</label>
                        <input
                            type="text"
                            name="firstname"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder="กรอกชื่อของคุณ"
                        />
                    </div>

                    <div className='flexRegister'>
                        <label>Lastname</label>
                        <input
                            type="text"
                            name="lastname"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="กรอกนามสกุลของคุณ"
                        />
                    </div>

                    <div className='flexRegister'>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="กรอก Email ของคุณ"
                        />
                    </div>

                    <div className='flexRegister'>
                        <label>Tel</label>
                        <input
                            type="number"
                            name="tel"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                            placeholder="กรอกเบอร์โทรของคุณ"
                        />
                    </div>

                    <div className='flexRegister'>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="กรอก Username ที่จะใช้เข้าสู่ระบบ"
                        />
                    </div>

                    <div className='flexRegister'>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="กรอกรหัสผ่านของคุณ"
                        />
                    </div>
                    <button className="Registersubmit" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
