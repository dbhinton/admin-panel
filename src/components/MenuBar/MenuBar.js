import React from 'react'
import './MenuBarStyles.css'
import {NotificationsNone, Settings, Language} from '@material-ui/icons';

export default function MenuBar() {
  return (
      <>
    <div className="menuBar">
     <div className='menuBarWrapper'>
       <div className="menuBarLeft">
          <span className='logo'>Admin</span> 
       </div>
       <div className="menuBarRight">
           <div className='menuIconContainer'>
               <NotificationsNone className="menuIcon"/>
               <span className='menuIconBadge'>2</span>
           </div>
           <div className='menuIconContainer'>
               <Language className="menuIcon"/>
           </div>
           <div className='menuIconContainer'>
               <Settings className="menuIcon"/>
           </div>
           <img src="https://i.imgur.com/nulR6IG.png" alt="" className='menuAvatar'/>
           
           
       </div>
     </div>
      
    </div>
    </>
    
  )
}