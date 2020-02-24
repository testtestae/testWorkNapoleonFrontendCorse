import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import './MyScill.sass';


export default class MySkill extends React.Component{
    render(){
        return(
            <section className="MySkill" id="MySkill">
                <div className="payload">
                    <Container>
                        <Header 
                            as='h2' 
                            textAlign='left'
                            icon='star' 
                            content='Мой скилл'
                            className='headerPadding'
                        />
                            <p>(технологии которые я изучал)</p>
                        <ul className="list1">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>
                                <ul>
                                    <li>Flexbox</li>
                                    <li>GRID</li>
                                </ul>
                            </li>
                            <li>SASS</li>
                            <li>GIT</li>
                        </ul>
                        <ul className="list2">
                            <li>CSS фреймворки</li>
                            <li>
                                <ul>
                                    <li>Matherial Design</li>
                                    <li>Semantic UI</li>
                                    <li>Bootstrap</li>
                                </ul>
                            </li>
                            <li>ReactJS</li>
                            <li>JavaScript</li>
                            <li>VueJS</li>
                            <li>Webpack</li>
                            <li>Gulp</li>
                        </ul>
                        <br/>
                        <p>(как бы то ни было странно, специалистом ни в одной из этих технологий я себя не считаю) </p>
                    </Container>
                </div>
            </section>
        )
    }
}