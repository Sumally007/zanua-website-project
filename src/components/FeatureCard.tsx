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
            className={`card flex flex-col md:items-stretch items-stretch justify-between gap-8 lg:gap-10 px-0 py-0 md:px-6 md:py-10 md:flex-row lg:px-[57px] lg:py-[97px] ${bgClass} rounded-rounded-sm md:rounded-rounded-md lg:rounded-tl-card-lg lg:rounded-br-card-lg lg:rounded-tr-card-sm lg:rounded-bl-card-sm`}
        >
            <div className="flex w-full flex-col lg:w-[490px] px-6 py-10">
                <h3 className="mb-[47px] text-[2.25rem] xl:text-[42px]">{title}</h3>

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

            <div className='relative w-full aspect-[4/4] sm:aspect-[4/4] md:aspect-auto md:flex-1 md:min-h-[300px] rounded-[20px] overflow-hidden'>
                <img src={image} alt={imageAlt} className='absolute inset-0 w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default FeatureCard;