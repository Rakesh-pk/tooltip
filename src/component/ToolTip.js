import React from 'react'
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import './tooltip.css'

const ToolTip = ({position}) => {
  //this component receives prop Position , its value can be left,right,top,down
    return (
      
            <div className="container" >
                <Tippy content="Thanks for Hovering! I am a tooltip" placement={position}>
                    <span>Hover over me!</span>
                </Tippy>

            </div>
   
    )
}

export default ToolTip;
