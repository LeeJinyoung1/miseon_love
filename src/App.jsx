import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const startPetals = () => {
    const colors = ['#ff8787', '#fcc2d7', '#ffdeeb', '#ffffff'];

    const frame = () => {
      // 화면 전체 상단 무작위 위치에서 떨어지도록 변경
      confetti({
        particleCount: 1,
        startVelocity: 0, // 쏘아 올리지 않고 바로 떨어지게 함
        ticks: 600, // 충분히 오래 살아남아 바닥까지 도달하게 함
        origin: {
          x: Math.random(),
          // 화면 위쪽에서 자연스럽게 시작
          y: Math.random() - 0.2
        },
        colors: colors,
        gravity: 0.5, // 중력을 조절하여 천천히 떨어지게 함
        scalar: 0.75, // 꽃잎 크기
        drift: Math.random() * 2 - 1 // 좌우로 하늘하늘 흔들리는 효과
      });

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
