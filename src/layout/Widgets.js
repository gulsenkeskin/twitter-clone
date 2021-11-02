import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { SearchIcon } from "../icons/icons"

const Widgets = () => {
    return (
        <aside className=" w-80">
            <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-primary-base focus-within:text-primary-base ">
                <SearchIcon className="w-5 h-5"></SearchIcon>
                <input type="text" placeholder="Search Twitter" className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm"></input>
            </div>
            <div className="mt-5"><Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'gulsenkeskin_'
                }}
                options={{
                    height: '1000'
                }}
            /></div>
        </aside>

    )
}
export default Widgets
