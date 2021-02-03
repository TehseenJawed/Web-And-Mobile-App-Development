import React from "react"
import { Formik } from 'formik';

const IndexPage = () => (
  <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ message: '' }}
       validate={values => {
         const errors = {};
         if (!values.message) {
           errors.message = 'Required';
         } 
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         console.log(values);
             fetch(`/.netlify/functions/add`, {
              method: 'post',
              body: JSON.stringify(values)
            })
          .then(response => response.json())
          .then(data => {
            setData(data);
            console.log("Data: " + JSON.stringify(data));
            
          })
          .catch((err) => console.log(err))
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="message"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.message}
           />
           {errors.message && touched.message && errors.message}
           <button type="submit" disabled={isSubmitting}>
             Add Message
           </button>
         </form>
       )}
     </Formik>
   </div>
)

export default IndexPage
