"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";

const VideoPlayer = ({ isOpen, setIsOpen }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="relative">
          <video width="640" height="360" controls autoPlay>
            <source src="/images/video/myvideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-4 -right-4 bg-[#a31d1d] px-2 py-1 text-white rounded-full"
          >
            ✕
          </button>
        </div>
      </div>
    )
  );
};

const Video = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We are ready to help"
          paragraph="ADNOXY redefines offline fashion ads, seamlessly blending digital reach with real-world impact. Innovation starts here!"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md border border-gray-300 shadow-[0_0_20px_rgba(211,211,211,0.6)] transition-all duration-300"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40]">
                <video
                  src="/images/video/myvideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-md"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Video;