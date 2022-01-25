import { useFormik } from 'formik';
import './App.css';

function App() {

// TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
  initialValues: {
    email: '',
    password: ''
  },
  onSubmit: values=> {
    console.log('form: ', values);
  },
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'username should be an email';
    }
    if(!values.password) {
      errors.password = 'Required';
      return errors;
    }

  }
});

  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO:
        build you form here. &&&&&&&&&
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>email</div>
        <input id="email" type="text" onChange={formik.handleChange} value={formik.values.name}></input>
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div> : null}
        <div>password</div>
        <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.name}></input>
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div> : null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>    
  );
}

export default App;
