import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const TaskList = () => {
    function updateTask() {
        console.log("Updated Task");
    }

    function deleteTask() {
        console.log("Deleted Task");
    }
    return (
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
    );
};

export default TaskList;
