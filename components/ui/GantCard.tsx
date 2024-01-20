import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "./card";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { Gantt, ViewMode } from "gantt-task-react";
import { tasks } from "@/app/tasks";

type Props = {};

export default function GantCard({}: Props) {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
  return (
    <Card className="col-span-4">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex flex-col gap-1.5">
          <CardTitle>Gantt Chart</CardTitle>
          <CardDescription>
            This chart shows the progress of the project.
          </CardDescription>
        </div>
        <Tabs defaultValue="Day" className="space-y-4">
          <TabsList>
            <TabsTrigger onClick={() => setView(ViewMode.Hour)} value="Hour">
              Hour
            </TabsTrigger>
            <TabsTrigger onClick={() => setView(ViewMode.Day)} value="Day">
              Day
            </TabsTrigger>
            <TabsTrigger onClick={() => setView(ViewMode.Week)} value="Week">
              Week
            </TabsTrigger>
            <TabsTrigger onClick={() => setView(ViewMode.Month)} value="Month">
              Month
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="pl-2">
        <Gantt
          viewMode={view}
          tasks={tasks}
          columnWidth={100}
          listCellWidth=""
        />
      </CardContent>
    </Card>
  );
}
