"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import GantCard from "@/components/ui/GantCard";
import TaskListCard from "@/components/ui/TaskListCard";

import AddTaskButton from "@/components/ui/AddTaskButton";
import { useEffect, useState } from "react";
import { Task } from "gantt-task-react";
import ProjectCompletionCard from "@/components/ui/ProjectCompletionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [tasksList, setTasksList] = useState<Task[]>([]);
  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard 👀</h2>
          <p className="text-gray-500 text-md">
            Welcome to your dashboard, here you can see the progress of your
            projects
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <AddTaskButton taskList={tasksList} setTasksList={setTasksList} />
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Settings
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 ">
            <ProjectCompletionCard tasksList={tasksList} />
            <TaskListCard setTasks={setTasksList} tasks={tasksList} />
          </div>
          <GantCard tasks={tasksList} />
        </TabsContent>
      </Tabs>
    </main>
  );
}
