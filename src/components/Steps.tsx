import stepImage from '@/assets/images/step-image.png';
import StepCard, { steps } from './StepCard';

const Steps = () => {
    const leftSteps = steps.slice(0, 2);
    const rightSteps = steps.slice(2);

    return (
        <section id="how it works" className="flex flex-col items-center justify-center mb-[var(--space-bottom)] xl:px-[106px] px-[2rem]
        bg-[var(--color-lightBlue)] rounded-tl-containerCard rounded-br-containerCard">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mt-[120px] mb-[97px]">
                <h2 className="text-[1.875rem] pr-[10%] lg:text-[52px] md:text-[2.25rem] mb-[30px] lg:mb-0 text-brand-dark xl:leading-[120%] max-w-heading">Steps to Control Your Stock Effortless</h2>
                <p className="text-brand-gray text-[1rem] lg:text-(length:--font-size-paragraph) leading-[150%] self-start max-w-paragraph">Running Zanua ERP is a seamless, guided experience designed to streamline your business operations and maximize profitability.</p>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-[40px] w-full mb-[120px]">
                <div className="flex flex-col justify-between items-center gap-6">
                    {leftSteps.map((step, index) => (
                        <StepCard key={index} {...step} />
                    ))}
                </div>

                <div className="overflow-hidden rounded-[40px]">
                    <img src={stepImage} alt="step-image" className='h-[724.25px] w-[438.57px]' />
                </div>

                <div className="flex flex-col justify-between items-center gap-6">
                    {rightSteps.map((step, index) => (
                        <StepCard key={index} {...step} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Steps