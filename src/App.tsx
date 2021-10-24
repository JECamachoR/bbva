import * as React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App() {
    const [context, setContext] = React.useState()
    return (
        <Router>
            <Switch>
                <Route path="/a">
                    <div>
                        <p>a</p>
                            <Link to="b">b</Link>
                            <Link to="c">c</Link>
                    </div>
                </Route>
                <Route path="/b">
                    <div>
                        <p>b</p>
                            <Link to="a">a</Link>
                            <Link to="c">c</Link>
                    </div>
                </Route>
                <Route path="/c">
                    <div>
                        <p>b</p>
                            <Link to="a">a</Link>
                            <Link to="b">b</Link>
                    </div>
                </Route>
                <Route path="/">
                    <div>
                            <Link to="a">a</Link>
                            <Link to="b">b</Link>
                            <Link to="c">c</Link>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default withAuthenticator(App);
