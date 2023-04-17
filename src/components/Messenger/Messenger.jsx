import React, { useEffect, useRef, useState } from 'react';
import Chat from '../Chat/Chat';
import Message from '../Message/Message';
import Conversation from '../Conversation/Conversation';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllJoinedGroups } from '../../Redux/Actions/groupActions';
import { IoSend } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";
import { getMessages, sendMessage } from '../../services/userApi';
import { io } from 'socket.io-client';
import './Messenger.scss';
import { useMediaQuery } from "react-responsive";


function Messenger() {
    const dispatch = useDispatch();
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const groupData = useSelector(state => state.group);
    const user = useSelector(state => state.user);
    const scrollRef = useRef();
    const socket = useRef();
    const [showMessagesDiv, setshowMessagesDiv]=useState(true);
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });


    //socket io
    //connecting to socket
    useEffect(() => {
        socket.current = io(import.meta.env.VITE_SOCKET_URL);
    }, [user])

    //Join the appropriate room for the current group
    const handleConversation = (group) => {
        setCurrentChat(group);
        socket.current.emit('joinGroup', group._id);
    };

    //receive message and disconnect 
    useEffect(() => {
        //receive message
        socket.current.on('receiveMessage', ({ userId, text }) => {
            if (userId != user.id) {
                setMessages(messages => [...messages, { sender: userId, text }]);
            }
        });
        // Clean up when the component unmounts
        return () => {
            socket.current.disconnect();
        };
    }, [user])




    //group and messages
    //loading groups
    useEffect(() => {
        dispatch(fetchAllJoinedGroups())
    }, []);

    //get messages
    useEffect(() => {
        getMessages(currentChat?._id)
            .then((response) => {
                setMessages(response.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [currentChat]);

    //send new message 
    const handleSubmit = () => {
        if (newMessage != "") {
            const message = {
                user: user.id,
                text: newMessage,
                group: currentChat._id,
                sender: { _id: user.id }
            }
            sendMessage(message)
                .then((response) => {
                    //sending message to socketio
                    socket.current.emit('sendMessage', {
                        userId: user.id,
                        groupId: currentChat._id,
                        text: newMessage
                    })
                    //update messages
                    setMessages([...messages, message]);
                    setNewMessage("");
                })
        }
    }

    //scrolling when new message load
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages]);


    return (
        <div className="h-screen w-full flex antialiased text-black bg-white overflow-hidden">
            <div className="flex-1 flex flex-col">
                <main className="flex-grow flex flex-row min-h-0">
                    { showMessagesDiv ? 
                    <section className="flex flex-col flex-none overflow-auto w-screen group border-r border-l border-[#dee2e7] lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
                        <div className="search-box border-b border-[#dee2e7] p-4 flex-none">
                            <form onsubmit>
                                <div className="relative">
                                    <label>
                                        <input className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-100 focus:border-gray-100 bg-gray-100 focus:bg-gray-100 focus:outline-none text-gray-800 focus:shadow-md transition duration-300 ease-in" type="text"  placeholder="Search Groups" />
                                        <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                            <svg viewBox="0 0 24 24" className="w-6 h-6">
                                                <path fill="#bbb" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="contacts flex-1 overflow-y-scroll">
                            {groupData.groups && groupData.groups.map((group) => (
                                <div onClick={() => { handleConversation(group) }}>
                                    <Conversation isMobile={isMobile} setshowMessagesDiv={setshowMessagesDiv} group={group} />
                                </div>
                            ))}
                        </div>
                    </section>
                        : ""}
                    {currentChat ?
                        <section className="flex flex-col flex-auto">
                            <Chat isMobile={isMobile} setshowMessagesDiv={setshowMessagesDiv} currentChat={currentChat} />
                            <div className="chat-body p-4 flex-1 overflow-y-scroll">
                                {currentChat && messages.map((message) => {
                                    return (
                                        <div ref={scrollRef}>
                                            <Message  message={message} currentChat={currentChat} own={user.id === message.sender._id} user={user} />
                                        </div>
                                    )
                                })}
                            </div>



                            <div className="chat-footer border-t flex-none">
                                <div className="flex flex-row items-center p-4">
                                    {/* <button type="button" className="flex flex-shrink-0 focus:outline-none mx-2  text-blue-600 hover:text-blue-700 w-6 h-6">
                                        <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                            <path d="M10,1.6c-4.639,0-8.4,3.761-8.4,8.4s3.761,8.4,8.4,8.4s8.4-3.761,8.4-8.4S14.639,1.6,10,1.6z M15,11h-4v4H9  v-4H5V9h4V5h2v4h4V11z" />
                                        </svg>
                                    </button>
                                    <button type="button" className="flex flex-shrink-0 focus:outline-none mx-2  text-blue-600 hover:text-blue-700 w-6 h-6">
                                        <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                            <path d="M11,13 L8,10 L2,16 L11,16 L18,16 L13,11 L11,13 Z M0,3.99406028 C0,2.8927712 0.898212381,2 1.99079514,2 L18.0092049,2 C19.1086907,2 20,2.89451376 20,3.99406028 L20,16.0059397 C20,17.1072288 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M15,9 C16.1045695,9 17,8.1045695 17,7 C17,5.8954305 16.1045695,5 15,5 C13.8954305,5 13,5.8954305 13,7 C13,8.1045695 13.8954305,9 15,9 Z" />
                                        </svg>
                                    </button>
                                    <button type="button" className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                                        <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                            <path d="M0,6.00585866 C0,4.89805351 0.893899798,4 2.0048815,4 L5,4 L7,2 L13,2 L15,4 L17.9951185,4 C19.102384,4 20,4.89706013 20,6.00585866 L20,15.9941413 C20,17.1019465 19.1017876,18 18.0092049,18 L1.99079514,18 C0.891309342,18 0,17.1029399 0,15.9941413 L0,6.00585866 Z M10,16 C12.7614237,16 15,13.7614237 15,11 C15,8.23857625 12.7614237,6 10,6 C7.23857625,6 5,8.23857625 5,11 C5,13.7614237 7.23857625,16 10,16 Z M10,14 C11.6568542,14 13,12.6568542 13,11 C13,9.34314575 11.6568542,8 10,8 C8.34314575,8 7,9.34314575 7,11 C7,12.6568542 8.34314575,14 10,14 Z" />
                                        </svg>
                                    </button>
                                    <button type="button" className="flex flex-shrink-0 focus:outline-none mx-2 block text-blue-600 hover:text-blue-700 w-6 h-6">
                                        <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                            <path d="M9,18 L9,16.9379599 C5.05368842,16.4447356 2,13.0713165 2,9 L4,9 L4,9.00181488 C4,12.3172241 6.6862915,15 10,15 C13.3069658,15 16,12.314521 16,9.00181488 L16,9 L18,9 C18,13.0790094 14.9395595,16.4450043 11,16.9378859 L11,18 L14,18 L14,20 L6,20 L6,18 L9,18 L9,18 Z M6,4.00650452 C6,1.79377317 7.79535615,0 10,0 C12.209139,0 14,1.79394555 14,4.00650452 L14,8.99349548 C14,11.2062268 12.2046438,13 10,13 C7.790861,13 6,11.2060545 6,8.99349548 L6,4.00650452 L6,4.00650452 Z" />
                                        </svg>
                                    </button> */}
                                    <div className="relative flex-grow">
                                        <label>
                                            <input className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-100 focus:border-gray-200 bg-gray-100 focus:bg-gray-200 focus:outline-none text-black focus:shadow-md transition duration-300 ease-in" type="text" value={newMessage} placeholder="Message"
                                                onChange={(e) => { setNewMessage(e.target.value) }}
                                            />
                                            <button type="button" className="absolute top-0 right-0 mt-2 mr-4 flex flex-shrink-0 focus:outline-none  text-blue-600 hover:text-blue-700 w-6 h-6">
                                                <BsEmojiSmile size={23} />
                                            </button>
                                        </label>
                                    </div>
                                    <button onClick={handleSubmit} type="button" className="flex flex-shrink-0 focus:outline-none mx-2 h-9 w-9 bg-blue-600 text-white  justify-center items-center rounded-full">
                                        <IoSend size={20}/>
                                    </button>
                                </div>
                            </div>
                        </section>
                        :

                        <div className='w-full flex justify-center items-center'>
                            No conversation selected.
                        </div>}
                </main>
            </div>
        </div>

    )
}

export default Messenger