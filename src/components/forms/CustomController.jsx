import React from 'react';
import { useForm, Controller } from "react-hook-form";
import MaskedInput from "react-input-mask";


export const clearTel = tel => tel.replace(/[^0-9]/g, "");

const isNotFilledTel = v => {
    const clearedTel = clearedTel(v);
    return clearedTel.length < 11 ? "Phone number is required.": undefined;
};

const Input = props => {
    const { onChange, ...restProps } = props;
    return <input {...restProps} onChange={onChange} />;
}


const CustomMaskedInput = props => {
    const { value, onChange, name } = props;
    return (
        <div>
            <MaskedInput 
              name={name}
              value={value}
              mask="+7 (999) 999-99-99"
              maskPlaceholder={"_"}
              alwaysShowMask
              onChange={e => {
                  e.persist();
                  onChange(e.target.value);
              }}
            >
            <input type="text" autoComplete="tel-national" />
            </MaskedInput>
        </div>
    )
};
const onSubmit = data => {
    console.log("submit", data);
};

function CustomController(){
    const {handleSubmit, errors, control } = useForm({
        reValidationMode:  "onSubmit"
    });
    const [tel, setTel ] = React.useState("7");
    return(
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
             <div>
                 <Controller 
                  as={<CustomMaskedInput />}
                  value={tel}
                  onChange={([e]) => {
                      setTel(e);
                      return { value: e };
                  }}
                  rules={{
                      validate: {
                          inputTelRequired: isNotFilledTel
                      }
                  }}
                  defaultValue={tel}
                  name="ControlledMaskedInput"
                  control={control}
                 />
                 {errors.ControlledMaskedInput && (
                     <p>{errors.ControlledMaskedInput.mesasage}</p>
                 )}
             </div>
             <input type="submit" />
           </form>
        </div>
    )
}

export default CustomController
