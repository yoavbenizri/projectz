import React, { useState } from 'react';
import Message from './Structs';

interface Props {
    onMessageSubmit: (user: string, text: string, self : boolean) => void;
}

const MessageInput: React.FC<Props> = ({ onMessageSubmit }) => {
  const [user, setUser] = useState('');
  const [text, setText] = useState('');
  const [self, setSelf] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onMessageSubmit(user, text, self);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="message_input">
      <input type="text" placeholder="Username" value={user} onChange={e => setUser(e.target.value)} required={true}/>
      <input type="text" placeholder="Message" value={text} onChange={e => setText(e.target.value)} required={true}/>
      <input type="checkbox" onChange={e => setSelf(!self)}></input>
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
