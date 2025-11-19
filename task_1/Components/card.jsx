"use client";
import Image from "next/image";
import {
  SquarePen,
  Tag,
  AlertCircleIcon,
  Banknote,
  TagsIcon,
  Calendar,
  ExternalLink,
} from "lucide-react";

const Card = ({
  hashTags = ["streamer", "gaming"],
  profile_name = "Profile name",
  user_title = "MTA Owner",
  description = ["all about you"],
  status = "Not done",
  profile_image = "https://cdn.pixabay.com/photo/2016/05/05/18/03/coupe-1374448_1280.jpg",
  header_bg = "https://img.freepik.com/premium-photo/soft-white-curtains-background-graphic-design-wallpaper_226189-17375.jpg",
  title = "Need a streamer with benefits",
  budget_status = "Agreed",
  acceptor_status = "No acceptor found",
  time_ago = "2 months ago",
  onView = () => console.log("clicked view"),
}) => {
  return (
    <div className="bg-gray-900 border-2 border-gray-600 w-72 h-[570px] rounded-lg overflow-hidden transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-400/20 hover:-translate-y-1 relative">
      {/* Card header */}
      <div
        className="flex justify-center items-end h-[20%] w-full bg-amber-50 bg-cover bg-center transition-all duration-300 hover:h-[21%]"
        style={{
          backgroundImage: `url('${header_bg}')`,
        }}
      >
        <div className="py-1 px-2 bg-gray-900 italic font-bold rounded-md hover:bg-amber-500 hover:text-gray-900 transition-all duration-300 text-white text-xs flex justify-center items-center flex-row mb-2 cursor-pointer hover:scale-105">
          <SquarePen
            size={10}
            className="text-white/50 mr-2 group-hover:text-gray-900"
          />
          {profile_name}
        </div>
      </div>

      {/* Card profile photo & profile title */}
      <div className="flex items-center absolute top-20 p-2 rounded-md group">
        <Image
          src={profile_image}
          width={30}
          height={30}
          alt="profile photo"
          className="w-12 h-12 rounded-full object-cover bg-amber-700 transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-amber-400 cursor-pointer"
        />

        <span className="absolute top-8 left-16 flex items-center gap-1 text-white/50 text-sm font-medium whitespace-nowrap transition-colors duration-300 hover:text-amber-400">
          <span className="text-xl">»</span>
          <span>{user_title}</span>
        </span>
      </div>

      <div className="h-6" />

      <main className="p-2 h-full">
        <div className="flex items-center justify-end gap-1 text-sm font-medium whitespace-nowrap mb-4 group cursor-pointer">
          <h1 className="text-right font-bold transition-colors duration-300 group-hover:text-amber-400">
            {title}
          </h1>
          <Tag
            size={15}
            color="blue"
            className="transition-transform duration-300 group-hover:rotate-12"
          />
        </div>

        <div className="text-right p-2 bg-gray-950/25 text-xs space-y-1 rounded-md transition-all duration-300 hover:bg-gray-950/40 hover:shadow-md">
          {description.map((content, index) => (
            <div key={index}>{content}</div>
          ))}

          <span className="flex items-center justify-end gap-1 text-white/50 text-xs font-medium whitespace-nowrap mt-5 transition-colors duration-300 hover:text-amber-400">
            {status}
            <AlertCircleIcon size={10} />
          </span>
        </div>

        <div className="absolute bottom-50 left-0 right-0 px-2">
          <div className="w-full flex justify-end items-center text-sm mt-3">
            <div className="px-2 py-1 bg-black rounded-md transition-all duration-300 hover:bg-amber-500 hover:text-gray-900 hover:scale-105 cursor-pointer">
              {budget_status}
            </div>
            <div className="px-2 py-1 flex justify-end items-center gap-1 transition-colors duration-300 hover:text-amber-400 cursor-pointer">
              Budget{" "}
              <Banknote
                size={20}
                className="transition-transform duration-300 hover:rotate-12"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-40 left-0 right-0 px-2">
          <span className="p-2 flex justify-end items-center gap-1 text-sm transition-colors duration-300 hover:text-amber-400 cursor-pointer">
            Categories
            <TagsIcon
              size={20}
              className="transition-transform duration-300 hover:rotate-12"
            />
          </span>
        </div>

        <div className="absolute bottom-20 left-0 right-0 px-2">
          <div className="flex flex-row text-sm justify-end items-center w-full gap-2 flex-wrap">
            {hashTags.map((tag, index) => (
              <div
                key={`${tag}_${index}`}
                className="py-1 px-2  bg-gray-800 text-white rounded-xl transition-all duration-300 hover:bg-amber-500 hover:text-gray-900 hover:scale-110 cursor-pointer "
              >
                {tag} #
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 px-2">
          <div className="w-full flex justify-between items-center text-xs mt-4">
            <div className="text-amber-400 transition-all duration-300 hover:text-amber-300 hover:scale-105">
              {acceptor_status}
            </div>
            <div className="flex justify-end items-center gap-1 transition-colors duration-300 hover:text-amber-400 cursor-pointer">
              {time_ago} <Calendar size={10} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t-amber-200 border-t absolute bottom-0 left-0 right-0">
        <div
          className="text-lg bg-linear-to-b from-amber-300/40 via-amber-300/15 to-amber-300/5 transition-all duration-300 hover:from-amber-400/60 hover:via-amber-400/30 hover:to-amber-400/10 cursor-pointer"
          onClick={onView}
        >
          <div className="text-sm flex justify-center items-center gap-1 py-2 group">
            <span className="transition-transform duration-300 group-hover:-translate-x-[4]">
              View
            </span>
            <ExternalLink
              color="yellow"
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-px"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export { Card };
