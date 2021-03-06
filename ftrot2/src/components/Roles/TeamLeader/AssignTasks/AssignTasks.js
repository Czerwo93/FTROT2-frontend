import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { uuid } from "uuidv4";
import TasksColumn from "./TasksRow/TasksColumn/TasksColumn";
import TasksRow from "./TasksRow/TasksRow";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import styled from "styled-components";
import { Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getColumns,
  setNewColumnForTasks,
} from "../../../../actions/TeamLeaderActions/assignTasksActions";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  margin: 10px 0 0 10px;
`;

const StyledMainContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledUnassignedTasksContainer = styled(Paper)`
  margin: 10px;
  height: 100%;
  width: 15%;
`;

const StyledEngineersContainer = styled.div`
  width: 100%;
  height: calc(100vh - 300px);

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTest = styled.div`
  width: 100%;
  height: 80vh;
`;

const AssignTasks = () => {
  const columnsFromSelector = useSelector((state) => state.teamLeader.columns);
  const columns = JSON.parse(JSON.stringify(columnsFromSelector));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColumns());
  }, []);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    dispatch(setNewColumnForTasks(source, destination, columns));
  };

  const [formats, setFormats] = useState(() => [
    "showUnassigneTasks",
    "showEngineerProfile",
  ]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result)}>
      <StyledTest>
        <StyledToggleButtonGroup
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="showUnassigneTasks" aria-label="bold">
            Show unassgined tasks
          </ToggleButton>
          <ToggleButton value="showEngineerProfile" aria-label="italic">
            Show engineer profile
          </ToggleButton>
        </StyledToggleButtonGroup>

        <StyledMainContainer>
          {formats.find((element) => element === "showUnassigneTasks") && (
            // <StyledUnassignedTasksContainer>
            <TasksColumn
              columnId={"unassignedTasks"}
              tasks={columns?.unassignedTasks}
              dayName={"unassigned tasks"}
              isUnassignedTasks={true}
            />
            // </StyledUnassignedTasksContainer>
          )}
          <StyledEngineersContainer>
            {columns.engineers?.map((engineer) => {
              return (
                <TasksRow
                  key={engineer.id}
                  engineer={engineer}
                  isProfileOpen={formats.find(
                    (element) => element === "showEngineerProfile"
                  )}
                />
              );
            })}
          </StyledEngineersContainer>
        </StyledMainContainer>
      </StyledTest>
    </DragDropContext>
  );
};

export default AssignTasks;
