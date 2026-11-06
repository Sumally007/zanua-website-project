// import logo from '@/assets/images/zanua-logo.png';
// import mobileLogo from '@/assets/images/mobile-zanua-logo.png';
// import Button from './Button';
// import NavLinks from './NavLinks';
// import MenuButton from './ManuButton';
// import { useState } from 'react';

// const Navigation = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className="relative w-full h-[127px] border-b border-brand-border">
//             <div className="flex items-center justify-between h-full xl:mx-[75px] mx-[2.5rem]">
//                 <img
//                     src={mobileLogo}
//                     alt="Zanua Logo"
//                     className="block h-[40px] w-auto xl:hidden"
//                 />
//                 <img
//                     src={logo}
//                     alt="Zanua Logo"
//                     className="hidden h-[45px] w-[205px] xl:block hover:cursor-pointer"
//                 />
//                 <div className="mx-10 hidden xl:block">
//                     <NavLinks />
//                 </div>
//                 <div className="hidden xl:block">
//                     <Button>Request demo</Button>
//                 </div>

//                 <MenuButton
//                     isOpen={isOpen}
//                     onClick={() => setIsOpen((prev) => !prev)}
//                     className="xl:hidden"
//                 />
//             </div>

//             {/* Menyu ya mobile */}
//             <div
//                 className={`absolute top-full left-0 z-50 w-full overflow-hidden bg-white transition-all duration-300 xl:hidden ${isOpen ? 'h-screen border-b border-brand-border' : 'max-h-0'
//                     }`}
//             >
//                 <div className="flex flex-col justify-between px-[2.5rem] h-full pb-[2.5rem]">
//                     <NavLinks className="flex flex-col gap-6 text-[20px]" />
//                     <Button className="w-full">Request demo</Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navigation;

import logo from '@/assets/images/zanua-logo.png';
import mobileLogo from '@/assets/images/mobile-zanua-logo.png';
import Button from './Button';
import NavLinks from './NavLinks';
import MenuButton from './ManuButton';
import { useState } from 'react';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    useLockBodyScroll(isOpen);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-white">
            {/* Safu ya juu */}
            <div className="flex h-[88px] items-center justify-between mx-[2rem] md:mx-[2.5rem] xl:mx-[75px] xl:h-[127px]">
                <img
                    src={mobileLogo}
                    alt="Zanua Logo"
                    className="block h-[40px] w-auto xl:hidden"
                />
                <img
                    src={logo}
                    alt="Zanua Logo"
                    className="hidden h-[45px] w-[205px] xl:block hover:cursor-pointer"
                />
                <div className="mx-10 hidden xl:block">
                    <NavLinks />
                </div>
                <div className="hidden xl:block">
                    <Button>Request demo</Button>
                </div>

                <MenuButton
                    isOpen={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="xl:hidden"
                />
            </div>

            {/* Menyu ya mobile */}
            <div
                className={`absolute top-full left-0 w-full overflow-hidden bg-white transition-[height] duration-300 xl:hidden ${isOpen ? 'h-[calc(100dvh-100%)] border-t border-brand-border' : 'h-0'
                    }`}
            >
                <div className="flex h-full flex-col justify-between overflow-y-auto px-[2rem] pt-8 pb-[2.5rem]">
                    <NavLinks
                        className="flex flex-col gap-6 text-[20px]"
                        onItemClick={() => setIsOpen(false)}
                    />
                    <Button className="w-full">Request demo</Button>
                </div>
            </div>
        </header>
    )
}

export default Navigation;