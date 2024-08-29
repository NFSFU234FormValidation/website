
import './globals.css';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGithubAlt, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faExternalLink } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import DocSearchComponent from '@/components/Search2';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';

const Navbar = ({ onMenuToggle }) => {
  return (
    <nav className="nf-nav sticky left-0 top-0 z-50 flex items-center justify-between bg-white px-4 py-2 h-[70px] shadow-sm">
      <Link href={'/'} className="logo flex items-center" title='NFSFU234FormValidation Library'>
        <Image src="/NFSFU234FormValidation-logo.png" alt="Logo" width={55} height={500} />
        <span className="name font-bold text-sm md:text-md lg:text-lg hidden lg:block">NFSFU234<span className="text-[#F16529]">Form</span>Validation </span>
      </Link>

      <div className="flex items-center ">
        <div className="menus md:flex hidden">
          <Link href="/docs/getting-started" className="menu-item flex items-center">
            Docs
          </Link>

          <Link href="/blog" className="menu-item flex items-center">
            Blog
          </Link>

          <Link href="https://github.com/NFSFU234FormValidation/" title="Github" target="_blank" rel="noopener noreferrer" className="menu-item flex items-center">
              <FontAwesomeIcon icon={faGithubAlt} className='w-3 h-3 mx-1' />
              Github
              <FontAwesomeIcon icon={faExternalLink} className='w-3 h-3 mx-1' />
          </Link>

          {/* <Link href="https://x.com/nf_validator234/" target="_blank" rel="noopener noreferrer"  title="X (Twitter)" className="menu-item icon bg-gray-300 hover:bg-gray-400 text-gray-900">
              <FontAwesomeIcon icon={faXTwitter} className='w-4 h-4' />
          </Link>
          <Link href="https://instagram.com/nf_validator234/" target="_blank" rel="noopener noreferrer" title="Instagram" className="menu-item icon bg-gray-300 hover:bg-gray-400 text-gray-900">
              <FontAwesomeIcon icon={faInstagram} className='w-4 h-4' />
          </Link> */}

            <div className="nav-form relative lg:w-[200px] w-9 h-9">
              <DocSearchComponent />
            </div>

        </div>

        <div className="flex md:hidden">

          <Link href="/docs/getting-started" className="menu-item flex items-center font-semibold">
            <FontAwesomeIcon icon={faFileCode} className='w-4 h-4' />
            Docs
          </Link>

          <Link href="/blog" className="menu-item flex items-center font-semibold mx-3">
            Blog
          </Link>

          <Link href="https://github.com/NFSFU234FormValidation" title="Github" target="_blank" rel="noopener noreferrer" className="idden menu-item w-9 h-9 rounded-md mx-1 flex items-center justify-center block icon bg-gray-300 hover:bg-gray-400 text-gray-900">
            <FontAwesomeIcon icon={faGithub} className='w-4 h-4' />
          </Link>
          
          <div title="Menu" onClick={onMenuToggle} className="menu-item toggle-menu-item w-9 h-9 rounded-md mx-1 flex items-center justify-center block icon bg-gray-300 hover:bg-gray-400 text-gray-900 cursor-pointer">
            <FontAwesomeIcon icon={faBars} className='w-4 h-4' />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
