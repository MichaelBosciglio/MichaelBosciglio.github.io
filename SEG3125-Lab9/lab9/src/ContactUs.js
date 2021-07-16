import { useState } from "react";


const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const [submit, setSubmit] = useState('Submit')
    const [disabled, setDisabled] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const fields = {name,email,comments};
        setSubmit("Thank You!");
        setDisabled(true);
    }

    return (
        <div className="create">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email Address:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Comments:</label>
            <textarea
              disabled={disabled}
              required
              className="text-area"
              maxLength="1000"
              rows="10"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
            <button>{submit}</button>
          </form>
        </div>
      );
}
 
export default ContactUs;