import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();
    useEffect(()=> {
        init(textRef.current, { showCursor: false, strings: ['Designer', 'Developer', 'Content Creator' ] })
    }, []);

  return (
    <div className='intro' id="intro">
        <div className="left">
            <div className="imgContainer">
                <img src='assets/man.png' />
            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>
                    Hi There, I am
                </h2>
                <h1>Mubeen Patel</h1>
                <h3>Freelancer <span ref={textRef}></span></h3>
            </div>
            <a href='#portfolio'>
                <img src='assets/arrow-down.png' />
            </a>
        </div>
    </div>
  )
}
