"use client";
import { Octokit } from "@octokit/core";
import { BsArrowUpRight } from "react-icons/bs";

//Use octokit to increase the API rate limit
const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_AUTH_KEY });

function dateConverter(init: string): string {
  const date = new Date(init);
  const nowdate = new Date();
  const diff = nowdate.getTime() - date.getTime();
  const hours = Math.trunc(diff / 1000 / 60 / 60);

  if (hours < 24) {
    if (hours < 1) return "just now";
    let measurement = hours === 1 ? "hour" : "hours";
    return `${hours.toString()} ${measurement} ago`;
  } else {
    const options = { day: "numeric", month: "long", year: "numeric" } as const;
    const time = new Intl.DateTimeFormat("en-US", options).format(date);
    return `on ${time}`;
  }
}

export default function Project({
  title,
  description,
  projectLink,
  langLink,
  date,
}: {
  title: string;
  description: string;
  projectLink: string;
  langLink: string;
  date: string;
}) {
  return (
    <a href={projectLink} className="group">
      <div className="dark:group-hover:bg-stone-900/75 group-hover:bg-emerald-100/75 rounded-md py-4 grid grid-cols-6">
        <div className="col-start-1 col-end-2 pr-4 pt-1">
          <p className="text-sm">Last updated: {dateConverter(date)}</p>
        </div>
        <div className="col-span-5 col-end-7">
          <span className="group-hover:text-emerald-300 text-2xl font-semibold">
            {title}{" "}
            <span>
              <BsArrowUpRight
                size={15}
                className="group-hover:text-emerald-400 dark:text-white text-black dark:group-hover:text-emerald-400 inline-block ml-1 mb-1
              group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </span>
          <p>
            {description ? description : "No description for this project yet."}
          </p>
        </div>
      </div>
    </a>
  );
}
