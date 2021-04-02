import React from 'react'

function ReduxCounterForm(props) {
    return (
        <div>
            <form onSubmit= {props.avinash}>
              <input type="text" name = "title" />
              <button>Submit</button>
            </form>
        </div>
    )
}

export default ReduxCounterForm
