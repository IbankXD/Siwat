import './Home.css';
function Home() {
    return ( <div className="home-container" >
        <div className="home-img"><span className=""><img src="../public/stdempimg.jpg" alt="" /></span></div>
        
        <div className="home-text"><span className="badge bg-dark" ><h1>นายศิวัฒน์ แก้วหนองสังข์</h1>
        <h3>คณะวิศวกรรมศาสตร์ มหาวิทยาลัยศรีปทุม</h3>
                <h3>Tel:0969862172
                Email:door_2099@hotmail.com</h3>
               
                <h3>342/16 สุชารีวิล
                ถนนวัดเวฬุวนาราม 
                ดอนเมือง
                กรุงเทพมหานคร 10210
                </h3>
        <ul>
            <li><h4>HTML</h4></li>
            <li><h4>CSS</h4><></></li>
            <li><h4>javaScript</h4></li>
            <li><h4>React</h4></li>
            
        </ul>
        <div>
            <span className='badge bg-secondary'><h1>ประวิติส่วนตัว</h1></span>
            <h3>ผมเป็นเด็กฝึกที่วิทยาลัยเทคโนโลยีไทยบริหารธุรกิจ
                <br />และได้มีความสนเกี่ยวกับการเขียนเว็ปและ
                <br />ออกแบบแอพมือถือ
                และผมได้ทำงานเกี่ยวกับการทำแบบสอบถามต่างๆ
                <br />ในช่วงเวลาว่างผมเป็นขยันเรียนรู้สิ่งใหม่ๆ</h3>
        </div>
        </span>
        </div>
        
        
        </div> );
}

export default Home;