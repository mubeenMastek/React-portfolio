import './menu.scss';

export default function Menu({open, setOpen}) {
  return (
    <div class={"menu " + (open && "active")}>
        <ul>
            <li onClick={()=> setOpen(false)}> 
                <a href='#intro'>Home</a>
            </li>
            <li onClick={()=> setOpen(false)}>
                <a href='#portfolio'>Portfolio</a>
            </li>
            <li onClick={()=> setOpen(false)}>
                <a href='#works'>Works</a>
            </li>
            <li onClick={()=> setOpen(false)}>
                <a href='#testimonials'>Testimonials</a>
            </li>
            <li onClick={()=> setOpen(false)}>
                <a href='#contact'>Contact</a>
            </li>
        </ul>      
    </div>
  )
}
