import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // กำหนดค่าผู้ใช้และรหัสผ่านที่ต้องการตรวจสอบ
  const correctUsername = 'admin';
  const correctPassword = '123456';

  const handleSubmit = (e) => {
    e.preventDefault();
    // ตรวจสอบชื่อผู้ใช้และรหัสผ่าน
    if (username === correctUsername && password === correctPassword) {
      onLogin(); // เรียกฟังก์ชัน onLogin เพื่ออัปเดตสถานะการล็อกอิน
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  return (
    <div className="login-container">
      <h2>เข้าสู่ระบบ</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ชื่อผู้ใช้:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>รหัสผ่าน:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">เข้าสู่ระบบ</button>
      </form>
    </div>
  );
};

export default Login;
