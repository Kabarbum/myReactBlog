import React from 'react';
import cl from './Mybutton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button className={cl.MyButton} {...props}>{children}</button>
    );
};

export default MyButton;