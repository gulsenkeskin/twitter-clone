import React, { useEffect } from 'react'
import Divider from '../componenets/Divider'
import TweetBox from '../componenets/TweetBox'
import { PopularIcon } from '../icons/icons'

const Content = () => {
    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
            <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <PopularIcon className="w-6 h-6 text-primary-base"></PopularIcon>
            </header>
            <div className="flex space-x-4 px-4 py-3">
                <img src="https://pbs.twimg.com/profile_images/1454556879770767360/4Pg7KXNm_400x400.jpg" alt="Profile" className="w-11 h-11 rounded-full"></img>
                <TweetBox>

                </TweetBox>
            </div>
            <Divider></Divider>
        </main>
    )
}
export default Content
