import { BsArrowUpRight } from "react-icons/bs";

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
      <div className="dark:group-hover:bg-stone-900/75 group-hover:bg-gray-100/75 rounded-md pl-36 py-4">
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
        <p>{description}</p>
      </div>
    </a>
  );
}
