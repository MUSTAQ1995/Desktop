import React from 'react';
import { useForm } from "react-hook-form";


function InterDependentFields() {
const { register, handleSubmit, watch } = useForm();
const checkbox = watch("checkbox")

const onSubmit=(data) =>alert(JSON.stringify(data));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="fname" ref={register} />
                <input type="checkbox" name="checkbox" id="checkbox" ref={register} />

                {
                    checkbox && (
                        <div>
                            <label htmlFor="favouriteFlavour">Favourite Flavour:</label>
                            <select id="favouriteFlavour" name="favouriteFlavour" ref={register}>
                                  <option value="chocolate">Chocolate</option>
                                  <option value="lime">Lime</option>
                                  <option value="coconut">Coconut</option>
                                  <option value="mango">Mango</option>
                            </select>
                        </div>
                    )
                }

                <input type="submit" />
            </form>
        </div>
    )
}

export default InterDependentFields
