import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./UpdateTask";

const TaskList = () => {
    function updateTask() {
        console.log("Updated Task");
        setModalShow(true)
    }

    function deleteTask() {
        console.log("Deleted Task");
    }

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>
                            <Button
                                className="mx-3"
                                variant="primary"
                                onClick={() => updateTask()}
                            >
                                <i className="bi bi-pencil-square"></i>
                            </Button>
                            <Button
                                className="mx-3"
                                variant="primary"
                                onClick={() => deleteTask()}
                            >
                                <i className="bi bi-trash"></i>
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default TaskList;
