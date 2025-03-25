// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="z-[100] overflow-clip">
            <input
                type="checkbox"
                id="nav-toggle"
                className="opacity-0  peer self-end absolute top-4 right-4 scale-[300%] z-[100]"
                aria-label="Toggle navigation menu" />

            <span className="md:hidden hamburger-animation animate-fade-in peer-checked:animate-pulse forwards absolute top-[0px] right-0 m-2 w-6 h-0.5 bg-white peer-checked:rotate-45  peer-checked:top-[12px] z-[100]"></span>
            <span className="md:hidden animate-fade-in absolute top-[12px] right-0 m-2  w-6 h-0.5 bg-white peer-checked:invisible z-[100]"></span>
            <span className="md:hidden  hamburger-animation animate-fade-in peer-checked:animate-pulse  absolute top-[24px] right-0 m-2  w-6 h-0.5 bg-white peer-checked:-rotate-45  peer-checked:top-[12px] z-[100]"></span>

            <ul className='z-40 absolute md:relative bg-tertiary md:bg-secondary1 md:text-tertiary w-full top-0 -translate-y-[100%] md:translate-0 peer-checked:translate-0 duration-500 delay-75 nav-flex border-b-1 border-secondary/15'>


                <li className='nav-hover'>
                    <Link href="/">Home</Link>
                </li>
                <li className='nav-hover'>
                    <Link href="/about">About</Link>
                </li>
                <li className='nav-hover'>
                    <Link href="/services">Services</Link>
                </li>
                <li className='nav-hover'>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
