import SocialMediaIcons from "../components/SocialMediaIcons";
import logo from "../assets/logo__.png";
const Footer = () => {
  return (
    <footer className="footer items-center  bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <img className="w-16" src={logo} alt="" />
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col md:mr-28 gap-4 md:place-self-center md:justify-self-end">
        <SocialMediaIcons />
      </nav>
    </footer>
  );
};

export default Footer;
