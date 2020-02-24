import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import './AboutMe.sass'

export default class AboutMe extends React.Component{
    render(){
        return(
            <section className="AboutMe" id="AboutMe">
                <div className="payload">
                    <Container>
                        <Header 
                            as='h2' 
                            textAlign='left'
                            icon='user' 
                            content='Обо мне'
                            className='headerPadding'
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit hic unde non quaerat? Odio earum fugiat sapiente eius mollitia nisi, modi dignissimos maiores velit at doloribus laboriosam atque itaque.</p>
                    </Container>
                </div>
            </section>
        )
    }
}