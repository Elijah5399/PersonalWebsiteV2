"use client";
import Project from "./Project";
import { useState, useCallback, useEffect } from "react";
import { Octokit } from "@octokit/core";

//Use octokit to increase the API rate limit
const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_AUTH_KEY });
const allReposURL = "/user/repos?sort=updated&direction=desc";
const specificRepoURL = `/repos/${process.env.NEXT_PUBLIC_GITHUBUSERNAME}`;

export default function Projects({ numProjects }: { numProjects: number }) {
  //numProjects is the number of projects we retrieve from GitHub
  const [projectsArray, setProjectsArray] = useState<any[]>([]);
  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await octokit.request(allReposURL);
      // slicing to the length
      repoList = [...response.data.slice(0, numProjects)]; //set to 4 projects retrieved
      // adding specified repos
      let updList = [];
      try {
        for (let repoName of repoList) {
          const response = await octokit.request(
            `${specificRepoURL}/${repoName.name}`
          );
          updList.push(response.data);
          console.log("pushing data: " + JSON.stringify(response.data));
        }
      } catch (error: any) {
        console.error(error.message);
      }
      console.log("repoList length is: " + repoList.length);
      // setting projectArray
      setProjectsArray(updList);
    } catch (error: any) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <>
      {projectsArray.map((proj) => (
        <Project
          key={proj.name}
          title={proj.name}
          description={proj.description}
          projectLink={proj.svn_url}
          langLink={proj.languages_url}
          date={proj.pushed_at}
        />
      ))}
    </>
  );
}
