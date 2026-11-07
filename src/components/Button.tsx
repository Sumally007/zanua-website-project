import React from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'light' | 'outline';
}

const variants = {
    primary: 'text-white bg-brand-blue',
    light: 'text-brand-blue bg-white',
    outline: 'text-brand-blue bg-white border border-brand-blue',
};


const Button: React.FC<ButtonProps> = ({ children, className = "", variant = 'primary', ...props }) => {
    return (
        <button
            className={`outline-none px-[17.5px] py-[8px] text-[18px] font-medium rounded-[5px] hover:cursor-pointer ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button;