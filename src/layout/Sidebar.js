import React, { useState } from 'react'
import SideLink from '../componenets/SideLink';

import { HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookmarksIcon, ListsIcon, ProfileIcon, MoreIcon, TwitterIcon, } from '../icons/icons';

const sideLinks = [
    {
        name: "Home",
        icon: HomeIcon
    },
    {
        name: "Explore",
        icon: ExploreIcon
    },
    {
        name: "Notifications",
        icon: NotificationsIcon
    },
    {
        name: "Messages",
        icon: MessagesIcon
    },
    {
        name: "Bookmarks",
        icon: BookmarksIcon
    },
    {
        name: "Lists",
        icon: ListsIcon
    },
    {
        name: "Profile",
        icon: ProfileIcon
    },
    {
        name: "More",
        icon: MoreIcon
    },


]

const Sidebar = () => {
    const [active, setActive] = useState("Home");
    const handleMenuItemClick = (name) => {
        setActive(name)
    }
    return (
        <div className="flex flex-col justify-between w-72 px-2">
            <div>
                <TwitterIcon className="w-9 h-9 text-primary-base" />
                <nav className="mb-4">
                    <ul>
                        {sideLinks.map(({ name, icon }) => (<SideLink key={name} name={name} Icon={icon} active={active} onMenuItenClick={handleMenuItemClick} ></SideLink>))}
                    </ul>
                </nav>
                <button className="bg-primary-base text-white shadow-lg hover:bg-primary-dark rounded-full py-3 px-8 w-11/12 transform transition-colors duration-200">Tweet</button>

            </div>
        </div>
    )
}
export default Sidebar
