import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import styles from './TodoInput.module.scss';
import { TASK_SCHEMA } from '../../utils/validationSchemas';

const tasksContainer = [];

function TodoInput ({ getTasks }) {
  const initialValues = { task: '' };
  const submitHandler = ({ task }, formikBag) => {
    tasksContainer.push(task);
    getTasks(tasksContainer);
    // console.log(tasksContainer);
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
        {/* <ErrorMessage name='task' render={msg => <div>{msg}</div>} /> */}
      </Form>
    </Formik>
  );
}

export default TodoInput;
