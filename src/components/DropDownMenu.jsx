import React from 'react';

const DropDownMenu = (props) => {
    return (
        <div className="drop-down-menu">
            {props.list.map(x => (
                <p className="drop-down-menu-item"
                onClick={() => {
                    props.setIsOpen(false);
                    props.setName && props.setName(x);
                }}>{x}</p>
            ))}
        </div>
    );
};

export default DropDownMenu;