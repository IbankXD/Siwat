import './Temperatures.css';
import Variable from './Variable.jsx';
import { useState } from 'react';

function Temperatures() {
  const [celsius, setCelsius] = useState(25); // Celsius เป็น state หลัก

  // ฟังก์ชันแปลง Celsius เป็น Fahrenheit
  const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

  // ฟังก์ชันแปลง Celsius เป็น Kelvin
  const celsiusToKelvin = (celsius) => celsius + 273.15;

  // ฟังก์ชันแปลง Fahrenheit เป็น Celsius
  const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

  // ฟังก์ชันแปลง Kelvin เป็น Celsius
  const kelvinToCelsius = (kelvin) => kelvin - 273.15;

  // อัปเดตค่า Celsius จากการคำนวณ Fahrenheit
  const updateFahrenheit = (newFahrenheit) => {
    const newCelsius = fahrenheitToCelsius(newFahrenheit);
    setCelsius(newCelsius); // อัปเดต Celsius ตามการคำนวณจาก Fahrenheit
  };

  // อัปเดตค่า Celsius จากการคำนวณ Kelvin
  const updateKelvin = (newKelvin) => {
    const newCelsius = kelvinToCelsius(newKelvin);
    setCelsius(newCelsius); // อัปเดต Celsius ตามการคำนวณจาก Kelvin
  };

  // อัปเดตค่า Celsius โดยตรง
  const updateCelsius = (newCelsius) => {
    setCelsius(newCelsius); // ตั้งค่า Celsius ใหม่
  };

  return (
    <div className='temperatures-container'>
      <h3 className='temperatures-title1'>Temperatures</h3>
      <h3 className='temperatures-title'>
        <span className='t-c'>{celsius.toFixed(2)}°C</span>
        <span className='t-f'>{celsiusToFahrenheit(celsius).toFixed(2)}°F</span>
        <span className='t-k'>{celsiusToKelvin(celsius).toFixed(2)}°K</span>
      </h3>
      <div className='temperatures-variable'>
        <Variable type={'float'} name={'Celsius'} count={celsius} setCount={updateCelsius} />
        <Variable type={'float'} name={'Fahrenheit'} count={celsiusToFahrenheit(celsius)} setCount={updateFahrenheit} />
        <Variable type={'float'} name={'Kelvin'} count={celsiusToKelvin(celsius)} setCount={updateKelvin} />
      </div>
    </div>
  );
}

export default Temperatures;
