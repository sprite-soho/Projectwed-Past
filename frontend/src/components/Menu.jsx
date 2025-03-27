import React, { useState } from 'react';
import './Menu.css';

function Menu() {
    const [sweetness, setSweetness] = useState('');
    const [size, setSize] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleSubmit = () => {
        alert(`Sweetness: ${sweetness}, Size: ${size}, Additional Info: ${additionalInfo}`);
    };

    return (
        <div className="menu-container">
            <div className="menu-card">
                <div className="image-container">
                    <img src="/images/59f985a550f267074449860880364ee8.jpg" alt="Green Tea" />
                </div>

                <div className="menu-details">
                    <h2>เลือกเมนูของคุณ</h2>

                    <div className="option-group">
                        <p>ระดับความหวาน</p>
                        <div className="radio-group">
                            {["100%", "75%", "50%", "30%"].map((level) => (
                                <label key={level} className="radio-label">
                                    <input 
                                        type="radio" 
                                        value={level} 
                                        name="sweetlevel" 
                                        checked={sweetness === level} 
                                        onChange={(e) => setSweetness(e.target.value)}
                                    />
                                    {level}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="option-group">
                        <p>ขนาดแก้ว</p>
                        <div className="radio-group">
                            {["16oz", "22oz"].map((sizeOption) => (
                                <label key={sizeOption} className="radio-label">
                                    <input 
                                        type="radio" 
                                        value={sizeOption} 
                                        name="glasssize" 
                                        checked={size === sizeOption} 
                                        onChange={(e) => setSize(e.target.value)}
                                    />
                                    {sizeOption}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="option-group">
                        <p>เพิ่มเติม</p>
                        <textarea 
                            placeholder="กรอกข้อมูลเพิ่มเติม" 
                            value={additionalInfo} 
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                        ></textarea>
                    </div>

                    <button className="add-to-cart" onClick={handleSubmit}>
                        เพิ่มใส่ตะกร้า
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Menu;
