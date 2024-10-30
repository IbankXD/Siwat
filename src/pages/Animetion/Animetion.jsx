import React, { useEffect, useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap-icons/font/bootstrap-icons.css';
import './Animetion.css';

const BallAnimation = () => {
  const friendwidth = 900;
  const friendheight = 600;
  const diameter = 150;
  const maxLeft = friendwidth - diameter - 2;
  const maxTop = friendheight - diameter - 2;
  const vx = 5;
  const vy = 5;

  const [running, setRunning] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [image, setImage] = useState('');

  const toggleRunning = () => setRunning(!running);

  const calculatePosition = () => {
    setX((prevX) => {
      const newX = goRight ? prevX + vx : prevX - vx;
      if (newX >= maxLeft || newX <= 0) setGoRight(!goRight);
      return newX;
    });
    setY((prevY) => {
      const newY = goDown ? prevY + vy : prevY - vy;
      if (newY >= maxTop || newY <= 0) setGoDown(!goDown);
      return newY;
    });
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        calculatePosition();
        setRotation((prev) => prev + 5); // เพิ่มองศาการหมุน
      }, 25);
      return () => clearInterval(interval);
    }
  }, [running, goRight, goDown]);

  const changeImage = (picId) => {
    const images = {
      pic0: '',
      pic1: 'public/pic1.webp',
      pic2: 'public/pic2.webp',
      pic3: 'public/pic3.webp',
      pic4: 'public/pic4.jpg',
      pic5: 'public/pic5.jpg',
      pic6: 'public/pic6.png',
    };
    setImage(images[picId]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      if (key === ' ') {
        toggleRunning();
      } else if (key >= '1' && key <= '6') {
        changeImage(`pic${key}`);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="container" style={{ textAlign: 'center', marginTop: '100px' }}>
      <div
        id="field"
        style={{
          width: friendwidth,
          height: friendheight,
          border: '1px solid black',
          position: 'relative',
          margin: 'auto',
        }}
      >
        <div
          id="ball"
          style={{
            width: diameter,
            height: diameter,
            position: 'absolute',
            top: y,
            left: x,
            backgroundSize: 'cover',
            backgroundImage: `url(${image})`,
            transform: `rotate(${rotation}deg)`,
            borderRadius: '50%',
          }}
        ></div>
      </div>
      <div id="control" className="mt-3">
        <button className="btn btn-primary" onClick={toggleRunning} id="run">
          {running ? (
            <span className="bi bi-pause">PAUSE</span>
          ) : (
            <span className="bi bi-play">RUN</span>
          )}
        </button>-
        <button className="btn btn-primary" onClick={() => changeImage('pic0')}>None</button>
        -
        <button className="btn btn-primary" onClick={() => changeImage('pic1')}>Basketball</button>-
        <button className="btn btn-primary" onClick={() => changeImage('pic2')}>Football</button>-
        <button className="btn btn-primary" onClick={() => changeImage('pic3')}>Volleyball</button>-
        <button className="btn btn-primary" onClick={() => changeImage('pic4')}>Human</button>-
        <button className="btn btn-primary" onClick={() => changeImage('pic5')}>Cartoon</button>-
        <button className="btn btn-primary" onClick={() => changeImage('pic6')}>Logo</button>
      </div>
    </div>
  );
};

export default BallAnimation;
