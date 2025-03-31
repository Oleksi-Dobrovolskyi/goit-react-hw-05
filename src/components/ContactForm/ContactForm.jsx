import styles from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67")
      .required("Required"),
  });

  const initialValues = { name: "", number: "" };

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAddContact(newContact);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label htmlFor="name">Name</label>
        <Field className={styles.field} type="text" name="name" id="name" />
        <ErrorMessage className={styles.error} name="name" component="span" />

        <label htmlFor="number">Number</label>
        <Field className={styles.field} type="text" name="number" id="number" />
        <ErrorMessage className={styles.err} name="number" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;




