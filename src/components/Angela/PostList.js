import React, { Component } from 'react';
import axios from "axios";
//axios is a promice based library, we can use then and catch blocks

 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts: [],
              errorMsg:''
         }
     }
     componentDidMount() {
       axios.get("https://jsonplaceholder.typicode.com/posts")
       //this method accepts the api inpoints as its arguments.
       .then(response => {
           console.log(response)
           this.setState({ posts: response.data})
       })
       .catch(error => {
           console.log(error)
           this.setState({ errorMsg: "Error retreiving data"})
       })
       //arrow which gives you the acceces to the response.
     }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of posts
            {
                posts.length ?
                posts.map(post => <div key={post.id}>{post.title}</div>) : null
            }
            {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList
