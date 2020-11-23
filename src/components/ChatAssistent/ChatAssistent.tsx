import React,{ Component } from 'react';
import { title } from 'process';

type ChatAssitentProps = {
    title: string
}

export default class ChatAssitent extends Component<ChatAssitentProps>{
    render(){
        return(
            <div>
                {title}
            </div>
        )
    }
}