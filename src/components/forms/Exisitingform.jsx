import React from 'react';
import { useForm } from "react-hook-form";

const Input = ({ label, required, register }) => (
    <>
     <label>{label}</label>
     <input name={label} ref={register({ required })} />
    </>
);

const Select = React.forwardRef(({ label }, ref) => (
    <>
      <label>{label}</label>
      <select name={label} ref={ref}>
          <option value="20">20</option>
          <option value="30">30</option>
      </select>
    </>
))

function Exisitingform() {
const { register, handleSubmit } = useForm();
const onSubmit = (data) => {
    console.log(data)
}

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input label="First Name" register={register} required />
              <Select label="Age" ref={register} />
              <input type="submit" />
            </form>
        </div>
    )
}

export default Exisitingform
