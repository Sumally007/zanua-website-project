import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
    children: React.ReactNode;
    className?: string;
}



const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => {
    return (
        <button className={`outline-none px-[17.5px] py-[8px] text-[18px] font-medium text-white bg-brand-blue rounded-[5px] ${className}`}{...props}>{children}</button>
    )
}

export default Button;