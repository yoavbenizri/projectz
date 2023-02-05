import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Message from './Props';

const ChatRoom: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessageSubmit = (user: string, text: string, self : boolean) => {
    setMessages([...messages, { user, text, self }]);
  };

  return (
    <div>
      <h2>יב3 צ'אט סופר סודי</h2>
      <MessageList messages={messages}/>
      <hr />
      <MessageInput onMessageSubmit={handleMessageSubmit} />
    </div>
  );
};

export default ChatRoom;