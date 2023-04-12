import React from "react";
import { useFormik } from "formik";

interface MyFormValidationInterface {
  firstName: string;
  lastName: string;
  email: string;
}
interface MyFormValidationErrorInterface {
  firstName?: string;
  lastName?: string;
  email?: string;
}
const validateMyForm = (
  values: MyFormValidationInterface
): MyFormValidationErrorInterface => {
  const errors: MyFormValidationErrorInterface = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 character or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
const MyFrom: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: validateMyForm,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div>{formik.errors.firstName}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MyFrom;
