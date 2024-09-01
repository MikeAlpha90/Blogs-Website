import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <div className="contactHead">
          <h1 className="contactTitle">CONTACT US</h1>
          <p className="contactDetail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur excepturi quisquam quam fugit earum modi natus
            architecto quis, molestias quas.
          </p>
        </div>
        <form className="contactForm">
            <label>Your Name</label>
            <input type="text" placeholder="Alpha" />
            <label>Your Email</label>
            <input type="email" placeholder="Alpha@gmail.com" />
            <label>Your Message</label>
            <input type="text" placeholder="Type message...." />
        </form>
        <button className="contactButton">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
