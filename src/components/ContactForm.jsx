import React from "react";
import { Link } from "react-router-dom";

import { MailPlus, Map, Phone } from "lucide-react";

import Swal from "sweetalert2";

import React from "react";

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
      <div className="flex flex-1 justify-center flex-col items-center gap-8">
        <h1 className="font-Poppins font-black text-[2rem] opacity-90 hover:opacity-100 transition-all duration-300">
          Wanna contact us?
        </h1>
        <p className="opacity-80 font-Poppins font-black text-[1.1rem] text-center hover:opacity-100 transition-all duration-300">
          We’d love to hear from you! Please write us a message by completing
          the form below. Our team will do their best to respond as quickly as
          possible. Your feedback, questions, or concerns are very important to
          us!
        </p>
        <div className="flex flex-col justify-center gap-2 text-white font-Poppins font-black text-center">
          <Link
            to="tel:+40 771 684 038"
            className="flex justify-center gap-2  hover:text-clr-princ transition-all duration-300 text-opacity-80 hover:opacity-100"
          >
            <Phone />
            Telefon1: +40 771 684 038
          </Link>
          <Link
            to="tel:+40 742 025 449"
            className="flex justify-center gap-2 text-opacity-80 hover:opacity-100 hover:text-clr-princ transition-all duration-300"
          >
            <Phone />
            Telefon2: +40 742 025 449
          </Link>
          <Link
            to="https://www.google.com/maps/place/Strada+Vasile+Pârvan+1,+Pitești"
            className="flex justify-center gap-2 text-opacity-80 hover:opacity-100 hover:text-clr-princ transition-all duration-300"
          >
            <Map /> Strada Vasile Pârvan 1, Pitești
          </Link>
          <Link
            to="mailto:starlight24909@gmail.com"
            className="flex justify-center gap-2 text-opacity-80 hover:opacity-100 hover:text-clr-princ transition-all duration-300"
          >
            <MailPlus />
            starlight24909@gmail.com
          </Link>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center items-center gap-8"
        >
          <h1 className="font-Poppins font-black text-[2rem] opacity-90">
            Write us an message!
          </h1>
          <div className="flex flex-col justify-start gap-2">
            <label className="font-Poppins text-[1.10rem] opacity-80 font-black">
              First Name
            </label>
            <input
              className="border-clr-princ border-2 rounded-[0.5rem] bg-clr-bgsec py-3 px-4 transition-all duration-300 shadow-xl min-w-[450px]"
              type="text"
              placeholder="Enter your first name"
              name="First Name"
              required
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label className="font-Poppins text-[1.10rem] opacity-80 font-black">
              Last Name
            </label>
            <input
              className="border-clr-princ border-2 rounded-[0.5rem] bg-clr-bgsec py-3 px-4 transition-all duration-300 shadow-xl min-w-[450px]"
              type="text"
              placeholder="Enter your last name"
              name="Last Name"
              required
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label className="font-Poppins text-[1.10rem] opacity-80 font-black">
              Email
            </label>
            <input
              className="border-clr-princ border-2 rounded-[0.5rem] bg-clr-bgsec py-3 px-4 transition-all duration-300 shadow-xl min-w-[450px]"
              type="email"
              placeholder="Enter your email"
              required
              name="Email"
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label className="font-Poppins text-[1.10rem] opacity-80 font-black">
              Phone
            </label>
            <input
              className="border-clr-princ border-2 rounded-[0.5rem] bg-clr-bgsec py-3 px-4 transition-all duration-300 shadow-xl overflow-y-hidden min-w-[450px]"
              type="text"
              placeholder="Enter your phone number"
              name="Phone Number"
              required
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label className="font-Poppins text-[1.10rem] opacity-80 font-black">
              Your Message
            </label>
            <textarea
              className="border-clr-princ border-2 rounded-[0.5rem] bg-clr-bgsec py-3 px-4 transition-all duration-300 shadow-xl min-w-[450px] min-h-[150px]"
              name="Message"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-clr-princ px-8 py-4 rounded-[0.5rem] font-Poppins font-black text-[1.15rem] active:bg-clr-sec hover:bg-clr-sec transition-all min-w-[450px] duration-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
