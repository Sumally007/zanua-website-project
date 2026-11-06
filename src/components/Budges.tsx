import React from 'react';
import relume from '@/assets/images/relume-Logo.png';
import webflow from '@/assets/images/webflow-Logo.png';

interface LogoItem {
    id: number;
    src: string;
    alt: string;
}

const logoItems: LogoItem[] = [
    { id: 1, src: webflow, alt: 'webflowLogo' },
    { id: 2, src: relume, alt: 'relumeLogo' },
    { id: 3, src: webflow, alt: 'webflowLogo' },
];

const Budges: React.FC = () => {
    return (
        <section className='flex justify-center items-center h-[186px] bg-lightBlue mb-[var(--space-bottom)] px-[2rem] md:px-[2.5rem]'>
            <div className='flex items-center justify-between w-full max-w-[722px] '>
                {logoItems.map((item) => (
                    <img key={item.id} src={item.src} alt={item.alt} className='w-[70px] sm:w-[90px] md:w-[120px] lg:w-[140px] h-auto object-contain' />
                ))}
            </div>
        </section>
    )
}

export default Budges