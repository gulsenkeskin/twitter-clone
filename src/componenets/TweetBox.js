import firebase from 'firebase'
import React, { useState } from 'react'
// import db from '../database/firebase'
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon } from '../icons/icons'

const TweetBox = () => {
    const [content, setContent] = useState('')

    const sendTweet = () => {
        //text areadan aldığım content i firestore veri tabanıma atar
        // if (content !== '') {
        //     db.collection('feed').add({
        //         displayName: "Gülsen Keskin",
        //         userName: "@gulsenkeskin_",
        //         content,
        //         timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        //         avatar: "https://pbs.twimg.com/profile_images/1454556879770767360/4Pg7KXNm_400x400.jpg"
        //     })
        //     setContent('')
        // }

    }

    return (
        <div className="flex flex-col flex-1 mt-2 px-2">
            <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" placeholder="What's happening"
                onChange={e => setContent(e.target.value)}
                value={content}
            ></textarea>
            <div className=" flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">

                        <ImageIcon className="w-6 h-6 text-primary-base"></ImageIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">

                        <GIFIcon className="w-6 h-6 text-primary-base"></GIFIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">

                        <PollIcon className="w-6 h-6 text-primary-base"></PollIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">

                        <EmojiIcon className="w-6 h-6 text-primary-base"></EmojiIcon>
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">

                        <ScheduleIcon className="w-6 h-6 text-primary-base"></ScheduleIcon>
                    </div>




                </div>
                <button className="bg-primary-base text-white rounden-full px-4 py-2 font-medium" onClick={sendTweet}>Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox