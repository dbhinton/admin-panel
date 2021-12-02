import React from 'react'
import './SideBarStyles.css'
import {  LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
} from '@material-ui/icons';
export default function SideBar() {
    return (
        <div className="sideBar">
            <div className='sideBarWrapper'>
                <div className='sideBarMenu'>
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className='sideBarList'>
                        <li className="sideBarListItem active">
                            <LineStyle className='sideBarIcon'/>
                            Home
                        </li>
                        <li className="sideBarListItem">
                            <Timeline className='sideBarIcon'/>
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUp className='sideBarIcon'/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sideBarMenu'>
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className='sideBarList'>
                        <li className="sideBarListItem">
                            <PermIdentity className='sideBarIcon'/>
                            Users
                        </li>
                        <li className="sideBarListItem">
                            <Storefront className='sideBarIcon'/>
                            Products
                        </li>
                        <li className="sideBarListItem">
                            <AttachMoney className='sideBarIcon'/>
                            Transactions
                        </li>
                        <li className="sideBarListItem">
                            <BarChart className='sideBarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sideBarMenu'>
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className='sideBarList'>
                        <li className="sideBarListItem">
                            <Timeline className='sideBarIcon'/>
                            Feedback
                        </li>
                        <li className="sideBarListItem">
                            <MailOutline className='sideBarIcon'/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sideBarMenu'>
                    <h3 className="sideBarTitle">Utilities</h3>
                    <ul className='sideBarList'>
                        <li className="sideBarListItem">
                            <LineStyle className='sideBarIcon'/>
                            Settings
                        </li>
                        <li className="sideBarListItem">
                            <Timeline className='sideBarIcon'/>
                            
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUp className='sideBarIcon'/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
