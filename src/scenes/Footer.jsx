import SocialMediaIcons from "../components/SocialMediaIcons";
import logo from "../assets/logo__.png";
const Footer = () => {
  return (
    <footer className=" min-w-full bg-red ">
      <div className="w-10/12  mx-auto">
        <img className="w-24 -ml-2" src={logo} alt="" />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            <SocialMediaIcons />
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2023 All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
