import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Select from "react-select";
import { Input as StrapInput } from "reactstrap";
import { Input as AntdInput } from "antd";

const options = [
    { value: "strawberry", label: "strawberry" },
    { value: "vanilla", label: "Vanilla" },
    { value: "chocolate", label: "Chocolate" }
];

const MyInput = ({ name, label, register }) => {
    return (
        <>
          <label htmlFor={name}>{label}</label>
          <input name={name} placeholder="Jane" ref={register} />
        </>
    )
};

function CustomInput() {
const { register, handleSubmit, setValue } = useForm();
const onSubmit = data => {
    alert(JSON.stringify(data, null));
};
const [values, setReactSelect] = useState({
    selectedOption: []
});
const handleMultiChange = selectedOption => {
    setValue("reactSelect", selectedOption);
    setReactSelect({ selectedOption });
};
const handleChange = e => {
    setValue("antDInput", e.target.value);
};
useEffect(() => {
    register({ name: "reactSelect" });
    register({ name: "antDInput" });
}, [register]);


    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div>
                   <Input 
                     style={{
                         marginBottom: "20px"
                     }}
                     name="HelloWorld"
                     inputRef={register}
                     placeholder="Materoal UI - Input"
                     inputProps={{
                         "aria-label": "Description"
                     }}
                   />
               </div>
               <div>
                   <input 
                     name="antDInput"
                     onChange={handleChange}
                     placeholder="antDInput"
                   />
               </div>
               <div>
                   <StrapInput 
                    placeholder="Starp - Input"
                    name="strapInput"
                    innerRef={register}
                   />
               </div>
               <div>
                   <label className="reactSelectLabel">React Select</label>
                   <Select 
                     className="reactSelect"
                     name="filters"
                     placeholder="Filters"
                     value={values.selectedOption}
                     options={options}
                     onChange={handleMultiChange}
                     isMulti
                   />
               </div>
               <div>
                   <MyInput name="fisrName" label="First nName" register={register} />
               </div>

               <div>
                   <label htmlFor="lastName">Last Name</label>
                   <input name="lastName" placeholder="Luo" ref={register} />
               </div>

               <div>
                   <label hrmlFor="email">Email</label>
                   <input 
                     name="email"
                     placeholder="fake@gmail.com"
                     type="email"
                     ref={register}
                   />
               </div>
               <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CustomInput
