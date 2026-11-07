import { FaArrowRightLong } from 'react-icons/fa6';
// import featureImage from '@/assets/images/featureImage.png';
import inventoryImage from '@/assets/images/featureImage.png'
import purchasingImage from '@/assets/images/featureImage.png'
import salesImage from '@/assets/images/featureImage.png'

export interface Feature {
    title: string
    paragraphs: string[]
    image: string
    imageAlt: string
    bgClass: string
    href?: string
}


export const features: Feature[] = [
    {
        title: 'Inventory management',
        paragraphs: [
            'Track your inventory in real time across products, materials, and multiple locations.',
            'Know exactly what’s in stock, what’s committed, and what’s arriving —',
            'so you can make decisions with confidence and avoid costly stockouts or overstock.',
        ],
        image: inventoryImage,
        imageAlt: 'Inventory management dashboard',
        bgClass: 'bg-lightBlue',
    },
    {
        title: 'Purchasing',
        paragraphs: [
            'Manage purchase orders and supplier relationships from one central place.',
            'Compare quotes, approve requests, and track every order from request to delivery',
            'so you can control costs, prevent delays, and buy with confidence.',
        ],
        image: purchasingImage,
        imageAlt: 'Purchasing dashboard',
        bgClass: 'bg-lightTeal',
    },
    {
        title: 'Sales Management',
        paragraphs: [
            'Manage quotations, orders, and customers on one connected platform.',
            'See the status of every deal, from first inquiry to final invoice',
            'so you can close sales faster, keep customers happy, and grow with clarity.',
        ],
        image: salesImage,
        imageAlt: 'Sales management dashboard',
        bgClass: 'bg-lightYellow',
    },
]

const FeatureCard: React.FC<Feature> = ({
    title,
    paragraphs,
    image,
    imageAlt,
    bgClass,
    href = '#',
}) => {
    return (
        <div
            className={`card flex flex-col items-stretch md:items-center justify-between px-0 py-0 gap-[2.5rem] lg:gap-[3rem] xl:gap-[4rem] md:px-6 md:py-10 md:flex-row lg:px-[57px] lg:py-[97px] ${bgClass} rounded-rounded-sm md:rounded-rounded-md lg:rounded-tl-card-lg lg:rounded-br-card-lg lg:rounded-tr-card-sm lg:rounded-bl-card-sm overflow-hidden`}
        >
            <div className="flex-1 w-full flex-col px-6 py-10 lg:p-0">
                <h3 className="mb-[47px] text-[1.25rem] md:text-[2rem] lg:text-[42px]">{title}</h3>

                {paragraphs.map((text, index) => (
                    <p
                        key={index}
                        className="mb-[40px] text-brand-gray text-[1rem] lg:text-(length:--font-size-paragraph) leading-[148%]"
                    >
                        {text}
                    </p>
                ))}

                <a
                    href={href}
                    className="group inline-flex items-center gap-2 self-start pt-2 text-[1rem] lg:text-[18px] font-semibold text-black hover:underline"
                >
                    Learn more
                    <FaArrowRightLong className="h-[24px] w-[38.88px] transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            <div className='flex-1 w-full h-full  overflow-hidden'>
                <img src={image} alt={imageAlt} className='w-full h-full lg:w-[354px] lg:h-[354px] xl:w-[448px] xl:h-[448px]  object-cover self-stretch md:justify-self-end md:rounded-[20px]' />
            </div>
        </div>
    )
}

export default FeatureCard;