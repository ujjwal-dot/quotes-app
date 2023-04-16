import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style.css'

function Nav() {

  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);


   const handleMouseEnter = () => {
      setIsHover(true);
   };
   const handleMouseLeave = () => {
      setIsHover(false);
   };

   const handleMouseEnter2 = () => {
    setIsHover2(true);
 };
 const handleMouseLeave2 = () => {
    setIsHover2(false);
 };

  const linkStyle={
     fontWeight:isHover?"bold":"normal",
     color:"white",
     padding: '20px 50px',
     textDecoration:"none",
      
  }

  const linkStyle2={
    fontWeight:isHover2?"800":"normal",
    color:"white",
    padding: '20px 50px',
    textDecoration:"none",
     
 }
  
  return (
    <div className='nav-container'>
     <Link to={'/'} style={linkStyle} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Home</Link>
     <Link to={'/bookmarks'} style={linkStyle2}onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}>BookMark</Link>
    </div>
  )
}

export default Nav