import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const startPetals = () => {
    const colors = ['#ff8787', '#fcc2d7', '#ffdeeb', '#ffffff'];

    const frame = () => {
      // 추가로 40% 더 줄이기 위해 확률을 조정 (기존 대비 훨씬 드물게 발생)
      if (Math.random() > 0.7) {
        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: 600,
          origin: {
            x: Math.random(),
            y: Math.random() - 0.2
          },
          colors: colors,
          gravity: 0.5,
          scalar: 0.75,
          drift: Math.random() * 2 - 1
        });
      }

      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  };

  const handleFlowerClick = () => {
    startPetals();
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
