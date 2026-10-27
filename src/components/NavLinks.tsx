import React from 'react'

interface NavItem {
    label: string;
    href: string;
    active?: boolean;
}

interface NavLinksProps {
    items?: NavItem[];
    className?: string;
}

const defaultNavItems: NavItem[] = [
    { label: 'Features', href: '#features', active: true },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
]

const NavLinks: React.FC<NavLinksProps> = ({
    items = defaultNavItems,
    className = 'flex items-center',
}) => {
    return (
        <ul className={`${className}`}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`text-[18px] font-medium ${index !== 0 ? 'ml-[85px]' : ''} ${item.active ? 'text-brand-blue' : 'text-brand-dark'
                        } hover:text-brand-blue cursor-pointer transition-colors`}>
                    <a href={item.href}>{item.label}</a>
                </li>
            ))}
        </ul>

    )
}

export default NavLinks