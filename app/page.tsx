"use client";
import {
  Gantt,
  Task,
  EventOption,
  StylingOption,
  ViewMode,
  DisplayOption,
} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import GitHubCalendar from "react-github-contribution-calendar";
const currentDate = new Date();
const values = {
  "2016-06-23": 1,
  "2016-06-26": 2,
  "2016-06-27": 3,
  "2016-06-28": 4,
  "2016-06-29": 4,
};
const until = "2016-06-30";

const tasks: Task[] = [
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    name: "Some Project",
    id: "ProjectSample",
    progress: 25,
    type: "project",
    hideChildren: false,
    displayOrder: 1,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2, 12, 28),
    name: "Idea",
    id: "Task 0",
    progress: 45,
    type: "task",
    project: "ProjectSample",
    displayOrder: 2,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
    name: "Research",
    id: "Task 1",
    progress: 25,
    dependencies: ["Task 0"],
    type: "task",
    project: "ProjectSample",
    displayOrder: 3,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
    name: "Discussion with team",
    id: "Task 2",
    progress: 10,
    dependencies: ["Task 1"],
    type: "task",
    project: "ProjectSample",
    displayOrder: 4,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    name: "Developing",
    id: "Task 3",
    progress: 2,
    dependencies: ["Task 2"],
    type: "task",
    project: "ProjectSample",
    displayOrder: 5,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    name: "Review",
    id: "Task 4",
    type: "task",
    progress: 70,
    dependencies: ["Task 2"],
    project: "ProjectSample",
    displayOrder: 6,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    name: "Release",
    id: "Task 6",
    progress: currentDate.getMonth(),
    type: "milestone",
    dependencies: ["Task 4"],
    project: "ProjectSample",
    displayOrder: 7,
  },
  {
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
    name: "Party Time",
    id: "Task 9",
    progress: 0,
    isDisabled: true,
    type: "task",
  },
];

const weekLabelAttributes = {}; // Add your attributes here
const monthLabelAttributes = {}; // Add your attributes here
const panelAttributes = {}; // Add your attributes here

export default function Home() {
  return (
    <main className="p-10">
      <Gantt tasks={tasks} columnWidth={100} listCellWidth="100px" />
      <GitHubCalendar
        weekLabelAttributes={weekLabelAttributes}
        monthLabelAttributes={monthLabelAttributes}
        panelAttributes={panelAttributes}
        values={values}
        until={until}
      />
    </main>
  );
}
