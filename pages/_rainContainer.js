import React, { useEffect, useRef } from 'react';

function RainContainer({ createSquare }) {
    const rainContainerRef = useRef(null);
    let dropletCount = 0;

    useEffect(() => {
        const rainContainer = rainContainerRef.current;
        const minSize = 10;
        const maxSize = 50;

        const dopletCounterDisplay = document.createElement('div');
        dopletCounterDisplay.style.color = 'white';
        dopletCounterDisplay.style.position = 'absolute';
        dopletCounterDisplay.style.top = '10px';
        dopletCounterDisplay.style.left = '10px';
        dopletCounterDisplay.style.zIndex = '100';

        rainContainer.appendChild(dopletCounterDisplay);

        function createSquare() {
            if (rainContainer.childNodes.length > 25) {
                return;
            }
            const square = document.createElement('div');
            const size = Math.floor(Math.random() * (maxSize - minSize + 1) + minSize);
            let speed = Math.random() * 5 + 3;
            const rotateDirection = Math.random() > 0.5 ? -1 : 1;
            // offset moves the square to the left so that it doesnt clip off the screen
            // offset = how much the square width is from the raincontainer width in percent
            const offset = (size / rainContainer.clientWidth) * 100;


            square.style.width = `${size}px`;
            square.style.height = `${size}px`;
            square.style.border = '2px solid white';
            square.style.position = 'absolute';
            square.style.top = `-${size*2}px`;
            square.style.left = `${(Math.random() * 100) - offset}%`;
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
                // doplets are all child nodes of the rain container
                dopletCounterDisplay.innerHTML = `Droplets: ${rainContainer.childNodes.length}`;

                if (yPosition > window.innerHeight) {
                    square.style.top = "-50px";
                    let previousSize = parseFloat(square.style.width);
                    square.style.width = `${previousSize - 1}px`;
                    square.style.height = `${previousSize - 1}px`;
                    speed += 0.2;
                    if (previousSize < 1) {
                        square.remove();
                        return;
                    } else {
                        requestAnimationFrame(update);
                    }
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
            <div ref={rainContainerRef} />
        </div>
    );
}

export default RainContainer;