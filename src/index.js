import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.sass';

import Sect from './components/Sect/Sect';

import HelloSect from './components/HelloSect/HelloSect';
import MoreQuestions from './components/MoreQuestions/MoreQuestions';

import {Dots} from 'react-preloaders';

class App extends React.Component{

    content = {
        aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit hic unde non quaerat? Odio earum fugiat sapiente eius mollitia nisi, modi dignissimos maiores velit at doloribus laboriosam atque itaque.',
        questions: 'Я открыт для общения! <br/> Мне можно позвонить на  сотовый, связаться через ВК, Телеграм, LinkedIn или электронную почту. '
    };

    render(){
        return(
            <div>
                <HelloSect /> 
                <Sect title="Обо мне" iconName="user" payloadText={this.content.aboutMe}/>
                <MoreQuestions/>
            </div>
        )
    }
};



ReactDOM.render(<div><Dots /><App /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();
