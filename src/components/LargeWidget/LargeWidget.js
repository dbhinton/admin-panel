import React from 'react'
import './largeWidgetStyles.css'

export default function LargeWidget() {
    const Button = ({type}) => {
        return <button className={"largeWidgetButton " + type}>{type}</button>
    }
    return (
        <div className="largeWidget">
            <h3 className="largeWidgetTitle">Latest Transactions</h3>
            <table className="largeWidgetTable">
                <tr className="largeWidgetTr">
                    <th className="largeWidgetTh">Customer</th>
                    <th className="largeWidgetTh">Date</th>
                    <th className="largeWidgetTh">Amount</th>
                    <th className="largeWidgetTh">Status</th>
                </tr>
                <tr className="largeWidgetTr">
                    <td className="largeWidgetUser">
                        <img className="largeWidgetImage" src="https://i.imgur.com/nulR6IG.png" alt="userImg" />
                        <span className="largeWidgetUsername">David Hinton</span>
                    </td>
                    <td className="largeWidgetDate">March 20, 2021</td>
                    <td className="largeWidgetAmount">$150</td>
                    <td className="largeWidgetStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="largeWidgetTr">
                    <td className="largeWidgetUser">
                        <img className="largeWidgetImage" src="https://i.imgur.com/nulR6IG.png" alt="userImg" />
                        <span className="largeWidgetUsername">David Hinton</span>
                    </td>
                    <td className="largeWidgetDate">March 20, 2021</td>
                    <td className="largeWidgetAmount">$150</td>
                    <td className="largeWidgetStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="largeWidgetTr">
                    <td className="largeWidgetUser">
                        <img className="largeWidgetImage" src="https://i.imgur.com/nulR6IG.png" alt="userImg" />
                        <span className="largeWidgetUsername">David Hinton</span>
                    </td>
                    <td className="largeWidgetDate">March 20, 2021</td>
                    <td className="largeWidgetAmount">$150</td>
                    <td className="largeWidgetStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="largeWidgetTr">
                    <td className="largeWidgetUser">
                        <img className="largeWidgetImage" src="https://i.imgur.com/nulR6IG.png" alt="userImg" />
                        <span className="largeWidgetUsername">David Hinton</span>
                    </td>
                    <td className="largeWidgetDate">March 20, 2021</td>
                    <td className="largeWidgetAmount">$150</td>
                    <td className="largeWidgetStatus"><Button type="Declined"/></td>
                </tr>
            </table>
        </div>
    )
}
