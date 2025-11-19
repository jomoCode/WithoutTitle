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


export default  HomePage = () => {
  return (
    <main className="flex flex-col  p-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Top left image */}
        <Image
          src={"/organize.png"}
          alt="side image"
          width={300}
          height={300}
        />

        {/* Top left text */}
        <div className="flex flex-col justify-end items-end">
          {/* Title and icon */}

          <div className="w-full flex items-center justify-end gap-1 font-medium whitespace-nowrap mb-4 group cursor-pointer">
            <h1 className="text-right text-2xl font-bold transition-colors duration-300 group-hover:text-amber-400">
              Requests
            </h1>
            <Save
              size={20}
              color="blue"
              className="transition-transform duration-300 group-hover:rotate-12"
            />
          </div>

          <div className="text-right p-2 bg-gray-950/25 space-y-1 rounded-md transition-all duration-300 hover:bg-gray-950/40 hover:shadow-md">
            {loremLines.map((content, index) => (
              <div key={index}>{content}</div>
            ))}
          </div>
          {/* Request submission */}
          <div className="px-2 py-1 flex rounded-lg w-fit justify-end items-center gap-1 transition-colors duration-300 hover:bg-gray-700 bg-gray-700/40 cursor-pointer mt-2">
            Submit a request
            <NotebookPen
              size={20}
              className="transition-transform duration-300 hover:rotate-12"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between items-center mt-3">
        <div className="px-2 py-1 font-bold flex items-center">
          Request registered {number_of_request ?? 6}
          <div className=" bg-yellow-500 size-[10px] ml-2 rounded-full" />
        </div>

        <div className="px-2 py-1 font-bold flex justify-end items-center gap-1 transition-colors duration-300 hover:text-amber-400 cursor-pointer">
          Latest requests
          <Save
            size={20}
            className="transition-transform duration-300 hover:rotate-12"
          />
        </div>
      </div>
      {/* Profile cards */}
      <div className="flex flex-row justify-center items-center w-full gap-10">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </main>
  );
}
