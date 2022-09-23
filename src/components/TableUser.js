import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUser, deleteUserRedux } from '../action/actions'

const TableUser = (props) => {

    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);


    useEffect(() => {
        dispatch(fetchAllUser())
    }, [])

    const handleDeleteUser = (user) => {
        dispatch(deleteUserRedux(user.id))
    }

    return (<>
        <Container>
            <hr />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {isError === true ?
                        <>
                            <div>Something wrongs, please try again...</div>
                        </>
                        :
                        <>
                            {isLoading === true ?
                                <><div>Loading data...</div></>
                                :
                                <>
                                    {listUsers && listUsers.length > 0 && listUsers.map((user, index) => {
                                        return (
                                            <tr key={`user-${index}`}>
                                                <td>{user.id}</td>
                                                <td>{user.email}</td>
                                                <td>{user.username}</td>
                                                <td>
                                                    <button className='btn btn-warning'>Edit</button>
                                                    <button
                                                        className='btn btn-danger'
                                                        onClick={() => handleDeleteUser(user)}>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </>
                            }
                        </>
                    }
                </tbody>
            </Table>
        </Container>
    </>);
}

export default TableUser;