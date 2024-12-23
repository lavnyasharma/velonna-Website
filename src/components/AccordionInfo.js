"use client";

import { Disclosure } from "@/app/headlessui";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FC } from "react";




const AccordionInfo = ({
  panelClassName = "p-4 pt-3 last:pb-0 text-slate-600 text-sm dark:text-slate-300 markdown-content leading-6",
  data = "",
}) => {
  return (
    <div className="w-full markdown-content rounded-2xl space-y-2.5">
      <style jsx>{`
        .markdown-content ul {
          list-style-type: none; /* Remove default bullet points */
          padding-left: 0; /* Remove default left padding */
          margin: 0; /* Remove any default margin */
        }

        .markdown-content li {
          padding: 5px 0; /* Add spacing between list items */
          font-size: 1.1rem; /* Increase font size for better readability */
          line-height: 1.6; /* Increase line height for readability */
        }

        /* Add a custom bullet if needed */
        .markdown-content ul.custom-bullets li::before {
          content: "\\2022"; /* Unicode for bullet */
          font-size: 1.5em;
          color: #3498db; /* Set bullet color */
          margin-right: 10px; /* Add space between bullet and text */
        }

        /* Add custom hover effect for list items */
        .markdown-content li:hover {
          background-color: #f1f1f1;
          cursor: pointer;
        }

        /* You can also add styles for nested lists */
        .markdown-content ul ul {
          padding-left: 20px; /* Indent nested lists */
          list-style-type: square; /* Change bullet style for nested lists */
        }
      `}</style>
      {/* ============ */}
      {data.map((item, index) => {
        return (
          <Disclosure key={index} defaultOpen={index < 2}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 ">
                  <span>{item.name}</span>
                  {!open ? (
                    <PlusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  ) : (
                    <MinusIcon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel
                  className={panelClassName}
                  as="div"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}

      {/* ============ */}
    </div>
  );
};

export default AccordionInfo;
