import React from 'react';
import { useFormik } from "formik";
import  CustomSelect  from "./CustomSelect";
import { FormatStrikethrough } from '@material-ui/icons';

const options=[
    {value:'developer', label: 'Software developer'},
    {value: 'chef', label:"chef"},
    {value: "painter", label: "Painter"},
]
const validate = values => {
    const errors ={}
    if(!values.email){
        errors.email= "Email is required"
    } 
    if(!values.select){
        errors.select="Required"
    }
    return errors
}

function Select() {

    const formik = useFormik({
        initialValues: {
    email:"",
    select:"",
        },
        validate,
        onSubmit: value=> {
            console.log(value)
    }
    });


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email Address</label>
                <input 
                name="email"
                id="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email} />
                {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}
               
                <label htmlFor="select">DropDown</label>
                <CustomSelect
                options={options}
                value={formik.values.select}
                onChange={value=>formik.setFieldValue("select", value.value)}/>
                {formik.errors.select ? <div className="error">{formik.errors.job}</div> : null }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Select
