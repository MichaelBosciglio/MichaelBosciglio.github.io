import { useState } from "react";


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('Male')
    const [submit, setSubmit] = useState('Submit')
    const [disabled, setDisabled] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // const fields = {name,email,age,phone,gender};
        // console.log(fields);
        setSubmit("Thank You!");
        setDisabled(true);
    }

    return (
        <div className="create">
          <h3>Register</h3>
          <h5>Personal Information</h5>
          <form onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Age:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <label>Email Address:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone Number:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Gender:</label>
            <select
             value={gender}
             onChange={(e) => setGender(e.target.value)}
             disabled={disabled}
            >
              <option value="male">
                  Male
              </option>
              <option value="female">
                  Female
              </option>
            </select>

            <h5>Skill Set</h5>
            <label>Position:</label>
            <input 
              disabled={disabled}
              type="text" 
              required
            />
            <label>Height:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
            />
            <label>Years Played:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
            />
            <label>Previous Team</label>
            <textarea
              disabled={disabled}
              required
              className="text-area"
              maxLength="90"
              rows="1"
            ></textarea>
            <h5>Payment Information</h5>
            <label>Credit Card Number:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
            />
            <label>CVC Number:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
            />
            <label>Expiry Date:</label>
            <input 
              disabled={disabled}
              type="text" 
              required 
            />

            <button className='registerButton'>{submit}</button>
          </form>
        </div>
      );
}
 
export default Register;