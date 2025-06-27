import {useState} from 'react'
import {links, social} from "./data"
import { FaBarsStaggered } from "react-icons/fa6";
import logo from './logo.svg'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    return <nav>
      <div className="nav-header">
        <div className="logo">
            <img src={logo} alt='Logo' />
        </div>
          <button className="toggle-btn" onClick={() => setShowLinks(!showLinks)}><FaBarsStaggered /></button>
      </div>
         <div className={showLinks ? "menu show-container" : "menu"} >
      <ul>
      {links && links.map((item) => {
        return <a key={item.id} href={item.url}><li>{item.text}</li></a>
      })}
      </ul>
    </div>
    
      
      </nav>;
}

export default Navbar