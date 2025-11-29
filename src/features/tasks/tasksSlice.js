import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
    try {
        const tasks = localStorage.getItem("tasks");
        return tasks ? JSON.parse(tasks) : [];
    } catch {
        return [];
    }
};

const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: loadTasksFromLocalStorage().map(t => ({ ...t, done: t.done ?? false })),
        hideDone: false,
    },
    reducers: {
        addTask: (state, { payload: task }) => {
            state.tasks.push({ ...task, done: false });
            saveTasksToLocalStorage(state.tasks);
        },
        toggleTaskDone: (state, { payload: taskId }) => {
            const task = state.tasks.find(t => t.id === taskId);
            if (task) task.done = !task.done;
            saveTasksToLocalStorage(state.tasks);
        },
        removeTask: (state, { payload: taskId }) => {
            state.tasks = state.tasks.filter(t => t.id !== taskId);
            saveTasksToLocalStorage(state.tasks);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        setAllDone: (state) => {
            state.tasks.forEach(t => (t.done = true));
            saveTasksToLocalStorage(state.tasks);
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks.map(t => ({
                id: t.id,
                content: t.content,
                done: t.done ?? false
            }));
            saveTasksToLocalStorage(state.tasks);
        },
    },
});

export const {
    addTask,
    toggleTaskDone,
    removeTask,
    toggleHideDone,
    setAllDone,
    setTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) => selectTasks(state).every(t => t.done);
export const selectIsEveryTaskUndone = (state) => selectTasks(state).every(t => !t.done);