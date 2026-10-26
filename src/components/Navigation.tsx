import logo from '@/assets/images/zanua-logo.png'

const Navigation = () => {
    return (
        <div className="w-full h-[127px] border-b border-[#E2E8F0]">
            <div className="flex items-center justify-between h-full mx-[75px]">
                <img className="h-[45px] w-[205px]" src={logo} alt="Zanua Logo" />
                <div>
                    <ul className="flex items-center justify-between">
                        <li className="text-[18px] font-medium text-[#0F3D9C]">Features</li>
                        <li className="text-[18px] ml-[85px] font-medium text-[#0B1B3A]">Pricing</li>
                        <li className="text-[18px] ml-[85px] font-medium text-[#0B1B3A]">Testimonials</li>
                        <li className="text-[18px] ml-[85px] font-medium text-[#0B1B3A]">About</li>
                    </ul>
                </div>
                <div className="flex items-center gap-4">
                    <button className="outline-none px-[17.5px] py-[8px] text-[18px] font-medium text-white bg-[#0F3D9C] rounded-[5px]">Request demo</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation;