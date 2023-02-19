import React, { useEffect, useRef } from 'react';
import Message from './Structs';

interface Props {
    messages: Message[];
}

const MessageList: React.FC<Props> = ({ messages }) => {
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (<div className="message_list">
        {messages.map((m, index) => {
            return (
                <div className={"message_container" + 
                    (m.self ? " message_self" : "") + 
                    (index == messages.length - 1 || index < messages.length-1 && m.self != messages[index+1].self ? " message_last" : "")}>
                    <div className="message_status">
                        <img className="avatar" src="https://cdn.discordapp.com/attachments/1072151742113906691/1072539783647211650/bea5bc4fab53eac491a5e9698a60706a.jpg"></img>
                    </div>
                    <div className="message" key={index}>
                        <p className="message_user">{m.user}</p>
                        <p className="message_body">{m.text}</p>
                    </div>
                    <div className="message_spacer"></div>
                </div>
            );
        })}
        <div ref={messagesEndRef}/>
    </div>);
};

export default MessageList;
