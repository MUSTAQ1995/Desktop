import React, { Component } from 'react';
import Background from "../images/bg.jpg";
import fire from "../conifg/fire";
import CircularProgress from "@material-ui/core/CircularProgress";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import NotFound from "./NotFound";
import Register from "../screens/Register";



const styles = {
    main: {
        BackgroundColor: "#282c34",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `linear-gradient(rgba(63, 81, 181, 0.7), rgba(63, 81, 181, 0.7)), url(${Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative"
    }
}

export class Appjs extends Component {
   constructor(props) {
       super(props);
           this.state = {
               loggedIn: null, 
               loading: false
           };
       }
     authListner() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }
    componentDidMount() {
        this.authListner()
    }

    renderContent = () => {
        if (this.state.loggedIn) {
            return <Home />;
        } else if (this.state.loggedIn === false) {
            return (
                <div style={styles.main}>
                   <SignIn/>
                </div>
            );
        } else {
            return (
                <div style={{ 
                    alignItems: "center", 
                    justifyContent: "center", 
                    minHeight: "100vh", 
                    display: "flex" 
                }}>
                  <CircularProgress  color="secondary"/>
                </div>
            );
        }
    }

    render() {
        return (
            
            <Router>
            <Switch>
            <Route exact path="/" component={this.renderContent} />
            <Route exact path="/registerStudent" component={Register} />
            <Route path="*" component={NotFound} />
            </Switch>
            </Router>          
        )
    }
}

export default Appjs
