import React from 'react';
import './HelloSect.sass';

export default class HelloSect extends React.Component{
    render(){
        return(
            <section className="HelloSect" id="HelloSect">
                <div className="payload">
                    <h1>Привет </h1>
                </div>
            </section>
        )
    }
}