import './topbar.scss';
import {Person, Mail} from '@material-ui/icons';

export default function TopBar({open, setOpen}) {
  return (
    <div className={"topbar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className='logo'>genius.</a>
            <div className="itemContainer">
                <Person className='icon' />
                <span>+765 98764</span>
            </div>
            <div className="itemContainer">
                <Mail className='icon' />
                <span>mubeen@genius.com</span>
            </div>
            
        </div>
        <div className="right">
            <div className="hamburger" onClick={() => setOpen(!open)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
      </div>
    </div>
  )
}
