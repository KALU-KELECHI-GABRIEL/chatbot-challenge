import { React, Fragment } from 'react'
import '../chat/chat.css';
import moment from 'moment';

function Dates({data, author, dateTime, commandToChildDate}) {

    return (
        <li className="me">
          <div className="entete">
            <h2 className="author">{author}</h2>
            <span className="status blue" />
          </div>
          <div className="triangle" />
          <div className="message">
              Please select a consultation Date over the next one week. Starting from today, {moment(dateTime).format('LL')} <br/>
             {
                 data.map(entry =>  
                    <Fragment>
                    <button className="button-widget" style={{background:'#3d4703'}} onClick={ () => commandToChildDate(entry, dateTime) }>{entry.day}</button>
                    <p>  </p>
                    </Fragment> 
                )
             }
          </div>
        </li>
    )
}

export default Dates
