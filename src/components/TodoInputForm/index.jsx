import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import styles from './TodoInputForm.module.scss';
import { TASK_SCHEMA } from '../../utils/validationSchemas';

function TodoInputForm ({ getNewTask, itemToEdit, reset }) {
  const initialValues = { task: itemToEdit };
  const submitHandler = ({ task }, formikBag) => {
    getNewTask(task);
    formikBag.resetForm();
    reset('');
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

export default TodoInputForm;
