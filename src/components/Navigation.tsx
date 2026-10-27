import logo from '@/assets/images/zanua-logo.png'
import Button from './Button';

const Navigation = () => {
    return (
        <div className="w-full h-[127px] border-b border-brand-border">
            <div className="flex items-center justify-between h-full mx-[75px]">
                <img className="h-[45px] w-[205px]" src={logo} alt="Zanua Logo" />
                <div>
                    <ul className="flex items-center justify-between">
                        <li className="text-[18px] font-medium text-brand-blue">Features</li>
                        <li className="text-[18px] ml-[85px] font-medium text-brand-dark">Pricing</li>
                        <li className="text-[18px] ml-[85px] font-medium text-brand-dark">Testimonials</li>
                        <li className="text-[18px] ml-[85px] font-medium text-brand-dark">About</li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <Button>Request demo</Button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;