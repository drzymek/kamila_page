import React from 'react';
import '../css/Contact.css'
import img01 from '../img/newLogo(3).png'

class Contact extends React.Component {
    state = {
        nameValue: "",
        emailValue: "",
        phoneValue: "",
        messageValue: "",
    }

    handleNameChange = (e) => {
        this.setState({
            nameValue: e.target.value
        })
    }

    handleEmailChange = (e) => {
        this.setState({
            emailValue: e.target.value
        })
    }

    handlePhoneChange = (e) => {
        this.setState({
            phoneValue: e.target.value
        })
    }

    handleMessageChange = (e) => {
        this.setState({
            messageValue: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            nameValue: "",
            emailValue: "",
            phoneValue: "",
            messageValue: ""
        })
    }

    render() {
        return (
            <div className="contactContent">
                <form onSubmit={this.handleSubmit}>
                    <h1><strong>Contact</strong> me...</h1>
                    <input type="text" value={this.state.nameValue} onChange={this.handleNameChange} placeholder="name" />
                    <input type="email" value={this.state.emailValue} onChange={this.handleEmailChange} placeholder="@email" />
                    <input type="phone" value={this.state.phoneValue} onChange={this.handlePhoneChange} placeholder="phone" />
                    <textarea value={this.state.messageValue} onChange={this.handleMessageChange} placeholder="message..."></textarea>
                    <button type="submit">Send</button>
                </form>
                <div className="contactImg">
                    <img src={img01} alt="contactSectionPhoto" />
                </div>
            </div>
        )
    }

}

export default Contact;