import { takeEvery, select } from "redux-saga/effects";
import { addTask, toggleTaskDone, removeTask, setTasks, selectTasks } from "./tasksSlice";

function* saveTasksInLocalStorage() {
    const tasks = yield select(selectTasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function* tasksSaga() {
    yield takeEvery([addTask.type, toggleTaskDone.type, removeTask.type, setTasks.type], saveTasksInLocalStorage);
}