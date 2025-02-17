import React from "react";
import "../Styles/index.css";
import "../Styles/Contact.css";  // ✅ Correct for CSS
import "../Styles/index.css";    // ✅ Correct for global styles

const Contact = () => {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="mt-4">Feel free to reach out to me!</p>
        <a href="mailto:your-email@example.com" className="mt-4 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200">
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
