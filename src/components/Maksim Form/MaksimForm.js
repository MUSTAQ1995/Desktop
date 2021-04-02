import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import MaksimStepOne from './MaksimStepOne';
import MaksimStepTwo from './MaksimStepTwo';
import MaksimStepThree from './MaksimStepThree';
import MaksimResult from './MaksimResult';


function MaksimForm() {
    return (
        <div>
            <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={MaksimStepOne} />
                    <Route path="/step2" component={MaksimStepTwo} />
                    <Route path="/step3" component={MaksimStepThree} />
                    <Route path="/result" component={MaksimResult} />
                </Switch>
            </Router>
        </div>
    )
}

export default MaksimForm
