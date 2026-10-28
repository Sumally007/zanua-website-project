import stepImage from '@/assets/images/step-image.png';
import StepCard, { steps } from './StepCard';

const Steps = () => {
    const leftSteps = steps.slice(0, 2);
    const rightSteps = steps.slice(2);

    return (
        <section id="how it works" className="flex flex-col items-center justify-center mb-[var(--space-bottom)] px-[106px] 
        bg-[var(--color-lightBlue)] rounded-tl-containerCard rounded-br-containerCard">
            <div className="flex items-center justify-between w-full mt-[120px] mb-[97px]">
                <h2 className="text-[52px] text-brand-dark leading-[120%]">Steps to Control Your <br></br> Stock Effortless</h2>
                <p className="text-brand-gray text-(length:--font-size-paragraph) leading-[150%] self-start">Running Zanua ERP is a seamless, guided experience <br></br> designed to streamline your business operations and <br></br> maximize profitability.</p>
            </div>

            <div className="grid grid-cols-1 justify-items-stretch lg:grid-cols-[1fr_430px_1fr] mb-[97px] w-full">
                <div className="order-2 flex flex-col justify-between lg:order-1 mt-[40px] mb-[40px]">
                    {leftSteps.map((step) => (
                        <StepCard key={step.number} {...step} />
                    ))}
                </div>

                <div className="order-1 h-[700px] overflow-hidden rounded-[40px] lg:order-2">
                    <img src={stepImage} alt="step-image" className='h-[700px] w-full' />
                </div>

                <div className="order-3 flex flex-col justify-between justify-self-end mt-[40px] mb-[40px]">
                    {rightSteps.map((step) => (
                        <StepCard key={step.number} {...step} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Steps