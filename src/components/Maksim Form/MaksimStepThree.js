import { makeStyles, Typography } from '@material-ui/core'
import React from 'react';
import { Form } from './Form';
import { Input } from './Input';
import MainContainer from './MainContainer';
import { PrimaryButton } from './PrimaryButton';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useData } from "./DataContext";
import { FileInput } from "./FileInput"



function MaksimStepThree() {
    const history = useHistory();
    const { data, setValues } = useData();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            files: data.files
        }
    });
    const onSubmit = (data) => {
        history.push("/result")
        setValues(data)
    }
    return (
    <MainContainer>
        <Typography component="h2" variant="h5">
            Step 3
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FileInput name="files" control={control}/>
            {/* <Input 
              type="email"
              label="Email"
              name="email"
              required
            /> */}
           <PrimaryButton>NEXT</PrimaryButton> 
        </Form>
    </MainContainer>
    )
}    
export default MaksimStepThree
