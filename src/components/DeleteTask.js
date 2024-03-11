import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { removeTaskFromList } from "../slices/taskSlices";
import { useSelector, useDispatch } from "react-redux";

const DeleteTask = ({ show, onHide }) => {
    const { selectedTask } = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");

    function onDelete() {
        onHide()
        console.log("logging delete task:", selectedTask);
        dispatch(removeTaskFromList(selectedTask))
    }

    useEffect(() => {
        setTitle(selectedTask.title);
    }, [selectedTask]);

    return (
        <>
            <Modal show={show} onHide={onHide} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this title <b>{title}</b>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={onDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default DeleteTask;
