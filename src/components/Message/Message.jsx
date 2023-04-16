import React from 'react';
import TimeAgo from 'timeago-react';

function Message({ own, message, user }) {
    return (
        <>{
            own ?
                <>
                    {/* <p className="p-4 text-center text-sm text-gray-500">12:40 PM</p> */}
                    <div className="flex flex-row justify-end">
                        <div className="messages text-sm text-white grid grid-flow-row">
                            <div className="flex items-center flex-row-reverse group">
                                <p className="px-6 py-3 rounded-b-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">
                                    {message.text}</p>
                            </div>
                            <time className="text-right text-[10px] opacity-50 "><TimeAgo datetime={message.createdAt} /></time>
                        </div>
                        <div className="w-8 h-8 relative flex flex-shrink-0 ml-4">
                            <img className="shadow-md rounded-full w-full h-full object-cover" src={user.image} alt />
                        </div>
                        
                    </div>
                    
                </>

                :
                <>
                    {/* <p className="p-4 text-center text-sm text-gray-500">SAT 2:10 PM</p> */}
                    <div className="flex flex-row justify-start mt-3">
                        <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                            <img className="shadow-md rounded-full w-full h-full object-cover" src={message.sender.picture} alt />
                        </div>
                        <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                            <div className="flex items-center group">
                                <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">{message.text}</p>
                            </div>
                            <time className="text-white text-[10px] opacity-50 "><TimeAgo datetime={message.createdAt} /></time>

                        </div>
                    </div>
                </>
        }
        </>
    )
}

export default Message