import React, { Fragment } from 'react'
import '../chat.css'
import moment from "moment";

function Message({data}) {
  const {author, message, time} = data;
  let client = false;
  let date;
  if (author !== 'Ottonova Bot(Thomas)') {
    client = true;
  }
  const momentNow = moment(new Date());
  const momentMessage = moment(time);
  date = momentNow.isSame(momentMessage, 'day');
    return (
      <Fragment>
        {
          client ? 
          <li className="you">
            <div className="entete">
              <span className="status green" />
              <h2 className="author">{author}</h2>
              <h3>{moment(time).format('hh:mm')}, {date? <span>Today</span>: <span>{moment(time).format('L')}</span>}</h3>
            </div>
            <div className="triangle" />
            <div className="message">
              {message}
            </div>
          </li>
          :
        <li className="me">
          <div className="entete">
            <h3>{moment(time).format('hh:mm')}, {date? <span>Today</span>: <span>{moment(time).format('L')} </span>}</h3>
            <h2 className="author">{author}</h2>
            <span className="status blue" />
          </div>
          <div className="triangle" />
          <div className="message">
            {message}
          </div>
        </li>
        }
      </Fragment>
    )
}

export default Message;
