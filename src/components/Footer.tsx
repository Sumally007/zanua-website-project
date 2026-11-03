import NavLinks from "./NavLinks";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <section className="bg-brand-blue px-[106px] py-[100px] *:text-white">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <div>
                        <NavLinks />
                    </div>
                    <div className="flex items-center gap-6">
                        <ul className="flex items-center gap-6">
                            <li>
                                <CiLinkedin size={30} />
                            </li>
                            <li>
                                <IoLogoFacebook size={30} />
                            </li>
                            <li>
                                <FaWhatsapp size={30} />
                            </li>
                            <li>
                                <FaInstagram size={30} />
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className={`mt-6 border-[#2A4A8F]`} />
                <h2 className="font-title-text h-[203px] text-[433.38px] leading-[0.39] tracking-normal whitespace-nowrap text-white select-none">
                    zanua
                </h2>
                <hr className={`mt-6 border-[#2A4A8F]`} />
                <div className="flex items-center justify-between">
                    <p className="text-[20px]">© 2026 Zanua Technologies. All rights reserved.</p>
                    <p className="text-[20px]">Developed by Ismail Mbarouk.</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;