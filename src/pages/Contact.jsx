import { NavBar, Footer, ContactForm } from "../components";

import React from "react";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen text-white font-Poppins">
      <NavBar />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
