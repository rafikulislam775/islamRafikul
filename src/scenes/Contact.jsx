import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import myimg from "../assets/contact_pic.jpg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const {
    register,
    trigger,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const sendEmail = async (e) => {
    e.preventDefault();

    // Trigger form validation
    const isValid = await trigger();

    if (!isValid) {
      // Show validation errors to the user
      Swal.fire({
        title: "Oops!",
        text: "Please fill in all the required fields correctly.",
        icon: "error",
      });
      return;
    }

    // Check for empty fields
    const formData = getValues();
    if (Object.values(formData).some((value) => !value)) {
      // Show alert for empty fields
      Swal.fire({
        title: "Oops!",
        text: "Please fill in all the required fields.",
        icon: "error",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_nil89q7",
        "template_wc40b4s",
        form.current,
        "gxmiWOyQuOaLGs_j_"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Your message has been sent successfully.",
            icon: "success",
          });
          reset(); // Clear the form after successful submission if needed
        },
        (error) => {
          Swal.fire({
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
          });
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="pt-32 pb-16 md:w-5/6 mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-full" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src={myimg} alt="contact" className="h-[340px] w-[500px]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            className="text-gray-800"
            target="_blank"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              {...register("from_name", {
                required: "This field is required.",
                maxLength: {
                  value: 100,
                  message: "Max length is 100 characters.",
                },
              })}
              className="w-full bg-white rounded-sm font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
            />
            {errors.from_name && (
              <p className="text-red mt-1">{errors.from_name.message}</p>
            )}

            <input
              {...register("from_email", {
                required: "This field is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address.",
                },
              })}
              className="w-full bg-white rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
            />
            {errors.from_email && (
              <p className="text-red mt-1">{errors.from_email.message}</p>
            )}

            <textarea
              {...register("message", {
                required: "This field is required.",
                maxLength: {
                  value: 2000,
                  message: "Max length is 2000 characters.",
                },
              })}
              className="w-full bg-white rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
            />
            {errors.message && (
              <p className="text-red mt-1">{errors.message.message}</p>
            )}

            <button
              className="btn  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90 font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
