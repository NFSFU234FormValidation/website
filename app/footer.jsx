import { faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center bg-black text-white bg-opacity-80 py-4 px-2">
      <div className="links flex justify-center flex-wrap space-x-2">
        <a href="/docs/installation" className="link text-[12px] block my-4 hover:underline p-2">Installation</a>
        <a href="/docs/usage" className="link text-[12px] block my-4 hover:underline p-2">Usage</a>
        <a href="https://github.com/NFSFU234FormValidation/nfsfu234-form-validation/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer" className="link text-[12px] block my-4 hover:underline p-2 js_chgeLg">Changelog</a>
        <a href="/blog" className="link text-[12px] block my-4 hover:underline p-2">Blog</a>
        <a href="/faq" className="link text-[12px] block my-4 hover:underline p-2">FAQs</a>
        <a href="/contact" className="link text-[12px] block my-4 hover:underline p-2">Contact</a>
        <a href="/#examples" className="link text-[12px] block my-4 hover:underline p-2">Examples</a>
      </div>

      <div className="icons flex justify-center flex-wrap space-x-5">
        <a href="https://x.com/nf_validator234/" title="X(Twitter)" target="_blank" rel="noopener noreferrer" className="icon w-10 h-10 text-lg rounded-full flex items-center justify-center hover:bg-gray-500">
          <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
        </a>
        <a href="https://github.com/NFSFU234FormValidation/" title="Github" target="_blank" rel="noopener noreferrer" className="icon w-10 h-10 text-lg rounded-full flex items-center justify-center hover:bg-gray-500">
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        </a>
        <a href="https://instagram.com/nf_validator234/" title="Instagram" target="_blank" rel="noopener noreferrer" className="icon w-10 h-10 text-lg rounded-full flex items-center justify-center hover:bg-gray-500">
          <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
        </a>
      </div>

      <div className="copyright font-semibold capitalize mt-4 p-2">
        &copy; 2023 - {currentYear}. NFSFU234FormValidation.
      </div>

      <div className="copyright font-extralight text-xs text-[11px] mt-1 p-1">
        Made with ❤️ by <a href="https://nforshifu234dev.vercel.app" target="_blank" rel="noopener noreferrer">NFORSHIFU234Dev 👨🏾‍💻🖤</a>
      </div>
    </footer>
  );
};

export default Footer;