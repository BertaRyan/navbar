import {useState, useRef} from 'react'
import {links, social} from "./data"
import { FaBarsStaggered } from "react-icons/fa6";
import logo from './logo.svg'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainerRef = useRef(null)
    const linksRef = useRef()

    const toggleLinks = () => {
      console.log(linksRef)
      setShowLinks(!showLinks)
    }

    const linkStyles = {
      height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : "0", 
    }

    return <nav>
      <div className="nav-header">
        <div className="logo">
            <img src={logo} alt='Logo' />
        </div>
          <button className="toggle-btn" onClick={toggleLinks}><FaBarsStaggered /></button>
      </div>
         <div className="menu" ref={linksContainerRef} style={linkStyles} >
      <ul ref={linksRef} >
      {links && links.map((item) => {
        return <a key={item.id} href={item.url}><li>{item.text}</li></a>
      })}
      </ul>
    </div>
    <ul className="social-container">
      {social.map((item) => {
        return <a key={item.id} href={item.url}><li>{item.icon}</li></a>
      })}
    </ul>
      
      </nav>;
}

export default Navbar