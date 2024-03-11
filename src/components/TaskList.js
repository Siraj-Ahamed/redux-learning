import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useSelector, useDispatch } from "react-redux";
import { selectedTask } from "../slices/taskSlices";
import DeleteTask from "./DeleteTask";

const TaskList = () => {
    const { taskList } = useSelector((state) => state.tasks);

    const dispatch = useDispatch();

    function updateTask(task) {
        setUpdateModalShow(true);
        console.log("selected taks: ", task);
        dispatch(selectedTask(task));
    }

    function deleteTask(task) {
        setDeleteModalShow(true);
        console.log("Deleted Task: ",task);
        dispatch(selectedTask(task));
        // dispatch(removeTaskFromList(task))
    }

    const [updateModalShow, setUpdateModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);

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
                show={updateModalShow}
                onHide={() => setUpdateModalShow(false)}
            />

            <DeleteTask 
                 show={deleteModalShow}
                 onHide={() => setDeleteModalShow(false)}
            />
        </>
    );
};

export default TaskList;
