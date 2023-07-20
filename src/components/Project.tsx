import { HiExternalLink } from "react-icons/hi";

export default function Project({
  title,
  imageLink,
  description,
  projectLink,
  skills,
}: {
  title: string;
  imageLink: string;
  description: string;
  projectLink: string;
  skills: string[];
}) {
  return (
    <a href={projectLink} className="group">
      <div className="dark:group-hover:bg-stone-900/75 group-hover:bg-gray-100/75 rounded-md pl-24 pt-1">
        <h1 className="group-hover:text-emerald-300 text-2xl font-semibold">
          {title}{" "}
          <span>
            <HiExternalLink
              size={20}
              className="hover:text-emerald-400 dark:text-white text-black dark:hover:text-emerald-400"
            />
          </span>
        </h1>
        <p>{description}</p>
      </div>
    </a>
  );
}
