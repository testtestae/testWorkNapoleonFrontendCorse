import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import MyPhoneButton from './MoreQuestions.sass'

import '../../elements/myPhoneButton/MyPhoneButton'

export default class MoreQuestions extends React.Component{
    render(){
        return(
            <section className="MoreQuestions" id="MoreQuestions">
                <div className="payload">
                    <Container>
                        <Header 
                            as='h2' 
                            textAlign='left'
                            icon='user' 
                            content='Еще вопросы?'
                            className='headerPadding'
                        />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem reprehenderit hic unde non quaerat? Odio earum fugiat sapiente eius mollitia nisi, modi dignissimos maiores velit at doloribus laboriosam atque itaque.</p>
                        <MyPhoneButton/>
                    </Container>
                </div>
            </section>
        )
    }
}