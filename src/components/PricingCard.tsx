import React from 'react';
import type { IconType } from 'react-icons';
import { LuHeart, LuZap, LuGem } from 'react-icons/lu';
import { FaRegCheckCircle } from "react-icons/fa";
import Button from './Button';

interface PricingCardProps {
    planName: string;
    monthlyPrice: number;
    yearlyPrice: number;
    features: string[];
    icon: IconType;
    highlighted?: boolean;
}

// data of the cards
export const pricingData: PricingCardProps[] = [
    {
        planName: 'Starter plan',
        monthlyPrice: 19,
        yearlyPrice: 199,
        icon: LuHeart,
        features: [
            'Real-time stock tracking',
            'Single branch management',
            'Low stock alerts',
        ],
    },
    {
        planName: 'Professional plan',
        monthlyPrice: 29,
        yearlyPrice: 299,
        icon: LuZap,
        highlighted: true,
        features: [
            'Multi-branch store management',
            'Sales and invoicing',
            'Financial analytics',
            'User roles and permissions',
        ],
    },
    {
        planName: 'Enterprise plan',
        monthlyPrice: 49,
        yearlyPrice: 499,
        icon: LuGem,
        features: [
            'Everything in Professional',
            'Unlimited branches',
            'Advanced security controls',
            'Custom API access',
        ],
    },
];

// card component
const PricingCard: React.FC<PricingCardProps> = ({
    planName,
    monthlyPrice,
    yearlyPrice,
    features,
    icon: Icon,
    highlighted = false,
}) => {
    return (
        <div
            className={`flex flex-col rounded-card-price p-8 ${highlighted
                ? 'bg-[#0A2A6B] text-white lg:min-h-[713px]'
                : 'border border-[#E2E8F0] bg-white text-brand-dark lg:min-h-[632px]'
                }`}
        >
            <div className="flex items-center justify-between">
                <p className="text-(length:--font-size-paragraph) font-semibold">{planName}</p>
                <Icon className={`h-[24px] w-[27px] ${highlighted ? 'text-brand-white' : 'text-brand-blue'}`} />
            </div>

            <h2 className="text-(length:--font-size-headingPrice) mt-6">
                ${monthlyPrice}
                <span className={`text-[28px] font-normal ${highlighted ? 'text-brand-white' : 'text-brand-gray'}`}>
                    /mo
                </span>
            </h2>
            <p className={`mt-3 text-(length:--font-size-paragraph) ${highlighted ? 'text-brand-white' : 'text-brand-gray'}`}>
                or ${yearlyPrice} yearly
            </p>

            <Button
                variant={highlighted ? 'light' : 'primary'}
                className="mt-8 w-full"
            >
                Get started
            </Button>

            <hr className={`mt-6 ${highlighted ? 'border-[#2A4A8F]' : 'border-[#E2E8F0]'}`} />

            <p className="mt-10 mb-6 text-(length:--font-size-paragraph)">Includes:</p>
            <ul className="flex flex-col gap-4">
                {features.map((feature) => (
                    <li
                        key={feature}
                        className={`flex items-center gap-3 text-(length:--font-size-priceList) ${highlighted ? 'ttext-brand-white' : 'text-brand-gray'}`}
                    >
                        <FaRegCheckCircle
                            className={`shrink-0 text-[20px] ${highlighted ? 'text-brand-white' : 'text-brand-blue'}`}
                        />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;