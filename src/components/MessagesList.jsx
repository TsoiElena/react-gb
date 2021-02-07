import React from 'react'
import PropTypes from 'prop-types'
import {Message, messageType} from './Message'

export const MessagesList = (props) => {
    return (
        <ul>
            {props.data.map((message, index) => <Message key={index} text={message.text} author={message.author} />)}
        </ul>
    )
}

MessagesList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(messageType))
}
