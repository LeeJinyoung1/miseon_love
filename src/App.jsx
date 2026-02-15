import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleFlowerClick = () => {
    // 폭죽 효과 실행
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      // 하트와 꽃잎 느낌의 폭죽
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff8787', '#fcc2d7', '#ffdeeb', '#ffffff']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff8787', '#fcc2d7', '#ffdeeb', '#ffffff']
      });
    }, 250);

    // 편지 열기
    setIsOpened(true);
  };

  return (
    <div className="App">
      <div className="container">
        {!isOpened ? (
          <div onClick={handleFlowerClick}>
            <button className="flower-btn">🌸</button>
            <p className="hint-text">꽃을 눌러보세요!</p>
          </div>
        ) : (
          <div className="letter-card">
            <div className="letter-text">
              {`사랑하는 호도도에게,

명절에도 쉬지 못하고 일하는 모습이 
마음이 아프다 ㅠ

해줄 수 있는 게 말뿐이라..
재미삼아 이렇게 만들어 봤어!

우리 이쁜 호도도가 이걸 보고
조금은 힘을 내면 좋겠어!

사랑해요오! 💖`}
            </div>
            <button 
              onClick={() => setIsOpened(false)}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                border: 'none',
                background: '#ffc9c9',
                color: '#8a0303',
                borderRadius: '10px',
                cursor: 'pointer',
                fontFamily: 'Gowun Batang'
              }}
            >
              다시 보기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
