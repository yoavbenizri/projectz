import React from 'react';
import Message from './Props';

interface Props {
    messages: Message[];
}

const MessageList: React.FC<Props> = ({ messages }) => (
  <div className="message_list">
    {messages.map((m, index) => (
      <div className={"message" + (m.self ? " message_self" : "")} key={index}>
        <p className="message_user">{m.user}</p><p className="message_body">{m.text}</p>
      </div>
    ))}
  </div>
);

export default MessageList;
