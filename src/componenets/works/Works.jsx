import { useState } from 'react';
import './works.scss';

export default function Works() {
  const [currentSlide, setCurrentSlide] =  useState(0);

  const data = [
    {id:1, title:"Social Media App", icon:'assets/phone.png', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ", img:"assets/web.jpg"},
    {id:2, title:"Rampa Ui Design", icon:'assets/phone.png',  desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", img:"assets/web1.jpg"},
    {id:3, title:"Ecommerce web design",  icon:'assets/phone.png', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. 1500s", img:"assets/web2.jpg"},
    {id:4, title:"Web Relax App",  icon:'assets/phone.png', desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  the 1500s", img:"assets/web3.jpg"},
    {id:5, title:"Social Media App",  icon:'assets/phone.png', desc:"Lorem Ipsum  standard dummy text ever since the 1500s", img:"assets/web4.jpg"},
  ];

  const handleClick = (way) => {
    way === 'left' ? setCurrentSlide(currentSlide > 0 ?  currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0)
  }

  return (
    <div className='works' id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/phone.png" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} />
            </div>
          </div>
        </div>)}
        
      </div>
      <img src="assets/arrow-right.png" className='arrow left' onClick={() => handleClick("left")} />
      <img src="assets/arrow-right.png" className='arrow right'  onClick={() => handleClick()} />
    </div>
  )
}
