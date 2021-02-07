import React from 'react'
import PropTypes from 'prop-types'

export const messageType = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}
export const Message = ({text, author}) => <li className="qq">{text} - {author}</li>

Message.propTypes = messageType
