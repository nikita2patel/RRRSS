import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { delt, clear, edit } from '../Redux/Action/Action';





const Tabel = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const botel = useSelector((state) => state.reducer)
    const record = botel.user
    console.log('botel', record)

    useEffect(() => {

    }, [botel])
    const handeledit = (id) => {
        dispatch(edit())
        navigate(`/Fromsaga/${id}`);

    }
    const handeldelt = (id) => {
        dispatch(delt(id))

    }
    const handelcler = () => {
        dispatch(clear(record))

    }
    const handelsave = () => {
        dispatch()
    }
    return (
        <>
            {
                record ?

                    (
                        <div>
                            <Table striped bordered hover size="sm">


                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Last</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th colSpan={3}>Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        record.map((item, id) => {

                                            return (
                                                <tr key={id}>
                                                    <td>{item.name}</td>
                                                    <td>{item.last}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td> <Button variant="dark" onClick={() => handeledit(id)}  >Edit</Button></td>
                                                    <td><Button variant="dark" onClick={() => handeldelt(id)} >Delt</Button></td>
                                                    <td><Button variant='dark' onClick={() => handelsave(id)}>Save</Button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>)
                    : (
                        <div><p1>data not found</p1></div>
                    )
            }
            <Button variant="success" onClick={() => handelcler()}>Clearall</Button>

        </>
    )
}


export default Tabel