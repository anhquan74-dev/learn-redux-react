import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUserRedux } from '../action/actions';

function FormAddNew(props) {

    const [user, setUser] = useState({
        email: '',
        password: '',
        username: ''
    })
    const dispatch = useDispatch();
    const isCreating = useSelector((state) => state.user.isCreating)

    const emailRef = useRef()
    console.log(emailRef)

    const handleCreateUser = () => {
        dispatch(createNewUserRedux(user))
        setUser({
            email: '',
            password: '',
            username: ''
        })
        emailRef.current.focus()
    }

    return (
        <>
            <Container>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            ref={emailRef}
                            type="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>User name</Form.Label>
                        <Form.Control
                            type="text"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    </Form.Group>
                    <Button variant="primary" onClick={handleCreateUser} disabled={isCreating}>Create</Button>
                </Form>
            </Container>
        </>);
}

export default FormAddNew;