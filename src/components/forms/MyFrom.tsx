import React from "react";
import { useFormik } from "formik";

interface MyFormValidationInterface {
  firstName?: string;
  lastName?: string;
  email?: string;
}
const validate = (value: any) => {
  const errors: MyFormValidationInterface = {};

  if (!value.firstName) {
    errors.firstName = "Required";
  }
};
const MyFrom: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="firstName">Last Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MyFrom;
