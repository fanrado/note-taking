import React from "react";

class Form extends React.Component {
    state = {
        title: '',
        content: ''
    }

    onSubmit = (event) => {
        const { title, content } = this.state;
        const { onAdd, onHide } = this.props;
        event.preventDefault();
        if (!title) {
            alert('Add title');
            return;
        }
        if (!content) {
            alert('Add note');
            return;
        }
        onAdd(this.state); // communication with parent
        this.setState({ title: '', content: '' });
        onHide(); // hide the Form
    };

    render() {
        const { title, content } = this.state;
        return (
            <form onSubmit={this.onSubmit} className="form-note">
                <input type='text' placeholder="add title"
                    value={title} className="input-title"
                    onChange={e => this.setState({ title: e.target.value })}
                />
                <textarea placeholder="add note"
                    value={content} className="input-content"
                    onChange={e => this.setState({ content: e.target.value })}
                />
                <input type='submit' value='add Note' className="submit-btn" />
            </form>
        );
    }
}

export default Form;