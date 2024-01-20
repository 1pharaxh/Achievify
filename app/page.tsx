"use client";
import Link from "next/link";

import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Image from "next/image";
import image1 from "@/public/landing.png";
const page: FC = () => {
  return (
    <>
      <div className="w-screen min-h-screen bg-gradient-to-r from-red-100 to-green-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center">
              <h1 className="mr-3 text-5xl font-semibold">Achievify 👀</h1>
              {/* <UserButton afterSignOutUrl="/" /> */}
            </div>

            <p className="max-w-xl mt-1 text-lg text-slate-600">
              An app to help track your progress on your projects.
            </p>

            <div className="w-full mt-4">
              <Link href="/dashboard">
                <Button>
                  Jump in to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            {/* <Carousel className="w-full mt-4">
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center">
                          <Image
                            src={ImageArray[0]}
                            width={700}
                            height={500}
                            className="rounded-lg h-full w-full mt-4"
                            alt="landing page"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}
            <Image
              src={image1}
              width={700}
              height={500}
              className="rounded-lg h-full w-full mt-4"
              alt="landing page"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
