// import { Formik } from 'formik'

// export const Formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//     },
//     validate,
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },

//  return(
//     <form onSubmit={formik.handleSubmit}>
//        <label htmlFor="firstName">First Name</label>
//        <input
//          id="firstName"
//          name="firstName"
//          type="text"
//          onChange={formik.handleChange}
//          value={formik.values.firstName}
//        />
//        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
 
//        <label htmlFor="lastName">Last Name</label>
//        <input
//          id="lastName"
//          name="lastName"
//          type="text"
//          onChange={formik.handleChange}
//          value={formik.values.lastName}
//        />
//        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
 
//        <label htmlFor="email">Email Address</label>
//        <input
//          id="email"
//          name="email"
//          type="email"
//          onChange={formik.handleChange}
//          value={formik.values.email}
//        />
//        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
 
//        <button type="submit">Submit</button>
//      </form>
//  )
// });