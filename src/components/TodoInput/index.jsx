import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import styles from './TodoInput.module.scss';
import { TASK_SCHEMA } from '../../utils/validationSchemas';

function TodoInput ({ getNewTask }) {
  const initialValues = { task: '' };
  const submitHandler = ({ task }, formikBag) => {
    getNewTask(task);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TASK_SCHEMA}
    >
      <Form className={styles.formContainer}>
        <Field
          type='text'
          name='task'
          placeholder='Enter todo here'
          className={styles.inputContainer}
        />

        <button type='submit' className={styles.button}>
          Submit
        </button>
        <ErrorMessage
          name='task'
          render={msg => <div className={styles.error}>{msg}</div>}
        />
      </Form>
    </Formik>
  );
}

export default TodoInput;
