import React, { useState } from 'react';
import '../styles/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import useForm from '../setvalues/useForm';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {data} = useForm()
  console.log(data)
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <div>
        <FormSuccess />
          </div>
        )}
      </div>
    </>
  );
};

export default Form;