import React from 'react'
import { HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookmarksIcon, ListsIcon, ProfileIcon, MoreIcon } from '../icons/icons'

const Sidebar = () => {
    return (
        <div className="w-72">
            <h1>Sidebar</h1>
            <HomeIcon></HomeIcon>
            <ExploreIcon></ExploreIcon>
            <NotificationsIcon></NotificationsIcon>
            <MessagesIcon></MessagesIcon>
            <BookmarksIcon></BookmarksIcon>
            <ListsIcon></ListsIcon>
            <ProfileIcon></ProfileIcon>
            <MoreIcon></MoreIcon>
        </div>
    )
}
export default Sidebar
