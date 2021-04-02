import React from 'react'
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';

const CustomTextInput = ({ label, ...props}) => {
     const [field, meta ] = useField(props);

     return (
         <>
           <label htmlfor= {props.id || props.name}>{label}</label>
           <input className="text-input" {...field}{...props}/>
           {meta.touched && meta.error ? (
               <div className="error">{meta.error}</div>
           ) : null}                
         </>
     )
}

const Checkbox = ({ children, ...props}) => {
    const [field, meta ] = useField(props, "checkbox");

    return (
        <>
          <label className="checkbox">
          <input type="checkbox" {...field}{...props}/>
          {children}
          </label>
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}                
        </>
    )
}

const CustomSelect = ({ label, ...props}) => {
    const [field, meta ] = useField(props);

    return (
        <>
          <label htmlfor= {props.id || props.name}>{label}</label>
          <select {...field}{...props}/>
          {meta.touched && meta.error ? (
              <div className="error">{meta.error}</div>
          ) : null}                
        </>
    )
}


function FormikForm() {
    return (
        <Formik
            initialValues={{
                name: "",
                email:"",
                acceptedTerms: "",
                specialPower: "",
            }}
            validationSchema={Yup.object({
                name:Yup.string()
                .min(3, "Must conatinf at least 3 Characters")
                .max(15, "Not more then 15 characters")
                .required("Required"),
                email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
                acceptedTerms: Yup.boolean()
                .required('Required')
                .oneOf([true], "You must accept the terms and conditions"),
                specialPower: Yup.string()
                .oneOf(["flight", "strong", "wealthy", "Rich"], "Invalid Special Power")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false);
                }, 3000)
            }}
            >
                {props => (
                    <Form>
                        <h1>Sign Up</h1>
                        <CustomTextInput label="name" name="name" type="text" placeholder="Manju" />
                        <CustomTextInput label="Email" name="email" type="email" placeholder="manju@gmail.com" />
                        <CustomSelect label="Special Power" name=" specialPower">
                            <option value="">Select a special Power</option>
                            <option value="flight">Flight</option>
                            <option value="strong">Strong</option>
                            <option value="wealthy"> Wealthy</option>
                            <option value="rich">Rich</option>
                        </CustomSelect>
                        <Checkbox name="acceptedTerms">
                            I accept the terms and condtions
                        </Checkbox>
                        <button type="submit">{props.isSubmitting ? "Loading..." : "Submit"}</button>
                    </Form>
                )}
        </Formik>
    )
}

export default FormikForm;
