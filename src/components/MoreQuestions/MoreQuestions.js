import React from 'react'
import { Header, Container } from 'semantic-ui-react'

import MyPhoneButton from '../../elements/myPhoneButton/MyPhoneButton'
import SocialNetworks from '../../elements/SocialNetworks/SocialNetworks'

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
                        <p>
                            Я открыт для общения! <br/> Мне можно позвонить на  сотовый, связаться через ВК, Телеграм, LinkedIn или электронную почту. 
                        </p><br/>
                        <MyPhoneButton/>
                        <SocialNetworks/>
                    </Container>
                </div>
            </section>
        )
    }
}