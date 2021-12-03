import React from 'react'
import './smallWidgetStyles.css'
import { Visibility } from "@material-ui/icons";

export default function SmallWidget() {
    return (
        <div className="smallWidget">
            <span className="smallWidgetTitle">New Users</span>
            <ul className="smallWidgetList">
                <li className="smallWidgetListItem">
                    <img src="https://i.imgur.com/nulR6IG.png" alt="smallImg" className="smallWidgetImage"/>
                    <div className="smallWidgetUser">
                        <span className="smallWidgetUsername">David Hinton</span>
                        <span className="smallWidgetRole">Software Engineer</span>
                    </div>
                    <button className="smallWidgetButton">
                        <Visibility className="smallWidgetIcon"/>
                        Display
                    </button>

                </li>
                <li className="smallWidgetListItem">
                    <img src="https://i.imgur.com/nulR6IG.png" alt="smallImg" className="smallWidgetImage"/>
                    <div className="smallWidgetUser">
                        <span className="smallWidgetUsername">David Hinton</span>
                        <span className="smallWidgetRole">Software Engineer</span>
                    </div>
                    <button className="smallWidgetButton">
                        <Visibility className="smallWidgetIcon"/>
                        Display
                    </button>

                </li>
                <li className="smallWidgetListItem">
                    <img src="https://i.imgur.com/nulR6IG.png" alt="smallImg" className="smallWidgetImage"/>
                    <div className="smallWidgetUser">
                        <span className="smallWidgetUsername">David Hinton</span>
                        <span className="smallWidgetRole">Software Engineer</span>
                    </div>
                    <button className="smallWidgetButton">
                        <Visibility className="smallWidgetIcon"/>
                        Display
                    </button>

                </li>
                <li className="smallWidgetListItem">
                    <img src="https://i.imgur.com/nulR6IG.png" alt="smallImg" className="smallWidgetImage"/>
                    <div className="smallWidgetUser">
                        <span className="smallWidgetUsername">David Hinton</span>
                        <span className="smallWidgetRole">Software Engineer</span>
                    </div>
                    <button className="smallWidgetButton">
                        <Visibility className="smallWidgetIcon"/>
                        Display
                    </button>

                </li>
                <li className="smallWidgetListItem">
                    <img src="https://i.imgur.com/nulR6IG.png" alt="smallImg" className="smallWidgetImage"/>
                    <div className="smallWidgetUser">
                        <span className="smallWidgetUsername">David Hinton</span>
                        <span className="smallWidgetRole">Software Engineer</span>
                    </div>
                    <button className="smallWidgetButton">
                        <Visibility className="smallWidgetIcon"/>
                        Display
                    </button>

                </li>
     

            </ul>
        </div>
    )
}
