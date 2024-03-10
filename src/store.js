import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlices";

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
});
