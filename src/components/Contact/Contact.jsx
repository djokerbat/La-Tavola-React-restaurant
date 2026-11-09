export default function Contact() {
  return (
    <section className="contact page">
      <div className="contact-info">
        <p className="eyebrow">WE WOULD LOVE TO SEE YOU</p>

        <h2 className="text-danger">
          Let's Make <br />
          <span>Memories.</span>
        </h2>

        <p>
          Have a question or want to know more about our menu?
          Get in touch with us. We'd be happy to hear from you.
        </p>

        <div className="contact-details">
          <div>
            <span><strong>VISIT US</strong></span>
            <p>El Geish Street, Tanta, Gharbia, Egypt</p>
          </div>

          <div>
            <span><strong>CALL US</strong></span>
            <p>+20 100 123 4567</p>
          </div>

          <div>
            <span><strong>EMAIL US</strong></span>
            <p>hello@latavola.com</p>
          </div>

          <div>
            <span><strong>OPENING HOURS</strong></span>
            <p>Daily · 12:00 PM – 12:00 AM</p>
          </div>
        </div>
      </div>

      <form
        className="contact-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <h3>Get In Touch</h3>

        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />

        <label>Subject</label>
        <input type="text" placeholder="How can we help you?" />

        <label>Your Message</label>
        <textarea placeholder="Write your message here"></textarea>

        <button type="submit" className="main-btn">
          Send Message ↗
        </button>
      </form>
    </section>
  );
}