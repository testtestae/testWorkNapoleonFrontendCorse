import React from 'react'
import { Button, Icon} from 'semantic-ui-react'
import './SocialNetworks.sass'

function SocialNetworksList(props) {
    const SNList = props.SNList;
    const listItems = SNList.map((number) =>
        <SocialNetwork SNInfo={number}/>
    );
    return (
        <div>{listItems}</div>
    )
}

function SocialNetwork(props) {
    //const payloadList = props.SNInfo;
    return(
        <div>
            Console.log(props.SNInfo)
        </div>
        
    )
}


export default class SocialNetworks extends React.Component {
    SNList = [
        //[SocialNetworkName, colorName, iconName, link]
        ['VK', 'vk', 'vk', 'https://vk.com/anton_elohin'],
        ['Telegram', 'instagram', 'telegram plane', 'https://tglink.ru/Anton_Elohin'],
        ['LinkedIn', 'linkedin', 'linkedin','https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D0%B5%D0%BB%D0%BE%D1%85%D0%B8%D0%BD-b8447818b'],
        ['GMail', 'youtube', 'mail', 'mailto:elohinanton@gmail.com']
    ]
    
    render(){
        return (
          

            <div className='SocialNetworks'>
          
                <SocialNetworksList SNList={this.SNList}/>
                
            {/*<a href={this.links.vk}>
                <Button 
                color='vk' 
                >
                    <Icon name='vk' /> VK
                
            </Button></a>
            <Button 
                color='instagram'
                onClick = "{document.location=this.links.tg}"
            >
                <Icon name='telegram plane' /> Telegram
            </Button>
            <Button 
                color='linkedin'
                onClick = "{document.location=this.links.linkedIn}"
            >
                <Icon name='linkedin' /> LinkedIn
            </Button>
            <Button 
                color='youtube'
                onClick = "{document.location=this.links.mail}"
            >
                <Icon name='mail' /> GMail
            </Button> 
            */}
            </div>
            
        )
    }
}
