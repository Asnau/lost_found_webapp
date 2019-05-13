import React from 'react';
import $ from 'jquery';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

class Signup extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            user: {
                firstname: '',
                lastname: '',
                email: '',
                password: ''
            },
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]:value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitted: true});
        const {user} = this.state;
        const URL = "http://localhost:4000/signup";
        const data = JSON.stringify({
            first_name: user.firstname,
            last_name: user.lastname,
            email: user.email,
            password: user.password
        });
        const otherParam= {
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                "Content-Type": "application/json"
            },
            body: data,
            method: 'POST'
        }
        fetch(URL, otherParam)
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }

    render() {
        const {user, submitted} = this.state;
        return (
            <div onClick={this.props.signupmodals}>
              <Modal isOpen={this.props.signupmodal} toggle={this.props.signupmodals} className={this.props.className}>
                <ModalHeader toggle={this.props.signupmodals}>Sign Up</ModalHeader>
                <ModalBody>
                      <Form onSubmit={this.handleSubmit}>
                          <FormGroup className={(submitted && !user.firstname ? 'has-error' : '')}>
                              <Label for="First Name">First Name</Label>
                              <Input type="text" name="firstname" id="firstname" placeholder="" onChange={this.handleChange}/>
                          </FormGroup>
                          <FormGroup className={(submitted && !user.lastname ? 'has-error' : '')}>
                              <Label for="Last Name">Last Name</Label>
                              <Input type="text" name="lastname" id="lastname" placeholder="" onChange={this.handleChange}/>
                          </FormGroup>
                          <FormGroup className={(submitted && !user.email ? 'has-error' : '')}>
                              <Label for="Email">Email</Label>
                              <Input type="email" name="email" id="email" placeholder="" onChange={this.handleChange}/>
                          </FormGroup>
                          <FormGroup className={(submitted && !user.password ? 'has-error' : '')}>
                              <Label for="password">Password</Label>
                              <Input type="password" name="password" id="password" placeholder="" onChange={this.handleChange}/>
                          </FormGroup>
                          <FormGroup check>
                            <Input type="checkbox"/>{''}
                            I accept Terms and Conditions
                          </FormGroup>
                          <Button>Submit</Button>
                      </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary">Submit</Button>{' '}
                  <Button color="secondary" onClick={this.props.signupmodals}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          );
    }
}

export default Signup;