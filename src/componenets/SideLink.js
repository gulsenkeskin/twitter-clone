import React from 'react'

const SideLink = ({ key, name, Icon, active, onMenuItenClick }) => {
    const isActive = active === name;
    return (
        <li className="group" onClick={() => onMenuItenClick(name)}>
            <a href={name} className="cursor-pointer block text-xl mb-2 pointer-events-none">
                <div className="inline-block">
                    <div className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3
                ${isActive ? "text-primary-base" : ""}
                `}>
                        <Icon></Icon>
                        <span className="ml-4 font-bold">
                            {name}
                        </span>
                    </div>
                </div>
            </a>
        </li >

    )
}


export default SideLink