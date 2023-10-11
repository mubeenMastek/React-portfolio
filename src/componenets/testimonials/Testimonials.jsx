import './testimonials.scss';

export default function Testimonials() {
  const data = [
    {
      id:1, 
      name:"Alex", 
      img:"assets/profileimage1.jpg",
      title:"CEO of Genius",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      featured:false
    },
    {
      id:2, 
      name:"Jack", 
      img:"assets/profileimage2.jpg",
      title:"CEO of JackMorial",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      featured:true
    },
    {
      id:3, 
      name:"Wilson", 
      img:"assets/profileimage3.jpg",
      title:"CEO of MorrisBell",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      featured:false
    }
  ]
  return (
    <div className='testimonials' id="testimonials">
      {data.map((d) => <div className={d.featured  ? "card featured" : "card"}>
        <div className="picContainer">
          <img src={d.img}  />
        </div>        
        <p>{d.desc}</p>
        <h3>{d.name}</h3>
        <span>{d.title}</span>
      </div>)}
      
    </div>
  )
}
