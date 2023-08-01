import React, { useEffect, useRef } from 'react';

function RainContainer({ createSquare }) {
    const rainContainerRef = useRef(null);

    useEffect(() => {
        const rainContainer = rainContainerRef.current;
        const minSize = 10;
        const maxSize = 40;

        function createSquare() {
            const square = document.createElement('div');
            const size = Math.floor(Math.random() * (maxSize - minSize + 1) + minSize);
            const speed = Math.random() * 5 + 3;
            const rotateDirection = Math.random() > 0.5 ? -1 : 1;

            square.style.width = `${size}px`;
            square.style.height = `${size}px`;
            square.style.border = '2px solid white';
            square.style.position = 'absolute';
            square.style.top = `-${size*2}px`;
            square.style.left = `${Math.random() * 100}%`;
            square.style.background = 'white';
            square.style.zIndex = '50'

            rainContainer.appendChild(square);

            // Animation
            function update() {
                const rotation = parseFloat(square.dataset.rotation) || 0;
                const yPosition = parseFloat(square.style.top) || 0;
                const xPosition = parseFloat(square.style.left) || 0;

                const newY = yPosition + speed;
                square.style.top = `${newY}px`;

                const newRotation = rotation + speed;
                square.style.transform = `rotate(${newRotation * rotateDirection}deg)`;
                square.dataset.rotation = newRotation;

                if (yPosition > window.innerHeight) {
                    square.remove();
                } else {
                    requestAnimationFrame(update);
                }
            }
            update();
        }
        const intervalId = setInterval(createSquare, 250);
        return () => clearInterval(intervalId);
    }, [createSquare]);

    return (
        <div className='rain-container-box' style={{
            width: '40%',
            height: '100vh',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '50'
            
        }}>
            <div id="droplet-counter">0</div>
            <div ref={rainContainerRef} />
        </div>
    );
}

export default RainContainer;