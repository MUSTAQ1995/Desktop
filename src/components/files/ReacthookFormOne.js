import React from 'react';
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

})

function ReacthookFormOne() {
    const classes = useStyles();
    const {register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.style}>
                <input 
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Address"
                  ref={ register ({ required: true})}
                />
                {errors.email && <p>Email is required</p>}
                <input
                  type="password"
                  name="password"
                  placeholder="Enter the password"
                  ref={ register ({ required: true, minLength:5 })}
                />
                {errors.password && <p>Password is required </p>}
                <input type="submit" />
            </form>
        </div>
    )
}

export default ReacthookFormOne
