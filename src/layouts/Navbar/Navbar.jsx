import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ tab, setTab }) {
    const navigate = useNavigate(); // ใช้สำหรับการนำทางไปยังหน้า login

    const handleLogout = () => {
        // สามารถเพิ่มการล้างข้อมูลการเข้าสู่ระบบที่นี่ได้หากต้องการ
        navigate('/login'); // นำทางไปยังหน้า login
    };

    return (
        <div className="navbar-container">
            <Link to={'/home'}>
                <button className={'btn ' + (tab === 'home' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('home')}>Home</button>
            </Link>
            <Link to={'/calculator'}>
                <button className={'btn ' + (tab === 'calculator' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('calculator')}>Calculator</button>
            </Link>
            <Link to={'/Animetion'}>
                <button className={'btn ' + (tab === 'Animetion' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('Animetion')}>Animetion</button>
            </Link>
            <Link to={'/Components'}>
                <button className={'btn ' + (tab === 'Components' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('Components')}>Components</button>
            </Link>
            <Link to={'/todo'}>
                <button className={'btn ' + (tab === 'todo' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('todo')}>Todo</button>
            </Link>
            <Link to={'/products'}>
                <button className={'btn ' + (tab === 'products' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('products')}>Products</button>
            </Link>
            <Link to={'/cart'}>
                <button className={'btn ' + (tab === 'cart' ? ' btn-primary' : 'btn-outline-primary')} onClick={() => setTab('cart')}>Cart</button>
            </Link>
            <button className="btn btn-outline-primary" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Navbar;
