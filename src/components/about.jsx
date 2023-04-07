import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
    
      <div className="max-w-[1240] m-auto md:grid grid-cols-3 gap-8"></div>
      <div className="col-span-2">
        <p className="uppercase text-xl tracking-widest text-[#0A5F7E]">About</p>
        <h2 className="py-4">Who am I</h2>
        <p className="py-2 text-gray-600">
          {" "}
          I have spent last 1.5 months learning front-end development. I have
          found this field to be utterly creative and it tickles my imagination
          and challenges my problem solving ability every time I get my hands
          dirty.
        </p>
        <p className="py-2 text-gray-600">
          {" "}
          Exitentially, I am a wanderer on an odyssey, who is a born explorer
          and a vagabond. He is a spirit of an explorer who exists beyond the
          vivid beauty of human imagination. He is something and nothing at the
          same time. He is everything and nothing. He is a wanderer
        </p>

        <p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p>
      </div>
      <div className=" px-1 mt-20 w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
      <Image className="rounded-xl"
          src="/../public/assets/me.jpg"
          alt="/"
          width="600"
          height="1000"
        />
      </div>
    </div>
  );
};

export default About;
