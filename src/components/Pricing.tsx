import PricingCard, { pricingData } from './PricingCard';

const Pricing = () => {
    return (
        <section
            id="pricing"
            className="mb-[var(--space-bottom)] bg-lightBlue px-[106px] py-[100px]"
        >
            <div className="mb-[74px] flex w-full items-center justify-between gap-10">
                <h2 className="text-(length:--font-size-heading2) leading-[120%] text-brand-dark">Simple pricing</h2>
                <p className="text-brand-gray text-(length:--font-size-paragraph) leading-[150%]">
                    Choose a plan that fits your business size and scale
                </p>
            </div>

            <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-3">
                {pricingData.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </section>
    );
};

export default Pricing;