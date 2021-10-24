import * as React from "react"

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import WithoutEnd from "./components/WithoutEnd";
Amplify.configure(awsconfig);


function App() {
    return (
        <WithoutEnd />
    );
}

export default App;