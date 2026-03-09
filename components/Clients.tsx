"use client";

import React from "react";

import { achievements, techStack } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="achievements" className="py-20">
      <h1 className="heading">
        Achievements &
        <span className="text-orange"> learning journey</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={achievements}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {techStack.map((tech) => (
            <React.Fragment key={tech.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 items-center">
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="md:w-10 w-5"
                />
                <span className="text-white-100 text-sm md:text-base font-medium">
                  {tech.name}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
