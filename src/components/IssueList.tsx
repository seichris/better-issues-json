import Link from "next/link";
import { truncateText } from "../utils/text";
import { getFirstMatchingLabel } from "../utils/issue";

const IssueList = (props) => {
  // function reformatDate(fullDate) {
  //   const date = new Date(fullDate);
  //   return date.toDateString().slice(4);
  // }

  return (
    <>
      <ul>
        {props.issues.length > 0 &&
          props.issues.map(
            (issue) =>
              !issue.pull_request && (
                <Link
                  key={issue.id}
                  href={{ pathname: `/issue/${issue.number}` }}
                >
                  <a>
                    <li className="mb-6">
                      <div className="block text-sm font-medium">
                        {truncateText(issue.title, 200)}
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-gray-400">
                        <div className="inline-flex font-medium uppercase">
                          {getFirstMatchingLabel(issue.labels, "type:")}
                        </div>
                        <div className="inline-flex">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="align-middle">
                            {issue.likesCount || 0}
                          </span>
                        </div>
                      </div>
                    </li>
                  </a>
                </Link>
              )
          )}
      </ul>
    </>
  );
};

export default IssueList;
