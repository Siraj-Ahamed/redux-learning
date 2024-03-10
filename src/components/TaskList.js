import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useSelector, useDispatch } from "react-redux";
import { selectedTask, removeTaskFromList } from "../slices/taskSlices";

const TaskList = () => {
    const { taskList } = useSelector((state) => state.tasks);

    const dispatch = useDispatch();

    function updateTask(task) {
        setModalShow(true);
        console.log("selected taks: ", task);
        dispatch(selectedTask(task));
    }

    function deleteTask(task) {
        console.log("Deleted Task: ",task);
        dispatch(removeTaskFromList(task))
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
                    {taskList &&
                        taskList.map((task, index) => {
                            return (
                                <tr className="text-center" key={task.id}>
                                    <td>{index + 1}</td>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                    <td>
                                        <Button
                                            className="mx-3"
                                            variant="primary"
                                            onClick={() => updateTask(task)}
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </Button>
                                        <Button
                                            className="mx-3"
                                            variant="primary"
                                            onClick={() => deleteTask(task)}
                                        >
                                            <i className="bi bi-trash"></i>
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
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
