import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";
import { Wrapper, Title, TaskBlock, TaskTitle, TaskStatus } from "./TaskPage.styled";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector(selectTasks).find((task) => String(task.id) === id);

  return (
    <Wrapper>
      <Title>Szczegóły zadania</Title>
      {task ? (
        <>
          <TaskBlock>
            <TaskTitle>{task.content}</TaskTitle>
          </TaskBlock>
          <TaskBlock>
            <TaskStatus>
              <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
            </TaskStatus>
          </TaskBlock>
        </>
      ) : (
        <TaskBlock>
          <TaskTitle>Nie znaleziono takiego zadania 😕</TaskTitle>
        </TaskBlock>
      )}
    </Wrapper>
  );
};

export default TaskPage;