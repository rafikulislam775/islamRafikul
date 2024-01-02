import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoIosCloudDownload } from "react-icons/io";
import profile1 from "../assets/rafikulpng.png";
// import profile1 from "../assets/rafikul.jpg";
import Typewriter from "typewriter-effect";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className=" md:w-5/6 mx-auto text-center md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="md:basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r  bg-opacity-40 backdrop-filter backdrop-blur-md"></div>
              <div className="absolute top-0 left-0 w-full h-1/2 border-t-2 border-gray-900 border-opacity-40"></div>
              <img
                alt="profile"
                className="rounded-lg  w-[320px] max-w-[400px] md:max-w-[600px] relative z-20"
                src={profile1}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 border-b-2 border-gray-900 border-opacity-40"></div>
            </div>
          </div>
        ) : (
          <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r  bg-opacity-40 backdrop-filter backdrop-blur-md"></div>
              <div className="absolute top-0 left-0 w-full h-1/2 border-t-2 border-gray-900 border-opacity-40"></div>
              <img
                alt="profile"
                className="rounded-lg  w-[220px] max-w-[300px] md:max-w-[400px] relative z-20"
                src={profile1}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 border-b-2 border-gray-900 border-opacity-40"></div>
            </div>
          </div>
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 md:basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" sm:text-2xl md:text-4xl font-playfair z-10 text-center md:text-start">
            Hi there,
            <br />
            this is
            <Typewriter
              options={{
                strings: [
                  "ISLAM RAFIKUL",
                  "a software engineer",
                  " junior developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
            {/* Uncomment the following lines if you want to add special styling */}
            {/* <span className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"> */}
            {/* RAFIKUL */}
            {/* </span> */}
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            A junior developer with a passion for perpetual learning and a
            belief in the power of collaboration for success in every coding
            endeavor. Join me on this exciting journey where each line of code
            tells a story of innovation!
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            // bg-gradient-rainblue
            className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90 text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              DOWNLOAD RESUME <IoIosCloudDownload />
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mb-2  justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
