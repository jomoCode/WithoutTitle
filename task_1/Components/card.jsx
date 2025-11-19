"use client";
import Image from "next/image";
import {
  SquarePen,
  ChevronRight,
  Tag,
  AlertCircleIcon,
  Banknote,
  TagsIcon,
  Calendar,
  ExternalLink,
} from "lucide-react";

const Card = ({
  hashTags,
  profile_name = "Profile name",
  user_title = "MTA Owner",
  description = ["all about you"],
  status = "Not done",
  profile_image = "https://cdn.pixabay.com/photo/2016/05/05/18/03/coupe-1374448_1280.jpg",
}) => {
  return (
    <div className="bg-gray-900 border-2 border-gray-600 w-72 h-[560px] rounded-lg overflow-hidden">
      {/* Card header */}
      {/* profile name */}
      <div
        className="flex justify-center items-end h-[20%] w-full bg-amber-50 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/soft-white-curtains-background-graphic-design-wallpaper_226189-17375.jpg')",
        }}
      >
        <div className="py-1 px-2 bg-gray-900 italic font-bold rounded-md hover:bg-gray-700 text-white text-xs flex justify-center items-center flex-row mb-2">
          <SquarePen size={10} className="text-white/50 mr-2" />
          {profile_name}
        </div>
      </div>
      {/* Card  profile photo &  profile title  */}
      <div className="flex items-center absolute top-20 p-2 rounded-md">
        {/* Profile image */}
        <Image
          src={profile_image}
          width={30}
          height={30}
          alt="profile photo"
          className="w-12 h-12 rounded-full object-cover bg-amber-700"
        />

        {/* Text + icon */}
        <span className="absolute top-8 left-16 flex items-center gap-1 text-white/50 text-sm font-medium whitespace-nowrap">
          <span className="text-xl">»</span>
          <span>{user_title}</span>
        </span>
      </div>
      {/*keeps elements from sliding under absolute elements */}
      <div className="h-6" />
      <main className="p-2">
        <div className="flex items-center justify-end gap-1 text-sm font-medium whitespace-nowrap mb-4">
          <h1 className="text-right font-bold">
            Need a streamer with benefits
          </h1>
          <Tag size={15} color="blue" />
        </div>
        <div className="text-right p-2 bg-gray-950/25 text-xs space-y-1">
          {description.map((content) => (
            <font>{content}</font>
          ))}

          {/* Status */}
          <span className="flex items-center  justify-end gap-1 text-white/50 text-xs font-medium whitespace-nowrap mt-5">
            {status}
            <AlertCircleIcon size={10} />
          </span>
        </div>
        {/* Budget and agreed  */}
        <div className="w-full flex justify-end items-center text-sm mt-3">
          <div className="px-2 py-1 bg-black rounded-md">Agreed</div>
          <div className="px-2 py-1 flex justify-end items-center gap-1">
            Budget <Banknote size={20} />
          </div>
        </div>

        {/* Categories */}
        <span className="p-2 flex justify-end items-center gap-1 text-sm">
          Categories
          <TagsIcon size={20} />
        </span>

        {/* Hashtags */}
        <div className="flex flex-row text-sm justify-end items-center w-full gap-1">
          {hashTags.map((tag, index) => (
            <div
              key={`${tag[1]}_${index}`}
              className="py-1 px-2 bg-gray-800 text-white rounded-xl"
            >
              #{tag}
            </div>
          ))}
        </div>
        <div className="w-full flex justify-between items-center text-xs mt-4">
          <div className="text-amber-400">No acceptor found</div>
          <div className="flex justify-end items-center gap-1">
            2 months ago <Calendar size={10} />
          </div>
        </div>
      </main>
      {/* Footer */}
      <div className="border-t-amber-200 border-t">
        <div
          className="text-lg bg-linear-to-b from-amber-300/40  via-amber-300/15 to-amber-300/5"
          onClick={() => console.log("clicked view")}
        >
          <div className="text-sm flex justify-center items-center gap-1 py-2">
            View <ExternalLink color="yellow" size={15} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
