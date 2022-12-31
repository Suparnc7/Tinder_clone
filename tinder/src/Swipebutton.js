import React from 'react'
import './swipebutton.css'
import {IoMdRefresh} from "react-icons/io"
import {CgClose} from "react-icons/cg"
import {AiFillStar} from "react-icons/ai"
import {MdFavorite} from "react-icons/md"
import {TiFlash} from "react-icons/ti"
import IconButton from "@material-ui/core/IconButton"

function Swipebutton() {
  return (
    <div className='swipebutton'>
        <IconButton className="sw_btn_repeat">
            <IoMdRefresh/>
        </IconButton>
        <IconButton className="sw_btn_left">
            <CgClose/>
        </IconButton>
        <IconButton className="sw_btn_star">
            <AiFillStar/>
        </IconButton>
        <IconButton className="sw_btn_right">
            <MdFavorite/>
        </IconButton>
        <IconButton className="sw_btn_light">
            <TiFlash/>
        </IconButton>
        
    </div>
  )
}

export default Swipebutton