import React from 'react'
import ReactDom from 'react-dom'

const arr = [
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

const render = () => {
    ReactDom.render(
        <>
            <MessagesList data={arr} />
            <AddMessageForm />

        </>,
        document.getElementById('root')
    )
}

const Message = ({text, author}) => <li className="qq">{text} - {author}</li>

const MessagesList = (props) => {
    return (
        <ul>
            {props.data.map((message, index) => <Message key={index} text={message.text} author={message.author} />)}
        </ul>
    )
}

const AddMessageForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault() //не перезагружать страницу
        const input = document.querySelector('.sentMessage')
        if(!input.value) return alert('Please, write a message')
        arr.push({
            text: input.value,
            author: '1111'
        })
        render()
        input.value = ''
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="sentMessage" type="text"/>
            <button type="submit">Send</button>
        </form>
    )
}

render()
