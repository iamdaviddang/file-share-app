import React from "react";
import Constant from "../_utils/Constant";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            <span className="text-primary">Upload, Save</span> and easily{" "}
            <span className="text-primary">Share</span>
            your files in one place
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-500">
            {Constant.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/files">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
