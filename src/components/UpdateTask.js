import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const MyVerticallyCenteredModal = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescripton] = useState("");

    const updateTask = () => {
        props.onHide();
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Task</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Task Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Task Description"
                            value={description}
                            onChange={(e) => setDescripton(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <div className="text-end">
                    <Button
                        variant="primary"
                        type="submit"
                        onClick={(e) => updateTask(e)}
                    >
                        UPDATE TASK
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default MyVerticallyCenteredModal;
