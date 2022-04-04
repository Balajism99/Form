import React from 'react';
import validate from '../validation/validateInfo';
import useForm from '../setvalues/useForm';
import '../styles/Form.css';
export const validateInput = (str='')=> str.includes("@")
const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
 

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1 className="form-heading">
        Form
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label' htmlFor="email">Email</label>
          <input
            className='form-input'
            name="email"
            id="email"
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
        <label htmlFor="location" className="form-label">Location</label>
<select  className="select"
name="select"
value={values.location}
onChange={handleChange}
>
    <option  value="selectloc">Select...</option>
             <option value="Chennai">Chennai</option>
             <option value="banglore">Banglore</option>
              <option value="hyderabad">Hyderbad</option>
              <option value="pune">Pune</option>
              <option value="kochin">Kochin</option>
     </select>    
         
          {errors.location && <p>{errors.location}</p>}
        </div>
        <div className="check"
        name="checkbox"
        value={values.checkbox}
        onChange={handleChange}
        >
        <label htmlFor="Training Required In" className="form-label">Training</label>
        <div className="checkbox" name="checkbox">
              <input type="checkbox" id="html"  value="HTML5,CSS3" name="checkbox"
       ></input>
             <label for="html" className="form-label"> HTML5,CSS3</label>
             </div>
             <div className="checkbox">
             <input type="checkbox" id="angular" name="angular" value="ReactJs"></input>
             <label for="angular" className="form-label">React Js</label>
                 </div>
                 <div className="checkbox">
             <input type="checkbox" id="express" name="Express JS" value="express"></input>
             <label for="express" className="form-label">    Express JS</label>
             </div>
             {errors.checkbox && <p className="box">{errors.checkbox}</p>}
    </div>
      
        <div className='form-inputs'>
       <textarea className="selectbox" name="comments" form="usrform"
       value={values.comments}
       onChange={handleChange}
       placeholder="Enter Comments"
       >Comments</textarea>
       {errors.comments && <p>{errors.comments}</p>}
       </div>
        <button className='form-input-btn' type='submit' role="button">
          Submit
        </button>
        
      </form>
    </div>
  );
};

export default FormSignup;