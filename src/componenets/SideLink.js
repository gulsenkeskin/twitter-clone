import React from 'react'

const SideLink = ({ key, name, Icon, active, handleMenuItemClick }) => {
    return (
        <li className="group">
            <a href={name} className="cursor-pointer block text-xl mb-2">
                <div className="inline-block">
                    <div className="flex items-center group:bg-primary-light group:text-primary-base rounded-full pl-3 pr-8 py-3">
                        <Icon></Icon>
                        <span className="ml-4 font-bold">
                            {name}
                        </span>
                    </div>
                </div>
            </a>
        </li>

    )
}


export default SideLink