import React, { Fragment } from "react";
import Footer from "../Footer"
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <Fragment>
     <div className="Heading-contact">
      <div className="Heading-container">
        <ContactForm />
      </div>
    </div>
    <Footer/>
   </Fragment>
  )
}

export default Contact
