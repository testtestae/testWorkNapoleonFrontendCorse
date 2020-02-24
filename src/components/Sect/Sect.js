import React from 'react'
import { Header, Container } from 'semantic-ui-react'
import './Sect.sass'

export default class Sect extends React.Component{
    //propses: title, iconName, payloadText, other
    constructor(props) {
        super(props);
      }
    

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