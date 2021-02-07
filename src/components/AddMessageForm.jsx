import React from 'react'
import PropTypes from 'prop-types'

export class AddMessageForm extends React.Component {
    state = {
        text: '',
        author: ''
    }

    static propTypes = {
        addMessage: PropTypes.func.isRequired
    }

    handleInputChange = (event) => {
        const Name = event.target.name
        this.setState({[Name]: event.target.value})
    }

    handleSubmit = (event) => {
        const {text, author} = this.state
        const {addMessage} = this.props

        event && event.preventDefault() //не перезагружать страницу

        if(!text) return alert('Please, write a message')
        if(!author) return alert('Please, write a nik-name')

        if(typeof addMessage === 'function') {
            addMessage(this.state)
            this.setState({
                text: '',
                author: ''
            })
        }
    }

    handleKeyPress = (event) => {
        event.key ==='Enter' && this.handleSubmit()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onKeyPress={this.handleKeyPress}>
                <input name="author" type="text" placeholder="write your nik-name" onChange={this.handleInputChange} value={this.state.author}/>
                <textarea name="text"  placeholder="write your message" onChange={this.handleInputChange} value={this.state.text}/>
                <button type="submit">Send</button>
            </form>
        )
    }
}
