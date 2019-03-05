import React from 'react';

// Class component with first+last name stateful inputs & name set in document.title
export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Jack',
            lastName: 'Daniels',
        };
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
    }

    componentDidMount() {
        document.title = `${this.state.firstName} ${this.state.lastName}`;
    }

    componentDidUpdate() {
        document.title = `${this.state.firstName} ${this.state.lastName}`;
    }

    handleFirstNameChange(event) {
        this.setState({
            firstName: event.target.value,
        });
    }

    handleLastNameChange(event) {
        this.setState({
            lastName: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <div className="field">
                    <label>First Name</label>
                    <input
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange} />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange} />
                </div>
            </div>
        );
    }
}