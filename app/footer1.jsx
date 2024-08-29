import { faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer1 = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-black flex items-center justify-between min-h-[90px] text-sm px-2 py-6">

      <div className="left">

        <div className="copyright">Copyright &copy; {currentYear} <span>NFSFU234FormValidation</span>.</div>
        <div className="creator text-[11px] mt-1">
          Made with ❤️ by <a href="https://nforshifu234dev.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline" title="NFORSHIFU234Dev 👨🏾‍💻🖤">NFORSHIFU234Dev 👨🏾‍💻🖤</a>
        </div>

      </div>

      <div className="right">

        <div className="icons flex justify-end flex-wrap space-x-1">
          <a href="https://x.com/nf_validator234/" title="X(Twitter)" target="_blank" rel="noopener noreferrer" className="icon w-10 h-10 text-lg rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-white">
            <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
          </a>
          <a href="https://github.com/NFSFU234FormValidation" title="Github" target="_blank" rel="noopener noreferrer" className="icon w-10 h-10 text-lg rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-white">
            <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/nf_validator234/" title="Instagram" target="_blank" rel="noopener noreferrer" className="icon w-10 h-10 text-lg rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center text- gap-x-3 mt-2">

          <Link href={'/blog'} className="hover:underline">
            Blog
          </Link>
          |
          <Link href={'/faq'} className="hover:underline">
            FAQ
          </Link>
          |
          <Link href={'/contact'} className="hover:underline">
            Contact
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer1;
