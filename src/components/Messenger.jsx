import React from 'react'
import {MessagesList} from './MessagesList'
import {AddMessageForm} from "components/AddMessageForm";

export class Messenger extends React.Component {
    state = {
        messages: [
            {
                text: 'hi',
                author: 'tim'
            },
            {
                text: 'hi',
                author: 'tim'
            },
            {
                text: 'hi',
                author: 'tim'
            },
            {
                text: 'hi',
                author: 'tim'
            }
        ]
    }

    addMessage = (newMessage) => {
        this.setState({
            messages: [...this.state.messages, newMessage]
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const lastNumber = this.state.messages.length-1
        if(this.state.messages[lastNumber].author === 'bot') {
            return
        }
        const botMessage = {
            text: `${this.state.messages[lastNumber].author}, ${this.state.messages[lastNumber].text}`,
            author: 'bot'
        }
        this.addMessage(botMessage)
    }

    render(){
        const {messages} = this.state
        return (
            <>
                <MessagesList data={messages} />
                <AddMessageForm addMessage={this.addMessage}/>
            </>
        )
    }
}
