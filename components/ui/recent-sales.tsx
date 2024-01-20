import { Task } from "gantt-task-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ScrollArea } from "./scroll-area";
import { Button } from "./button";
import { CheckIcon, Cross1Icon, Pencil1Icon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";

export function RecentSales({
  tasks,
  tabValue,
  setTasks,
}: {
  tasks: Task[];
  tabValue: string;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
  const changeProgress = (id: string) => {
    let temp = [...tasks];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        if (temp[i].progress === 45) temp[i].progress = 100;
        if (temp[i].progress === 0) temp[i].progress = 45;
        if (temp[i].progress === 100) temp[i].progress = 0;
        break;
      }
    }
    setTasks(temp);
  };
  const [tasksList, setTasksList] = React.useState<Task[]>([]);
  useEffect(() => {
    let temp = [...tasks];
    if (tabValue === "Completed") {
      temp = temp.filter((task) => task.progress === 100);
    } else if (tabValue === "In Progress") {
      temp = temp.filter((task) => task.progress === 45);
    } else if (tabValue === "Not Started") {
      temp = temp.filter((task) => task.progress === 0);
    }
    setTasksList(temp);
  }, [tasks, tabValue]);
  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-8">
        {tasksList.map((task) => (
          <div key={task.id} className="flex items-center">
            <Avatar className="h-9 w-9">
              <AvatarFallback>{task.name[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{task.name}</p>
              <p className="text-sm text-muted-foreground">
                {task.start.toLocaleDateString()} -{" "}
                {task.end.toLocaleDateString()}
              </p>
            </div>
            <div className="ml-auto flex items-center justify-center gap-4">
              <div
                className={`font-medium
              ${tabValue === "Completed" ? "text-green-500" : ""}
              ${tabValue === "In Progress" ? "text-yellow-500" : ""}
              ${tabValue === "Not Started" ? "text-red-500" : ""}
              `}
              >
                {tabValue}
              </div>
              <div>
                <Button
                  variant="outline"
                  onClick={() => {
                    changeProgress(task.id);
                  }}
                >
                  {task.progress === 0 ? (
                    <CheckIcon className="w-5 h-5" />
                  ) : (
                    <Cross1Icon className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
