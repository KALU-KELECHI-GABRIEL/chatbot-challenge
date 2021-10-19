import { React } from 'react';
import "../chat/chat.css";


function Aside() {

    return (
        <aside>
          <header>
          </header>
          <ul>
            <li>
              <div className='pr-m'>
                <h1 className='col-white'>Guides on chatting with Thomas</h1>
              </div>
            </li>
            <li>
              <div>
                <h2 className='col-white'>Toggle the chat switch, to select Mode of interaction between Message and Command modes </h2>
              </div>
            </li>
            <li>
              <div>
                <h2 className='col-white'>Random Widgets are displayed when command mode is turned ON </h2>
              </div>
            </li>
            <li>
              <div>
                <h2 className='col-white'>You can only interact with these widgets ONCE </h2>
              </div>
            </li>
          </ul>
        </aside>
    )
}

export default Aside
