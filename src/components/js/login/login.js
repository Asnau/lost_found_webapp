import React from 'react';
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

class Login extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: ''
        };   
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit(event){
        event.preventDefault();

        this.setState({ submitted: true});
        const {username, password} = this.state;
    }

    /* toggle() {
        this.setState({
            modal: !this.props.modal
        });
        console.log(this.props.modal);
    } */


    render() {
        const {username, password, submitted} = this.state;
        //var modals;
        return (
            <div onClick={this.props.loginmodals}>
              {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
              <Modal isOpen={this.props.loginmodal} toggle={this.props.loginmodals} className={this.props.className}>
                <ModalHeader toggle={this.props.loginmodals}>Login</ModalHeader>
                <ModalBody>
                      <Form onSubmit={this.handleSubmit}>
                          <FormGroup className={(submitted && !username ? ' has-error' : '')}>
                              <Label for="Email">Email</Label>
                              <Input type="email" name="email" id="email" placeholder=""/>
                          </FormGroup>
                          <FormGroup className={(submitted && !password ? ' has-error' : '')}>
                              <Label for="password">Password</Label>
                              <Input type="password" name="password" id="password" placeholder=""/>
                          </FormGroup>
                      </Form>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          );
    }
}

export default Login;