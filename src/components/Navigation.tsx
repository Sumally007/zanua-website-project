import logo from '@/assets/images/zanua-logo.png'
import Button from './Button';
import NavLinks from './NavLinks';

const Navigation = () => {
    return (
        <div className="w-full h-[127px] border-b border-brand-border">
            <div className="flex items-center justify-between h-full mx-[75px]">
                <img className="h-[45px] w-[205px]" src={logo} alt="Zanua Logo" />
                <div>
                    <NavLinks />
                </div>
                <div className="flex items-center gap-4">
                    <Button>Request demo</Button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;