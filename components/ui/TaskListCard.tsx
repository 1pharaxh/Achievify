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
type Props = {};

const TaskListCard = (props: Props) => {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col gap-1.5">
          <CardTitle>Task List</CardTitle>
          <CardDescription>
            This chart shows the progress of the project.
          </CardDescription>
        </div>

        <Tabs defaultValue="Not Started" className="space-y-4">
          <TabsList>
            <TabsTrigger value="Completed">Completed</TabsTrigger>
            <TabsTrigger value="In Progress">In Progress</TabsTrigger>
            <TabsTrigger value="Not Started">Not Started</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <Separator className="mb-5" />
      <CardContent>
        {/* <GitHubCalendar
        weekLabelAttributes={weekLabelAttributes}
        monthLabelAttributes={monthLabelAttributes}
        panelAttributes={panelAttributes}
        values={values}
        until={until}
      /> */}
        <RecentSales />
      </CardContent>
    </Card>
  );
};
export default TaskListCard;
