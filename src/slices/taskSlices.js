import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: [],
    selectedTask: {},
};

const taskSlices = createSlice({
    name: "taskSlice",
    initialState: initialState,

    //reducer mutating state
    reducers: {
        addTaskToList: (state, action) => {
            const id = Math.random() * 100;
            let task = { ...action.payload, id };
            console.log('task', task);
            state.taskList.push(task);
        },

        removeTaskFromList: (state, action) => {
            state.taskList = state.taskList.filter(
                (task) => task.id !== action.payload.id
            );
        },

        updateTaskInList: (state, action) => {
            state.taskList = state.taskList.map((task) =>
                task.id === action.payload.id ? action.payload : task
            );
        },

        selectedTask: (state, action) => {
            state.selectedTask = action.payload;
        },
    },
});

export const {
    addTaskToList,
    removeTaskFromList,
    updateTaskInList,
    selectedTask,
} = taskSlices.actions;
export default taskSlices.reducer;
