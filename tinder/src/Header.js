import React from 'react'
import "./header.css" 
import { HiUser } from "react-icons/hi";
import {MdOutlineForum} from "react-icons/md"
import IconButton from "@material-ui/core/IconButton"

function Header() {
  return (
    <div className='header'>
      <IconButton className= 'user'>
          <HiUser/>  
      </IconButton>
      <img 
        className='logo'
        src = "data:image/png;base64,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"
        alt='tinder logo'
        />                
      <IconButton className='forum'>
        <MdOutlineForum/>
      </IconButton>
    </div>    
  )
}

export default Header  