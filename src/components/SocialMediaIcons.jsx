import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/islam-rafikul-758032227/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-3xl">
          <FaLinkedin />
        </span>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/rafikulislam775"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-3xl">
          <FaGithub />
        </span>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/civilri/"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-3xl">
          <FaFacebook />
        </span>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://wa.me/819098689958"
        target="_blank"
        rel="noreferrer"
      >
        <span className="text-3xl">
          <FaWhatsappSquare />
        </span>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
