import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import { PlusIcon } from "@radix-ui/react-icons";
import { RecentSales } from "./recent-sales";
import { Separator } from "./separator";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { Task } from "gantt-task-react";

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const TaskListCard = ({ tasks, setTasks }: Props) => {
  const [tabValue, setTabValue] = React.useState<string>("Not Started");
  return (
    <Card className="h-[210px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col gap-1.5">
          <CardTitle>Task List</CardTitle>
          <CardDescription>
            This chart shows the progress of the project.
          </CardDescription>
        </div>

        <Tabs
          onValueChange={(value) => {
            setTabValue(value);
          }}
          defaultValue="Not Started"
          className="space-y-4"
        >
          <TabsList>
            <TabsTrigger value="Completed">Completed</TabsTrigger>
            <TabsTrigger value="In Progress">In Progress</TabsTrigger>
            <TabsTrigger value="Not Started">Not Started</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <Separator className="mb-5" />
      <CardContent>
        <RecentSales tabValue={tabValue} setTasks={setTasks} tasks={tasks} />
      </CardContent>
    </Card>
  );
};
export default TaskListCard;
