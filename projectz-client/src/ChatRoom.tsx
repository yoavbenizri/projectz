import React, { useEffect, useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import Message from './Structs';
import io, { Socket } from 'socket.io-client';

interface ServerToClientEvents {
    onMessage: (user: string, text: string) => void;
}

interface ClientToServerEvents {
}

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();

const ChatRoom: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isConnected, setIsConnected] = useState(socket.connected);

    const handleMessageSubmit = (user: string, text: string, self: boolean) => {
        setMessages([...messages, { user, text, self }]);
    };

    // called only on initial render
    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('onMessage', (user, text) => {
            handleMessageSubmit(user, text, false);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };
    }, []);

    return (
        <div className="chat_room">
            <h2>יב3 צ'אט סופר סודי</h2>
            <MessageList messages={messages} />
            <MessageInput onMessageSubmit={handleMessageSubmit} />
        </div>
    );
};

export default ChatRoom;