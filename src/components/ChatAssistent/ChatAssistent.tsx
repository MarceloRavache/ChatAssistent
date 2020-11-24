import React,{useState} from 'react';

import './styles.css'
interface Props {
    readonly title: string
}

const ChatAssitent: React.FC<Props> = ({title}) => {
    const [visibleChat,setVisibleChat] = useState(false);
    const [chatInput,setChatInput] = useState("");

    const handleVisibleChat = () => {
        if(visibleChat){
            const chatContent = document.getElementsByClassName("chat__content")  as HTMLCollectionOf<HTMLElement>;
            chatContent[0].style.display = 'none' ;
            setVisibleChat(false);
        }else{
            const chatContent = document.getElementsByClassName("chat__content")  as HTMLCollectionOf<HTMLElement>;
            chatContent[0].style.display = 'block' ;
            setVisibleChat(true);
        }
        
    }
    return(
        <>
        <div className="chat">
            <button className="chat__bar" onClick={()=>handleVisibleChat()}>{title}</button>
            <div className="chat__content" id="chat__content">
                <div className="chat_history"></div>
                <input className="chat_input" type="text" value={chatInput} onChange={e=>setChatInput(e.target.value)}/>
            </div>
        </div>
        </>
    )
}
export default ChatAssitent;