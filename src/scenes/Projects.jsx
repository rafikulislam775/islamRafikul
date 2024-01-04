import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import ReactParallaxTilt from "react-parallax-tilt";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ Title, Live, Client, Server, img }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center  text-deep-blue`;
  const projectTitle = Title.split(" ").join("-").toLowerCase();

  return (
    <ReactParallaxTilt tiltEnable={false} scale={1.1} transitionSpeed={1500}>
      <motion.div variants={projectVariant} className="relative mb-8 sm:mb-0">
        <div className={overlayStyles}>
          <p className="text-lg font-playfair">{Title}</p>
          <p className="mt-2 sm:mt-4">
            Here is the project live link and code link <br />
            Click to learn more and understand.
          </p>
          <div className="flex mt-2 sm:mt-4">
            <a
              href={Live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mr-2 sm:mr-4 btn-sm hover:btn-info"
            >
              Live
            </a>
            {Client && (
              <a
                href={Client}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm hover:btn-info  mr-2 sm:mr-4"
              >
                Code
              </a>
            )}
            {Server && (
              <a
                href={Server}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm hover:btn-info"
              >
                Server
              </a>
            )}
          </div>
        </div>
        <img src={img} alt={projectTitle} className="w-full h-auto" />
      </motion.div>{" "}
    </ReactParallaxTilt>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-12 sm:pt-32 pb-12 sm:pb-48 md:w-5/6 mx-auto"
    >
      {/* HEADINGS */}
      <motion.div
        className="md:w-4/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-2xl sm:text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-2 sm:mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-4 sm:mt-10 mb-4 sm:mb-10 text-sm sm:text-base">
          Elevating Skills and Expertise through Multilingual Tech Ventures.
          Projects Illuminate Proficiency, Adding a Distinctive Touch to
          Professional Capabilities
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex flex-col sm:flex-row justify-center">
        <motion.div
          className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-4 sm:p-10
              w-full sm:w-auto text-lg sm:text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            Title="House tread"
            Live="https://house-trade.web.app/"
            Client="https://github.com/rafikulislam775/House-Trade-Client"
            img="https://i.ibb.co/9ZBztqN/house.png"
            Server="https://github.com/rafikulislam775/House-Trade-server"
          />
          <Project
            Title="career-magnet"
            Live="https://career-magnet.firebaseapp.com/"
            Client="https://github.com/rafikulislam775/career-magnet-client"
            img="https://i.ibb.co/HT4F8Dn/career.png"
            Server="https://github.com/rafikulislam775/career-magnet-server"
          />

          {/* ROW 2 */}
          <Project
            Title="Final Stage"
            Live="https://final-stage-8a483.web.app/"
            Client="https://github.com/rafikulislam775/final-stages"
            img="https://i.ibb.co/LxPm4px/final.png"
            Server={null}
          />
          <Project
            Title="Road muster"
            Live="https://road-muster.web.app/"
            Client="https://github.com/rafikulislam775/road-muster-client"
            img="https://i.ibb.co/DRgqzPb/road.png"
            Server="https://github.com/rafikulislam775/road-muster-server"
          />
          <Project
            Title="Xterm Fitness World"
            Live="https://xterm-fitness.web.app/"
            Client="https://github.com/rafikulislam775/Xterm-Fitness-World"
            img="https://i.ibb.co/2szzfC2/jym.png"
            Server={null}
          />

          {/* ROW 3 */}
          <Project
            Title="donation campaign"
            Live="https://65142221bbea0e1735a6d935--fabulous-crumble-310daa.netlify.app/"
            Client="https://github.com/rafikulislam775/donation-campaign"
            img="https://i.ibb.co/HCrzSJD/fonation.png"
            Server={null}
          />
          <Project
            Title="Course-Registration-system"
            Live="https://6505089e90e9f34d0ec200f8--thunderous-cactus-376aaf.netlify.app/"
            Client="https://github.com/rafikulislam775/Course-Registration-system"
            img="https://i.ibb.co/tq9gJ60/course.png"
            Server={null}
          />
          <div
            className="flex justify-center text-center items-center p-4 sm:p-10
              w-full sm:w-auto text-lg sm:text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
