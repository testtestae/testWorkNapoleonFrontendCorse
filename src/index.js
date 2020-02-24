import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.sass';

import HelloSect from './components/HelloSect/HelloSect'
import AboutMe from './components/AboutMe/AboutMe'
import MoreQuestions from './components/MoreQuestions/MoreQuestions'

import {Dots} from 'react-preloaders';

//import App from './App';
//import * as serviceWorker from './serviceWorker';

class App extends React.Component{
    render(){
        return(
            <div>
                <HelloSect /> 
                <AboutMe />
                <MoreQuestions/>
            </div>
        )
    }
}

ReactDOM.render(<div><Dots /><App /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();
