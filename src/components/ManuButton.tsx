import React from 'react';

interface MenuButtonProps {
    isOpen: boolean;
    onClick: () => void;
    className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick, className = '' }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className={`relative h-[22px] w-[28px] cursor-pointer outline-none ${className}`}
        >
            <span
                className={`absolute left-0 h-[2px] w-full rounded-full bg-brand-dark transition-all duration-300 ${isOpen ? 'top-[10px] rotate-45' : 'top-[6px] rotate-0'
                    }`}
            />
            <span
                className={`absolute left-0 h-[2px] w-full rounded-full bg-brand-dark transition-all duration-300 ${isOpen ? 'top-[10px] -rotate-45' : 'top-[14px] rotate-0'
                    }`}
            />
        </button>
    );
};

export default MenuButton;