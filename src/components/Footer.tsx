import NavLinks from './NavLinks'
import {
    AiOutlineLinkedin,
    AiOutlineFacebook,
    AiOutlineWhatsApp,
    AiOutlineInstagram,
} from 'react-icons/ai'

const socials = [
    { label: 'LinkedIn', href: '#', icon: AiOutlineLinkedin },
    { label: 'Facebook', href: '#', icon: AiOutlineFacebook },
    { label: 'WhatsApp', href: '#', icon: AiOutlineWhatsApp },
    { label: 'Instagram', href: '#', icon: AiOutlineInstagram },
]

const Footer = () => {
    return (
        <footer className="rounded-t-[60px] bg-brand-blue px-6 pt-12 pb-10 text-brand-white lg:px-[75px]">

            <div className="flex flex-col items-start justify-between gap-8 pb-8 md:flex-row md:items-center">
                <NavLinks
                    variant="light"
                    className="flex flex-wrap items-center gap-x-[80px] gap-y-4 text-[18px]"
                />

                <ul className="flex items-center gap-8">
                    {socials.map(({ label, href, icon: Icon }) => (
                        <li key={label}>
                            <a
                                href={href}
                                aria-label={label}
                                className="block transition-opacity hover:opacity-70"
                            >
                                <Icon className="h-[32px] w-[32px]" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <hr className="border-white/15" />


            <div className="@container w-full overflow-hidden py-6">
                <p
                    aria-hidden="true"
                    className="font-title-text select-none whitespace-nowrap text-[33.4cqw] leading-[0.7] text-brand-white"
                >
                    zanua
                </p>
            </div>

            <hr className="border-white/15" />

            <div className="flex flex-col gap-3 pt-10 text-[18px] md:flex-row md:items-center md:justify-between">
                <p>© 2026 Zanua Technologies. All rights reserved.</p>
                <p>Developed by Ismail Mbarouk.</p>
            </div>
        </footer>
    )
}

export default Footer