import React, { Component } from 'react';
import axios from "axios";

class StrapiPortal extends Component {
    //state of your application
   
    state = {
        restaurants: [],
        error: null,
    };

    //fecth your restaurants immediately after the component is mounted.

    componentDidMount = async () => {
        try {
            const response = await axios.get ("http://localhost:1337/recruitments")
            this.setState({ restaurants: response.data })
        } catch (error) {
            this.setState({ error })
        }
    }

    render() {
        const { error, restaurants } = this.state;

        //Print errors if any
        if (error) {
            return <div>An error occured: { error.message }</div>
        }

        return (
            <div className="App">
               {
                      this.state.restaurants.map(restaurant => {
                          return (
                            <div>
                                <h3> {restaurant.name} </h3>
                           <h3> {restaurant.location} </h3>
                           <h3> {restaurant.availablity} </h3>
                           <h3> {restaurant.Technologies} </h3>
                           <h3> {restaurant.experince} </h3>
                           <h3> {restaurant.education} </h3>
                           <h3> {restaurant.college} </h3>
                            </div>
                          )
                      }
                      
                          
                      )}
                  
            </div>
        )
    }
}

export default StrapiPortal;
