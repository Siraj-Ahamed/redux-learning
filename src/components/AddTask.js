import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [description, setDescripton] = useState("");

    function addTask (e) {
        e.preventDefault()
        console.log({title, description});
    }

    return (
       <section className="my-5">
         <Form onSubmit={addTask}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="Enter Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Task Description</Form.Label>
                <Form.Control type="text" placeholder="Task Description" value={description} onChange={(e) => setDescripton(e.target.value)} />
            </Form.Group>

            <div className="text-end">
                <Button variant="primary" type="submit" >
                    ADD
                </Button>
            </div>
        </Form>
       </section>
    );
};

export default AddTask;
