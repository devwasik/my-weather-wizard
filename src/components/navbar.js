import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import Logo from '../assets/imgs/logo.svg'

class Navbar extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <nav className="nav">
                <ul>
                    <img src={Logo} className="App-logo" alt="logo" />
                    <NavLink to='/'><li><i class="fas fa-home"></i></li></NavLink>
                    <NavLink to='/settings'><li><i class="fas fa-cog"></i></li></NavLink>
                    <NavLink to='/'><li><i class="fas fa-sync-alt"></i></li></NavLink>
                    <Form inline className="searchBox">
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Zipcode"
                                onChange={this.handleChange}
                            />
                    </Form>
                </ul>
            </nav>

        );
    }
}

export default Navbar;