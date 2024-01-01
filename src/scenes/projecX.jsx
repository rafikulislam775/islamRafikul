import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

const Project = ({ title, liveLink, codeLink }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">Description of the project goes here.</p>
        <div className="flex">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Live
          </a>
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Code
          </a>
        </div>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    // Load projects data from the JSON file
    fetch("../assets/projectsData.json")
      .then((response) => response.json())
      .then((data) => setProjectsData(data))
      .catch((error) => console.error("Error loading projects data:", error));
  }, []);

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
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
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Elevating Skills and Expertise through Multilingual Tech Ventures.
          Projects Illuminate Proficiency, Adding a Distinctive Touch to
          Professional Capabilities
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
