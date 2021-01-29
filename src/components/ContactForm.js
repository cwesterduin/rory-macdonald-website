import React from 'react'
import { Formik, Field, Form, useField } from 'formik'
import * as Yup from 'yup';

import contactFormStyles from './contactForm.module.css'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div className={contactFormStyles.input_cont}>
      <label className={contactFormStyles.label} htmlFor={props.id || props.name}>{label}</label>
      <input className={`${contactFormStyles.text} ${props.name === 'message' ? contactFormStyles.message : null}`} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={contactFormStyles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <div className={contactFormStyles.input_cont}>
      <label className={contactFormStyles.label} htmlFor={props.id || props.name}>{label}</label>
      <textarea className={`${contactFormStyles.text} ${props.name === 'message' ? contactFormStyles.message : null}`} {...field} {...props}></textarea>
      {meta.touched && meta.error ? (
        <div className={contactFormStyles.error}>{meta.error}</div>
      ) : null}
    </div>
  );
};

const ContactForm = () => {
  return (
  <div className={contactFormStyles.form_cont}>
    <b className={contactFormStyles.form_title}>CONTACT</b>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        fetch("/?no-cache=1", {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...values,
          }),
        })
          .then(() => {
            alert('Success!')
            resetForm({values : ''});
            setSubmitting(false)
          })
          .catch(error => {
            alert('Error: Please Try Again!')
            setSubmitting(false)
          })
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Name is Required!'),
        email: Yup.string()
          .email('Enter a Valid Email!')
          .required('Email is Required!'),
        message: Yup.string()
          .required('Message is Required!'),
      })}>
      <Form name="contact-demo" data-netlify={true}>
        <MyTextInput
          label="Name"
          name="name"
          type="text"
          placeholder=""
        />
        <MyTextInput
          label="Email Address"
          name="email"
          type="email"
          placeholder=""
        />
        <MyTextArea
          label="Message"
          name="message"
          type="message"
          placeholder=""
        />

        <button className={contactFormStyles.submit} type="submit">SUBMIT</button>
      </Form>
    </Formik>
    </div>
  )}


export default ContactForm
