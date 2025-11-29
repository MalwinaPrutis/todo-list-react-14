import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
    selectTasks,
    selectHideDone,
    toggleTaskDone,
    removeTask,
} from "../tasksSlice";
import { List, Item, Button, Content, StyledLink } from "./styled";
import { useState } from "react";

const TasksList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    const location = useLocation();

    const [removingTaskId, setRemovingTaskId] = useState(null);

    const params = new URLSearchParams(location.search);
    const query = params.get("szukaj")?.toLowerCase() || "";

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.content.toLowerCase().includes(query);
        const visibleByHideDone = !hideDone || task.done === false;
        return matchesSearch && visibleByHideDone;
    });

    const handleRemove = (taskId) => {
        setRemovingTaskId(taskId);
        setTimeout(() => {
            dispatch(removeTask(taskId));
            setRemovingTaskId(null);
        }, 50);
    };

    return (
        <List>
            {filteredTasks.map(task => {
                const isBeingRemoved = removingTaskId === task.id;
                return (
                    <Item key={task.id}>
                        <Button
                            $toggleDone
                            $done={task.done}
                            $dim={isBeingRemoved}
                            onClick={() => dispatch(toggleTaskDone(task.id))}
                        >
                            {task.done ? "✓" : ""}
                        </Button>
                        <Content $done={task.done}>
                            <StyledLink to={`/zadanie/${task.id}`}>
                                {task.content}
                            </StyledLink>
                        </Content>
                        <Button
                            $remove
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemove(task.id);
                            }}
                        >
                            🗑
                        </Button>
                    </Item>
                );
            })}
        </List>
    );
};

export default TasksList;