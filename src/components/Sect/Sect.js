import React from 'react'
import { Header, Container } from 'semantic-ui-react'

export default class Sect extends React.Component{

    render(){
        return(
            <section className="AboutMe" id="AboutMe">
                <div className="payload">
                    <Container>
                        <Header 
                            as='h2' 
                            textAlign='left'
                            icon={this.props.iconName} 
                            content={this.props.title}
                            className='headerPadding'
                        />
                        <p>{this.props.payloadText}</p>
                        {this.props.other}
                    </Container>
                </div>
            </section>
        )
    }
}