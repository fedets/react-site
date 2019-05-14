import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleSubmit(){
        let userName = document.getElementById("userName").value;
        this.props.onGetUser(userName);
    }

    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    Login
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="#" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="userName" id="userName" required placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input autoComplete="false" type="password" className="form-control" name="userPassword" id="userPassword" placeholder="Password" />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Submit"/>
                        </form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default Login;