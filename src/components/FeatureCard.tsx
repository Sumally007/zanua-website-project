import { FaArrowRightLong } from 'react-icons/fa6';
// import featureImage from '@/assets/images/featureImage.png';
import inventoryImage from '@/assets/images/featureImage.png'
import purchasingImage from '@/assets/images/featureImage.png'
import salesImage from '@/assets/images/featureImage.png'

export interface Feature {
    id: string
    title: string
    paragraphs: string[]
    image: string
    imageAlt: string
    bgClass: string
    href?: string
}


export const features: Feature[] = [
    {
        id: 'inventory',
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
        id: 'purchasing',
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
        id: 'sales',
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

const FeatureCard = ({
    title,
    paragraphs,
    image,
    imageAlt,
    bgClass,
    href = '#',
}: Omit<Feature, 'id'>) => {
    return (
        <div
            className={`card flex flex-col items-center justify-between gap-10 px-6 py-10 lg:flex-row lg:px-[57px] lg:py-[97px] ${bgClass} rounded-tl-card-lg rounded-br-card-lg rounded-tr-card-sm rounded-bl-card-sm`}
        >
            <div className="flex w-full flex-col lg:w-[490px]">
                <h3 className="mb-[47px] text-[42px]">{title}</h3>

                {paragraphs.map((text) => (
                    <p
                        key={text}
                        className="mb-[40px] text-brand-gray text-(length:--font-size-paragraph) leading-[148%]"
                    >
                        {text}
                    </p>
                ))}

                <a
                    href={href}
                    className="group inline-flex items-center gap-2 self-start pt-2 text-[18px] font-semibold text-black hover:underline"
                >
                    Learn more
                    <FaArrowRightLong className="h-[24px] w-[38.88px] transition-transform group-hover:translate-x-1" />
                </a>
            </div>

            <div>
                <img src={image} alt={imageAlt} />
            </div>
        </div>
    )
}

export default FeatureCard;