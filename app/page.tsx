"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import GantCard from "@/components/ui/GantCard";
import TaskListCard from "@/components/ui/TaskListCard";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <Button variant={"outline"}>
            <PlusIcon className="w-5 h-5" />
          </Button>
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
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <GantCard />
            <TaskListCard />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
