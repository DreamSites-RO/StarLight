import React from "react";

import { motion } from "framer-motion";

import Swal from "sweetalert2";

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "11615e66-30d5-4f67-890b-b5528cde1c89");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <section className="max-w-[1440px] mx-auto lg:px-[2rem] md:px-[1rem] text-white font-Poppins flex flex-col lg:flex-row my-[2rem] min-h-screen">
      <div className="flex flex-1 justify-center items-center">
        <motion.form
          onSubmit={onSubmit}
          className="flex flex-col justify-center items-center gap-8"
          initial={{ opacity: 0, y: 50 }} // Initial opacity and position
          animate={{ opacity: 1, y: 0 }} // Final opacity and position
          transition={{ duration: 0.8, staggerChildren: 0.3 }} // Stagger the children with a delay of 0.3s
        >
          <motion.h1
            className="font-Poppins font-black text-[2rem] opacity-90"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Write us a message!
          </motion.h1>

          {/* Form Fields */}
          <motion.div
            className="flex flex-col justify-start gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label className="font-Poppins text-[1.10rem] opacity-80 font-black">
              First Name
            </label>
            <input
              className="border-clr-princ border-2 rounded-[0.5rem] bg-clr-bgsec py-3 px-4 transition-all duration-300 shadow-xl min-w-[350px]"
              type="text"
              placeholder="Enter your first name"
              name="First Name"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-start gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label className="font-Poppins text-[1.10rem] opacity-80 font-black">
              Last Name
            </label>
            <input
              className="border-clr-princ border-2 rounded-[0.5rem] bg-clr-bgsec py-3 px-4 transition-all duration-300 shadow-xl min-w-[350px]"
              type="text"
              placeholder="Enter your last name"
              name="Last Name"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-start gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label className="font-Poppins text-[1.10rem] opacity-80 font-black">
              Email
            </label>
            <input
              className="border-clr-princ border-2 rounded-[0.5rem] bg-clr-bgsec py-3 px-4 transition-all duration-300 shadow-xl min-w-[350px]"
              type="email"
              placeholder="Enter your email"
              required
              name="Email"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-start gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label className="font-Poppins text-[1.10rem] opacity-80 font-black">
              Phone
            </label>
            <input
              className="border-clr-princ border-2 rounded-[0.5rem] bg-clr-bgsec py-3 px-4 transition-all duration-300 shadow-xl overflow-y-hidden min-w-[350px]"
              type="text"
              placeholder="Enter your phone number"
              name="Phone Number"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-start gap-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label className="font-Poppins text-[1.10rem] opacity-80 font-black">
              Your Message
            </label>
            <textarea
              className="border-clr-princ border-2 rounded-[0.5rem] bg-clr-bgsec py-3 px-4 transition-all duration-300 shadow-xl min-w-[350px] min-h-[150px]"
              name="Message"
              placeholder="Enter your message"
              required
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="bg-clr-princ px-8 py-4 rounded-[0.5rem] font-Poppins font-black text-[1.15rem] active:bg-clr-sec hover:bg-clr-sec transition-all min-w-[350px] duration-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
