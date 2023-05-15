import axios from "axios";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    const response = await axios.post(
      "https://evening-escarpment-05095.herokuapp.com/api/sendemail",
      data
    );
    console.log(response.data);
    setStatus("Message received!");
  };

  return (
    <section>
      <div style={{ container: 'h-100' }} className="hero-image" ></div>
      <div className="container h-100">
        <div className="container h-100">
          <div style={{ position: "absolute", marginLeft: "20pc" }} className='card contactcard col-md-4'>
            <div style={{ color: "white" }} className="card-header bg-black p- h4">
              Lets make Something Together
            </div>
            {status && <div className="alert alert-success">{status}</div>}
            <form style={{ padding: "5px" }} className="" onSubmit={sendEmail}>
              <div className="form-group">
                <label className="form-control-label" htmlFor="name">Name:</label>
                <input className="form-control" type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="form-control-label" htmlFor="email">Email:</label>
                <input className="form-control" type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label className="form-control-label" htmlFor="message">Message:</label>
                <textarea rows="6" className="form-control" id="message" placeholder="Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} />
              </div>
              <div className="form-group">
                <button className="btn btn-dark float-end mt-2" type="submit">submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Contact;
