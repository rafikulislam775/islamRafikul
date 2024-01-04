import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import myimg from "../assets/contact_pic.jpg";
import { useForm } from "react-hook-form";

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

    // Check if email and email confirmation match
    if (formData.from_email !== formData.confirm_email) {
      Swal.fire({
        title: "Oops!",
        text: "Email and confirmation email do not match.",
        icon: "error",
      });
      return;
    }

    // Additional checks or processing if needed

    // Update the sendForm function
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
      <div>
        <p className="font-playfair font-semibold text-4xl">
          <span className="text-red">CONTACT ME</span> TO GET STARTED
        </p>
      </div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <div className="basis-1/2 flex justify-center">
          <img
            src={myimg}
            alt="contact"
            className="h-[340px] w-[500px] shadow-2xl"
          />
        </div>

        <div className="basis-1/2 mt-10 md:mt-0">
          <form
            className="text-gray-800"
            target="_blank"
            ref={form}
            onSubmit={sendEmail}
          >
            {/* Name */}
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

            {/* Email */}
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

            {/* Confirm Email */}
            <input
              {...register("confirm_email", {
                required: "This field is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address.",
                },
              })}
              className="w-full bg-white rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="CONFIRM EMAIL"
            />
            {errors.confirm_email && (
              <p className="text-red mt-1">{errors.confirm_email.message}</p>
            )}

            {/* Company Name */}
            <input
              {...register("company_name", {
                required: "This field is required.",
                maxLength: {
                  value: 100,
                  message: "Max length is 100 characters.",
                },
              })}
              className="w-full bg-white rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="COMPANY NAME"
            />
            {errors.company_name && (
              <p className="text-red mt-1">{errors.company_name.message}</p>
            )}

            {/* Phone Number */}
            <input
              {...register("phone_number", {
                required: "This field is required.",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Invalid phone number.",
                },
              })}
              className="w-full bg-white rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="PHONE NUMBER"
            />
            {errors.phone_number && (
              <p className="text-red mt-1">{errors.phone_number.message}</p>
            )}

            {/* Place */}
            <input
              {...register("place", {
                required: "This field is required.",
                maxLength: {
                  value: 100,
                  message: "Max length is 100 characters.",
                },
              })}
              className="w-full bg-white rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="PLACE"
            />
            {errors.place && (
              <p className="text-red mt-1">{errors.place.message}</p>
            )}

            {/* Select Option */}
            <select
              {...register("new_and_old", {
                required: "Please select an option.",
              })}
              className="w-full bg-white rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
            >
              <option value="">Select Option</option>
              <option value="new">New</option>
              <option value="old">Old</option>
            </select>
            {errors.new_and_old && (
              <p className="text-red mt-1">{errors.new_and_old.message}</p>
            )}

            {/* URL (optional based on select option) */}
            {getValues("new_and_old") === "new" ? null : (
              <input
                {...register("url", {
                  maxLength: {
                    value: 255,
                    message: "Max length is 255 characters.",
                  },
                })}
                className="w-full bg-white rounded-sm font-semibold placeholder-opaque-black p-3 mt-5"
                type="text"
                placeholder="URL"
              />
            )}
            {errors.url && (
              <p className="text-red mt-1">{errors.url.message}</p>
            )}

            {/* Message */}
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
        </div>
      </div>
    </section>
  );
};

// export default Contact;

// Subject: New Message: Portfolio Inquiry

// Hello ,{{from_name}}

// From: {{from_email}}

// Name: {{from_name}}
// Email: {{from_email}}
// Company Name: {{company_name}}
// Phone Number: {{phone_number}}
// Place: {{place}}
// New or Old: {{new_and_old}}
// URL: {{url}}
// Message: {{message}}

// If you have any further questions or if you would like to connect with {{from_name}}, please feel free to respond to this email.

// Best wishes,

// EmailJS Team

// Subject: New Message: Portfolio Inquiry

// Hello ,{{from_name}}

// From: {{from_email}}

// I hope this email finds you well. You have received a new message regarding your portfolio from {{from_name}}. Their message is as follows:

// {{message}}

// If you have any further questions or if you would like to connect with {{from_name}}, please feel free to respond to this email.

// Best wishes,

// EmailJS Team
