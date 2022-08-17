import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import array from './array-data';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Edit() {

    // Here usestate has been used in order
    // to set and get values from the jsx
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [id, setid] = useState('');

    // used for navigation with logic in javascript
    let history = useNavigate()

    // getting an index of an entry with an id
    var index = array.map(function (e) { return e.id; }).indexOf(id);

    // function for handling the edit and
    // pushing changes of editing/updating
    const handelSubmit = (e) => {
        e.preventDefault(); // preventing from reload

        let a = array[index] // getting an index of an array

        // putting the value from the input textfield and
        // replacing it from existing for updation
        a.Name = name
        a.Age = age

        // redirecting to main page
        history('/')
    }


    // Useeffect take care that page will be rendered only once
    useEffect(() => {
        setname(localStorage.getItem('Name'))
        setage(localStorage.getItem('Age'))
        setid(localStorage.getItem('id'))
    }, [])

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '15rem' }}>

                {/* setting a name from the input textfiled */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control value={name}
                        onChange={e => setname(e.target.value)}
                        type="text" placeholder="Enter Name" />
                </Form.Group>

                {/* setting a age from the input textfiled */}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control value={age}
                        onChange={e => setage(e.target.value)}
                        type="text" placeholder="Age" />
                </Form.Group>

                {/* Hadinling an onclick event running an edit logic */}
                <Button
                    onClick={e => handelSubmit(e)}
                    variant="primary" type="submit" size="lg">
                    Update
                </Button>

                {/* Redirecting to main page after editing */}
                <Link className="d-grid gap-2" to='/'>
                    <Button variant="warning" size="lg">Home</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Edit
