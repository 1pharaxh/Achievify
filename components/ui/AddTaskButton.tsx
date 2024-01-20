import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { CalendarIcon, PlusIcon } from "@radix-ui/react-icons";
import { Label } from "./label";
import { Input } from "./input";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar } from "./calendar";
import { Task } from "gantt-task-react";
import { TaskType } from "gantt-task-react/dist/types/public-types";
import { RadioGroup, RadioGroupItem } from "./radio-group";

type Props = {
  setTasksList: React.Dispatch<React.SetStateAction<Task[]>>;
  taskList: Task[];
};

const AddTaskButton = ({ taskList, setTasksList }: Props) => {
  const [date, setDate] = React.useState<Date | undefined>();
  const [endDate, setEndDate] = React.useState<Date | undefined>();
  const [name, setName] = React.useState<string>("");
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const [type, setType] = React.useState<string>();

  const onSubmit = () => {
    // get the values from the form
    let temp = [...taskList];
    if (temp.length === 0 && date && endDate && type) {
      temp.push({
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        start: date,
        end: endDate,
        progress: 0,
        hideChildren: false,
        displayOrder: 1,
        type: type as TaskType,
      });
      setTasksList(temp);
    } else if (temp.length === 1 && date && endDate && type) {
      temp.push({
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        start: date,
        end: endDate,
        progress: 0,
        displayOrder: temp.length + 1,
        type: type as TaskType,
      });
      setTasksList(temp);
    } else if (temp.length > 1 && date && endDate && type) {
      temp.push({
        id: Math.random().toString(36).substr(2, 9),
        name: name,
        start: date,
        end: endDate,
        dependencies: [temp[temp.length - 1].id],
        progress: 0,
        displayOrder: temp.length + 1,
        type: type as TaskType,
      });
      setTasksList(temp);
    }
    // reset the form
    setDate(undefined);
    setEndDate(undefined);
    setName("");
    setType("");
    // close the dialog
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <PlusIcon className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>Add a new task to the project.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(event) => {
                //@ts-ignore
                setName(event.target.value);
              }}
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Start Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  id="username"
                  value="Choose a date"
                  className="col-span-3 flex flex-row items-center justify-between"
                >
                  {date ? date.toLocaleDateString() : "Choose a date"}
                  <CalendarIcon className="w-5 h-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              End Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  id="username"
                  value="Choose a date"
                  className="col-span-3 flex flex-row items-center justify-between"
                >
                  {endDate ? endDate.toLocaleDateString() : "Choose a date"}
                  <CalendarIcon className="w-5 h-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  className="rounded-md border"
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col items-start justify-center px-5 gap-4">
            <Label htmlFor="username" className="text-left">
              Type
            </Label>
            <RadioGroup
              onValueChange={(value) => {
                setType(value);
              }}
              defaultValue="task"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="project" id="r3" />
                <Label htmlFor="r3">Project</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="task" id="r1" />
                <Label htmlFor="r1">Task</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="milestone" id="r2" />
                <Label htmlFor="r2">Milestone</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={onSubmit} type="submit">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AddTaskButton;
