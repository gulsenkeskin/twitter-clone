import React from 'react'

const UserBox = () => {
    return (
        <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-2 transform transition-colors duration-200">
            <img src="https://pbs.twimg.com/profile_images/1454556879770767360/4Pg7KXNm_400x400.jpg" alt="Profile" className="w-11 h-11 rounded-full"></img>
            <div className="flex flex-col">
                <span className="font-bold text-md text-black">
                    Gülsen Keskin
                </span>
                <span className="text-sm text-gray-dark">
                    @gulsenkeskin_
                </span>
            </div>
            <div className="flex space-x-1">
                <div className="m-1 h-1 bg-gray-900 rounded-full"></div>
                <div className="m-1 h-1 bg-gray-900 rounded-full"></div>
                <div className="m-1 h-1 bg-gray-900 rounded-full"></div>
            </div>
        </div>
    )
}

export default UserBox;