import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {fetch} from '../redux/formfetch'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    location: '',
    checkbox:'',
    select: '',
    comments: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData]=useState();
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
const dispatch=useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
   
    setErrors(validate(values));
    setIsSubmitting(true);
   setData(values)
   dispatch(fetch(values));
  };
 
  

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );
  return { handleChange, handleSubmit, values, errors, data };
};
export default useForm;