import { React, Fragment } from 'react'
import '../chat/chat.css'

function Complete({data, author, commandToChild}) {


    return (
        <li className="me">
          <div className="entete">
            <h2 className="author">{author}</h2>
            <span className="status blue" />
          </div>
          <div className="triangle" />
          <div className="message">
              Are you sure you want to close this conversation? <br/>
             {
                 data.map(entry =>  
                    <Fragment>
                    <button className="button-widget" onClick={ () => commandToChild(entry) }>{entry}</button>
                    <p>  </p>
                    </Fragment> 
                )
             }
          </div>
        </li>
    )
}

export default Complete
