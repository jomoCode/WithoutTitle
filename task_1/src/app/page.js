"use client";

import { NotebookPen, Save } from "lucide-react";
import { Card } from "../../Components/card";
import Image from "next/image";

// Dummy data
const loremLines = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  "Nisi ut aliquip ex ea commodo consequat.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
];

const cardsData = [
  {
    hashTags: ["gaming", "streamer", "event"],
    profile_name: "JayTheStreamer",
    user_title: "Twitch Partner",
    description: [
      "Looking for a skilled streamer to host weekend events.",
      "High engagement audience required.",
    ],
    status: "Pending review",
    profile_image:
      "https://cdn.pixabay.com/photo/2016/05/05/18/03/coupe-1374448_1280.jpg",
    header_bg:
      "https://i.pinimg.com/originals/5d/fe/37/5dfe3780dcb708aad9c6f21df3b70136.jpg",
    title: "Weekend Event Streamer Needed",
    budget_status: "Negotiable",
    acceptor_status: "Waiting for applicants",
    time_ago: "3 hours ago",
    onView: () => console.log("Viewing card 1"),
  },

  {
    hashTags: ["coding", "software", "remote"],
    profile_name: "MTech Inc.",
    user_title: "HR Manager",
    description: [
      "We need a React developer for a 2-month contract.",
      "Must know Tailwind and Firebase.",
    ],
    status: "Urgent",
    profile_image:
      "https://cdn.pixabay.com/photo/2016/05/05/18/03/coupe-1374448_1280.jpg",
    header_bg:
      "https://img.freepik.com/premium-photo/white-gradient-background_23-2149327814.jpg",
    title: "React Engineer Contract",
    budget_status: "$600/week",
    acceptor_status: "5 applicants",
    time_ago: "1 day ago",
    onView: () => console.log("Viewing card 2"),
  },

  {
    hashTags: ["marketing", "influencer", "brand"],
    profile_name: "GlowBrand",
    user_title: "Influencer Manager",
    description: [
      "Seeking a micro-influencer to promote new skincare kit.",
      "Content style must be aesthetic/minimal.",
    ],
    status: "Open",
    profile_image:
      "https://cdn.pixabay.com/photo/2016/05/05/18/03/coupe-1374448_1280.jpg",
    header_bg:
      "https://img.freepik.com/premium-photo/soft-white-curtains-background-graphic-design-wallpaper_226189-17375.jpg",
    title: "Brand Influencer Needed",
    budget_status: "Agreed",
    acceptor_status: "No acceptor yet",
    time_ago: "2 weeks ago",
    onView: () => console.log("Viewing card 3"),
  },
  {
    hashTags: ["marketing", "influencer", "brand"],
    profile_name: "GlowBrand",
    user_title: "Influencer Manager",
    description: [
      "Seeking a micro-influencer to promote new skincare kit.",
      "Content style must be aesthetic/minimal.",
    ],
    status: "Open",
    profile_image:
      "https://cdn.pixabay.com/photo/2016/05/05/18/03/coupe-1374448_1280.jpg",
    header_bg:
      "https://img.freepik.com/premium-photo/soft-white-curtains-background-graphic-design-wallpaper_226189-17375.jpg",
    title: "Brand Influencer Needed",
    budget_status: "Agreed",
    acceptor_status: "No acceptor yet",
    time_ago: "2 weeks ago",
    onView: () => console.log("Viewing card 3"),
  },
];

let number_of_request;

export default function cardHome() {
  return (
    <main className="flex flex-col p-5 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Top left image */}
        <div className="transition-transform duration-300 hover:scale-105 hover:rotate-2">
          <Image
            src={"/organize.png"}
            alt="side image"
            width={300}
            height={300}
            className="drop-shadow-lg"
          />
        </div>

        {/* Top right text */}
        <div className="flex flex-col justify-end items-end">
          {/* Title and icon */}
          <div className="w-full flex items-center justify-end gap-1 font-medium whitespace-nowrap mb-4 group cursor-pointer">
            <h1 className="text-right text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-amber-500 group-hover:scale-105">
              Requests
            </h1>
            <Save
              size={20}
              color="blue"
              className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </div>

          <div className="text-right p-2  text-gray-900 dark:text-white space-y-1 rounded-md transition-all duration-300 hover:scale-[1.02]">
            {loremLines.map((content, index) => (
              <div key={index} className="text-sm">{content}</div>
            ))}
          </div>

          {/* Request submission */}
          <div className="px-3 py-2 flex rounded-lg w-fit justify-end items-center gap-2 transition-all duration-300 hover:bg-amber-500 hover:text-gray-900 bg-gray-300 dark:bg-gray-700/40 text-gray-900 dark:text-white cursor-pointer mt-2 hover:scale-105 hover:shadow-lg group">
            <span className="font-medium">Submit a request</span>
            <NotebookPen
              size={20}
              className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center mt-8 mb-2 gap-4">
        <div className="px-3 py-2 font-bold flex items-center text-gray-900 dark:text-white bg-white dark:bg-gray-900 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 border border-gray-200 dark:border-gray-800">
          <span>Request registered</span>
          <span className="ml-2 text-amber-500">{number_of_request ?? 6}</span>
          <div className="bg-amber-500 size-[10px] ml-2 rounded-full animate-pulse shadow-lg shadow-amber-500/50" />
        </div>

        <div className="px-3 py-2 font-bold flex justify-end items-center gap-2 text-gray-900 dark:text-white transition-all duration-300 hover:text-amber-500 cursor-pointer bg-white dark:bg-gray-900 rounded-lg hover:shadow-md hover:scale-105 border border-gray-200 dark:border-gray-800 group">
          <span>Latest requests</span>
          <Save
            size={20}
            className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Profile cards */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10">
        {cardsData.map((card, index) => (
          <div 
            key={index}
            className="transition-transform duration-300 hover:scale-[1.02]"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Card {...card} />
          </div>
        ))}
      </div>
    </main>
  );
}