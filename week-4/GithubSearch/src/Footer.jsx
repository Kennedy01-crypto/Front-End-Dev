import React from "react";

export default function Footer() {
  return (
    <div className="w-full text-center py-4 bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-auto">
      <span className="flex flex-col xs:flex-row xs:justify-center xs:items-center xs:gap-2">
        <p>
          &copy; {new Date().getFullYear()} devfinder Clone &mdash; Built by
        </p>
        <a
          href="https://developer-jim-kennedy.vercel.app/"
          title="My Portfolio"
          target="_blank"
        >
          Developer Jim
        </a>
      </span>
    </div>
  );
}
