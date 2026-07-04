import React from "react";
import video from "../assets/Mvdo.mp4";

export default function VideoSection() {
  return (
    <section className="w-full h-screen overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}