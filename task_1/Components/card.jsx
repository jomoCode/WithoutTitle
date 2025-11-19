"use client";
import Image from "next/image";

const Card = ({ hashTags }) => {
  return (
    <div className="bg-gray-800 border-2 border-gray-600 w-60 h-[500px] rounded-lg overflow-hidden">
      {/* Card header */}
      <div className="flex justify-center items-end h-[20%] w-full bg-amber-50">
        <div className="p-10">Amir Esrmaelili</div>
      </div>

      {/* Card  profile photo &  profile title  */}
      <div>
        <div>
          <Image src="/null" width={30} height={30} alt="profile photo" />
        </div>
        <span>
          <>icon</> MTA Owner
        </span>
      </div>

      <span>
        <h1>Need a streamer with benefits</h1>
        <>icon</>
      </span>

      <p className="text-left">alallalalaalalalalal</p>

      <span className="text-left">
        <>icon</>
        <p>Not done</p>
      </span>

      <div className="w-full flex justify-left items-center">
        <div>Agreed</div>
        <div>Budget</div>
      </div>
      <span>
        Categories<>icon</>
      </span>

      <div className="flex justify-start items-center">
        {hashTags.map((tags) => {
          <div className="p-5">{tags} #</div>;
        })}
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="text-amber-400">No acceptor found</div>
        <div>
          2 months ago <>icon</>
        </div>
      </div>
      {/* Footer */}
      <div className="border-amber-200 border-2">
        <div
          className="text-lg py-5 bg-amber-300/40"
          onClick={() => console.log("clicked view")}
        >
          View
        </div>
      </div>
    </div>
  );
};

export { Card };
