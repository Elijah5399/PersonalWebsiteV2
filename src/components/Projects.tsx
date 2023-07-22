"use client";
import Project from "./Project";
import { useState, useCallback, useEffect } from "react";
import { Octokit } from "@octokit/core";
import { InfinitySpin } from "react-loader-spinner";
import { RiEmotionSadLine } from "react-icons/ri";

//Use octokit to increase the API rate limit
const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_AUTH_KEY });
const allReposURL = "/user/repos?sort=updated&direction=desc";
const specificRepoURL = `/repos/${process.env.NEXT_PUBLIC_GITHUBUSERNAME}`;

export default function Projects({ numProjects }: { numProjects: number }) {
  //numProjects is the number of projects we retrieve from GitHub
  const [projectsArray, setProjectsArray] = useState<any[]>([]);
  const [retrieved, setRetrieved] = useState<boolean>(false);
  const [errors, setErrors] = useState("");
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
          //console.log("pushing data: " + JSON.stringify(response.data));
        }
      } catch (error: any) {
        setRetrieved(true);
        setErrors(error.message);
        console.error(error.message);
      }
      // setting projectArray
      setProjectsArray(updList);
      setRetrieved(true);
    } catch (error: any) {
      setRetrieved(true);
      setErrors(error.message);
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div>
      {!retrieved && (
        <div className="flex flex-col items-center py-4">
          <div className="pl-24">
            <InfinitySpin width="300" />
          </div>
          <p className="inline">Fetching projects from GitHub...</p>
        </div>
      )}
      {errors && (
        <div className="flex flex-col items-center py-12">
          <RiEmotionSadLine size={40} className="text-black" />
          <p className="pt-4">
            Oops! Something went wrong when loading projects from GitHub. Try
            again later!
          </p>
        </div>
      )}
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
    </div>
  );
}
