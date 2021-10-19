import { React, Fragment } from 'react'
import '../chat/chat.css';

function Rate({data, author, commandToChild}) {

    return (
        <li className="me">
          <div className="entete">
            <h2 className="author">{author}</h2>
            <span className="status blue" />
          </div>
          <div className="triangle" />
          <div className="message">
              Please Rate the quality of our conversation thus far. 5 being excellent <br/>
             {
                 data.map(entry =>  
                    <Fragment>
                    <button className="button-widget" style={{background:'#3d4703'}} onClick={ () => commandToChild(entry) }>{entry}</button>
                    <p>  </p>
                    </Fragment> 
                )
             }
          </div>
        </li>
    )
}

export default Rate
