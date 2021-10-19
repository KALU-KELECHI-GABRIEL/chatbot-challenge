import {React, useState, useEffect, useRef} from 'react';
import queryString from 'query-string';
import Switch from "react-switch";
import io from 'socket.io-client';
import ScrollToBottom from 'react-scroll-to-bottom';
import {Send }from '@mui/icons-material'

import "./chat.css";
import img from './profile.jpg'
import Aside from '../aside/Aside';
import Message from './message/Message';
import Command from '../command/Command';

let socket;

function Chat({location}) {
  /**
   * state variables
   */
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [sentMessage, setSentMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [commands, setCommands] = useState([]);
  const ENDPOINT = 'http://localhost:7007'
  const messagesEndRef = useRef(null)

  // const [widgetInteractions, setWidgetInteraction] = useState({
  //   rate: 0,
  //   map: 0,
  //   date: 0,
  //   complete: 0
  // });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  /**
   * Toggle the chat mode between command and message
   * 
   */
  const handleChecked = (e) => {
    if (checked) {
      setChecked(false)
    }
    else{
      setChecked(true)
    }
  }

  /**
   * Handle state change for the textarea input
   * @param {*} e 
   */
  const handleChange = (e) => {
    setSentMessage(e.target.value);
  }

  /**
   * On component did mount and upon changes to the query string that is username or connection to the server. A join event is emitted to the server
   */
  useEffect(() => {
    const {username} = queryString.parse(location.search);
    setUsername(username);
    //setup connection to sockeio
    socket = io(ENDPOINT);

    socket.emit('join', { author: username }, () => {});

  }, [ENDPOINT, location.search])

  /**
   * Component did update to listen for a new message/command from the sever
   */
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
      setCommands([]);
      setSentMessage('');
    });
    socket.on('command response', (command) => {
        command.command.type === 'nil' ? 
        setMessages([...messages, { author: command.author, message: command.command.message, timePosted: new Date() }]) : setCommands([command]);
        setSentMessage('');
    });
    scrollToBottom();
  }, [messages, commands]);

  /**
   * Send Message/command to Server on clicking enter/send icon
   */
  const sendMessage = () => {
    if (checked) {
      // send command
      console.log('command');
      socket.emit('command', {author: username, message: sentMessage});
    }
    else if (!checked){
      // send message
      const newMessage = {
        author: username, message: sentMessage, timePosted: new Date()
      }
      setMessages([...messages, newMessage]);
      socket.emit('send message', { author: username, message: sentMessage }, () => {
        setSentMessage('');
      });
    }
  }
  
  /**
   * Return message from child command components and update messages and command state
   * @param {*} childDataComplete 
   */
  const childToParent = (childDataComplete) => {
    let messageComplete = {
      author: childDataComplete.author,
      message: childDataComplete.message,
      timePosted: childDataComplete.time
    }
    if (childDataComplete.complete === true) {
      setMessages([...messages, messageComplete]);
      setCommands([]);
      socket.disconnect();
    }
    else if(childDataComplete.complete === false) {
      setMessages([...messages, messageComplete]);
      // widgetInteractions[`${childDataComplete.type}`] = widgetInteractions[`${childDataComplete.type}`] + 1;
      setCommands([]);
    }
}
    return (
      <div>
        <div id="container">
        <Aside/>
          <main>
            <header>
              <img className='profile-image' src={img} alt='chatbot thomas' />
              <div>
                <h2>Chat with Thomas</h2>
                {checked ? 
                <h3 className='col-dark'>Command Mode</h3>
                :
                <h3  className='col-dark'>Message Mode</h3> 
                }
              </div>
                <div className="move-right">
                  <h3>Toggle Chat Mode</h3>
                <label>
                  <span>
                  <Switch className='col-dark react-switch' onChange={() => handleChecked()} checked={checked} /></span>
                </label>
                </div>
            </header>
            <ul id="chat">
              <ScrollToBottom id='chat'> {
                messages.map(message => 
                <Message data={message}/>
                )
              }
              { console.log(commands) }
              {
                commands.map(command => 
                <Command data={command} childToParent={ childToParent }/>
                )
              }
              </ScrollToBottom>
              {/* <li ref={messagesEndRef} /> */}
            </ul>
            <footer>
              <div className='box'>
                <div className='col-10'>
              <textarea placeholder="Type your message"
              value={sentMessage}
              onChange={(e) => { handleChange(e) }}
              onKeyPress={ e => e.key === 'Enter' ?  sendMessage() : null }
              />
                </div>
                <div className='col-2'>
              <Send fontSize='large' color='primary' onClick={() => { sendMessage() }} /><h3>Send</h3>
                </div>
              </div>
            </footer>
          </main>
          <aside>
            <header></header>
            <ul></ul>
          </aside>
        </div>   
      </div>
    )
}

export default Chat
