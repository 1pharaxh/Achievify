import GitHubCalendar from "react-github-contribution-calendar";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { GlobeIcon } from "@radix-ui/react-icons";
import { Task } from "gantt-task-react";

const values = {
  "2016-06-23": 10,
  "2016-06-26": 2,
  "2016-06-27": 3,
  "2016-06-28": 4,
  "2016-06-29": 4,
};
const until = "2016-06-30";

const weekLabelAttributes = {}; // Add your attributes here
const monthLabelAttributes = {}; // Add your attributes here
const panelAttributes = {}; // Add your attributes here
type Props = {
  tasksList: Task[];
};

const ProjectCompletionCard = ({ tasksList }: Props) => {
  const [values, setValues] = React.useState({});
  const [until, setUntil] = React.useState("2016-06-30");
  useEffect(() => {
    let temp = {};
    tasksList.forEach((task) => {
      //@ts-ignore
      if (
        task.progress === 100 &&
        //@ts-ignore
        temp[task.start?.toISOString().split("T")[0]] === undefined
      ) {
        //@ts-ignore
        temp[task.start?.toISOString().split("T")[0]] = 1;
      } else {
        //@ts-ignore
        temp[task.start?.toISOString().split("T")[0]] += 1;
      }
    });
    tasksList.forEach((task) => {
      if (task.end?.toISOString().split("T")[0] > until) {
        setUntil(task.end?.toISOString().split("T")[0]);
      }
    });
    setValues(temp);
    console.log(temp);
  }, [tasksList]);
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col gap-1.5">
          <CardTitle>Task HeatMap</CardTitle>
          <CardDescription>View your task completion heatmap.</CardDescription>
        </div>
        <GlobeIcon className="w-5 h-5" />
      </CardHeader>
      <CardContent>
        <GitHubCalendar
          weekLabelAttributes={weekLabelAttributes}
          monthLabelAttributes={monthLabelAttributes}
          panelAttributes={panelAttributes}
          values={values}
          until={until}
        />
      </CardContent>
    </Card>
  );
};
export default ProjectCompletionCard;
