import React,{ useState, useEffect } from 'react';
import axios from "axios";
import WritersForm from './WritersForm';
import ShowWriters from './ShowWriters';

const Writers = () => {
    const [writers, setWriters] = useState([]);
    useEffect(() => {
        getAuthors()
        // axios.get("/author")
        // .then((res)=>{
        //     setWriters(res.data)
        // })
    }, []);
    const getAuthors = (e) => {
         axios.get("/author")
         .then((res)=>{
             setWriters(res.data)
         })
    }
    


    const deleteAuthor = (authorId)=>{
    
        axios.delete('/author/' + authorId)
        .then(res =>{
            alert(res.data.msg)
            getAuthors()
        })
        // .get("/deleteAuthor/" + authorId)
        
        // alert(authorId)
    }
    const addAuthor = (e)=>{
        e.preventDefault();
        const authorOb = {
            first_name:e.target.first_name.value,
            last_name:e.target.last_name.value,
            dob:e.target.dob.preventDefault,
            dod:e.target.dod.value
        }
        axios.post("/author", authorOb)
        .then((res)=>{
            getAuthors()
            alert(res.data.msg)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
           <ShowWriters Writers={writers} DeleteAuthor={deleteAuthor}/>
           <WritersForm AddAuthor={addAuthor}/> 
        </div>
    )
}

export default Writers;
