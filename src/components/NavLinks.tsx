import React from 'react'

interface NavItem {
    label: string;
    href: string;
    active?: boolean;
}

interface NavLinksProps {
    items?: NavItem[];
    className?: string;
    variant?: 'dark' | 'light';
    onItemClick?: () => void;
}

const defaultNavItems: NavItem[] = [
    { label: 'Features', href: '#features', active: true },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
]

const variants = {
    dark: {
        link: 'text-brand-dark hover:text-brand-blue',
        active: 'text-brand-blue',
    },
    light: {
        link: 'text-white hover:text-white/70',
        active: 'text-white',
    },
}

const NavLinks: React.FC<NavLinksProps> = ({
    items = defaultNavItems,
    className = 'flex items-center gap-[85px] text-[18px]',
    variant = 'dark',
    onItemClick,
}) => {
    return (
        <ul className={className}>
            {items.map((item) => (
                <li
                    key={item.href}
                    className={`font-medium cursor-pointer transition-colors ${item.active ? variants[variant].active : variants[variant].link
                        }`}
                >
                    <a href={item.href} onClick={onItemClick}>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default NavLinks;