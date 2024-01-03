import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import img1 from "../assets/person-1.png";
import img2 from "../assets/person-2.webp";
import img3 from "../assets/person3.webp";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-8 pb-16 md:w-5/6 mx-auto">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair text-center font-semibold text-4xl mb-5 text-red">
          TESTI<span className="text-white">MONIALS</span>
        </p>
        <LineGradient width="mx-auto w-full" />
        <p className="mt-5">
          Discover what people are saying about me. Your feedback is valued, and
          I appreciate the opportunity to share these testimonials with you.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <motion.div
          className="mx-auto relative bg-blue max-w-[350px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img src={img1} alt="Person 1" className="w-50 h-50 mb-4 " />

          <div className="relative ">
            <span className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </span>

            <p className="py-1 text-sm">
              Hi there! I recently had the pleasure of working with Rafikul, and
              I have to commend their excellent time management skills. They get
              the job done efficiently without compromising quality.
            </p>
            <span className="ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </span>
          </div>
        </motion.div>

        {/* Testimonial 2 */}
        <motion.div
          className="mx-auto relative bg-red max-w-[350px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img src={img2} alt="Person 2" className="w-50 h-50 mb-6" />

          <div className="relative ">
            <span className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </span>

            <p className="py-1 text-sm">
              Hello everyone! I just wanted to share my thoughts on Rafikul's
              work. Their ability to tackle tasks is truly impressive.
              Dedication like theirs is hard to come by!
            </p>
            <span className="ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </span>
          </div>
        </motion.div>

        {/* Testimonial 3 */}
        <motion.div
          className="mx-auto relative bg-yellow max-w-[350px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img src={img3} alt="Person 3" className="w-50 h-50 mb-4" />

          <div className="relative ">
            <span className="mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </span>

            <p className="py-1 text-sm">
              I'm truly impressed by Rafikul's honesty and dedication in their
              work. Collaborating with someone so committed to delivering their
              best has been a refreshing experience. Highly recommended!
            </p>
            <span className="ml-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;



