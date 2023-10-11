import { useEffect, useState } from 'react';
import Portfoliolist from '../portfoliolist/Portfoliolist';
import './portfolio.scss';
import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, brandingPortfolio, } from '../data.js';

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    {id:"featured", title:"Featured"},
    {id:"web", title:"Web App"},
    {id:"mobile", title:"Mobile App"},
    {id:"design", title:"Design"},
    {id:"branding", title:"Branding"},
  ];

  useEffect(()=> {
    switch(selected){
      case "featured" : setData(featuredPortfolio);
      break;
      case "web" : setData(webPortfolio);
      break;
      case "mobile" : setData(mobilePortfolio);
      break;
      case "design" : setData(designPortfolio);
      break;
      case "branding" : setData(brandingPortfolio);
      break;
      default :setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => <Portfoliolist title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected} />)}
      </ul>
      <div className="container">
        {data.map((data) => <div className="item">
          <img src={data.img} />
          <h3>{data.title}</h3>
        </div>)}
        
        
      </div>
    </div>
  )
}
