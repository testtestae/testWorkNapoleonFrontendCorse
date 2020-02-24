import React from 'react'
import { Button, Icon} from 'semantic-ui-react'
import './SocialNetworks.sass'

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
          
                {/* <SocialNetworksList SNList={this.SNList}/>  */}
                
                <a href={this.SNList[0][3]} rel="noopener noreferrer" target="_blank">
                    <Button color='vk'>
                        <Icon name='vk'/>VK
                    </Button>
                </a>

                <a href={this.SNList[1][3]} rel="noopener noreferrer" target="_blank">
                    <Button color='instagram'>
                        <Icon name='telegram plane' /> Telegram
                    </Button>
                </a>
                    
                <a href={this.SNList[2][3]} rel="noopener noreferrer" target="_blank">
                    <Button color='linkedin'>
                        <Icon name='linkedin' /> LinkedIn
                    </Button>
                </a>
                <a href={this.SNList[3][3]} rel="noopener noreferrer" target="_blank">
                    <Button color='youtube'>
                        <Icon name='mail' /> GMail
                    </Button> 
                </a>
                
                
            </div>

            
        )
    }
}
