export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Name required';
    }
  
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    
    /*if (!values.location) {
      errors.location = 'Please select location';
    }*/
    
    if (values.checkbox==false) {
      errors.checkbox = 'Please select any one';
    }
  
      if (!values.comments) {
        errors.comments = 'Comments is required';
      } else if( values.comments.length<10){
        errors.comments = 'Comments needs to be atleast 10 characters or more';
      }
    
    return errors;
  }