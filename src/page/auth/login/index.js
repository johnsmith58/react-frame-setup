import React, { Component } from 'react';
import classes from './styles.module.css'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          admins: [],
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <div className={classes.container}>
                    <p>Hello workd login page</p>
                </div>
            </>
        );
    }
}
export default LoginPage;