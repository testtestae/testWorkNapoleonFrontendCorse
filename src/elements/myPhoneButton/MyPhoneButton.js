import React from 'react'
import { Button} from 'semantic-ui-react'

let myPhone = '+7 952 505 24 26';
let hidePhone = '+7 *** *** ** **';



export default class MyPhoneButton extends React.Component {
  
  visitPhone = () => {
    if(this.state.currentPhone === hidePhone){
      this.setState({currentPhone: myPhone});
    } else {
      this.setState({currentPhone: hidePhone});
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      currentPhone: hidePhone
    };
  }

  render(){
    return (
      <div>
        <Button 
          color='teal'
          content='показать телефон'
          icon='phone'
          label={{ basic: true, color: 'teal', pointing: 'left', content: this.state.currentPhone }}
          onClick={this.visitPhone}
        />
      </div>
    )
  }
}
