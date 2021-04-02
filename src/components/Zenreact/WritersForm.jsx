import React from 'react'

function WritersForm({AddAuthor}) {
    return (
        <form onSubmit = {AddAuthor}>
              <input type="text" name="first_name" placeholder="Enter Author First Name" />
              <input type="text" name="last_name" placeholder="Enter Author Last Name" />
              <input type="date" name="dob" />
              <input type="date" name="dod" />
              <button>Add Author</button>
        </form>
    )
}

export default WritersForm
