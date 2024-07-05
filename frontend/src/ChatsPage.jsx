import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = () => {
    const chatProps = useMultiChatLogic(
        '8a1c4b09-025d-4cc1-aea0-472d88c178f0',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
        </div>
    )
}

export default ChatsPage