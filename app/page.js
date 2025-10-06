"use client"

import Image from "next/image";
import React, { useEffect, useRef , useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    if (!videoContainer) return;

    const videos = videoContainer.querySelectorAll('video');
    let currentIndex = 0;
    const scrollDuration = 2000;
    const pauseDuration = 3000;
    let isScrolling = false;
    let animationId = null;

    const scrollToVideo = (index) => {
      if (isScrolling || index >= videos.length) return;
      
      isScrolling = true;
      const targetVideo = videos[index];
      const targetPosition = targetVideo.offsetTop;
      
      const startPosition = videoContainer.scrollTop;
      const distance = targetPosition - startPosition;
      let startTime = null;
      
      const animation = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / scrollDuration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        videoContainer.scrollTop = startPosition + (distance * easeOutQuart);
        
        if (timeElapsed < scrollDuration) {
          animationId = requestAnimationFrame(animation);
        } else {
          isScrolling = false;
          
          // Check if we've reached the end of the first set (original videos)
          if (currentIndex === 4) { // Last video of first set
            // Instantly reset to top without animation for seamless loop
            setTimeout(() => {
              videoContainer.scrollTop = 0;
              currentIndex = 0;
              scrollToVideo(currentIndex);
            }, pauseDuration);
          } else {
            setTimeout(() => {
              currentIndex = (currentIndex + 1) % 10; // 10 total videos (5 original + 5 duplicates)
              scrollToVideo(currentIndex);
            }, pauseDuration);
          }
        }
      };
      
      animationId = requestAnimationFrame(animation);
    };

    scrollToVideo(currentIndex);

    return () => {
      isScrolling = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const router = useRouter();
  const [text, setText] = useState("")

  const createTree = () => {
    router.push(`/generate?handle=${text}`)
  }

  return (
    <main>
      <section className='bg-[#d2e823] min-h-[150vh] grid grid-cols-2'>
        <div className="flex flex-col justify-center pl-18 gap-6">
          <h1 className="text-[#254f1a] font-3xlbold text-7xl">A link in bio built for you.</h1>
          <p className="text-[#254f1a] font-semibold text-xl">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="w-[90%] flex gap-2 items-center mt-6">
            <input value={text} onChange={(e)=> setText(e.target.value)} type="text" placeholder="Enter your Handle" className="bg-white focus:outline-white focus:border-2 border-[#d2e823] focus:outline-2 py-5 px-4 rounded-lg w-1/2 placeholder:font-bold placeholder:text-lg" />
            <button onClick={() => createTree()} className="py-5 w-1/2 px-10 rounded-full bg-[#254f1a] text-white font-bold text-lg cursor-pointer ">Get started for free</button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div 
            ref={videoContainerRef}
            className="flex flex-col h-[150vh] overflow-y-auto scrollbar-hide"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Original Videos */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-[600px] rounded-[2.5rem] aspect-square object-cover"
              src="/Kelsey-updated.mp4"
            ></video>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-[600px] mt-[40px] rounded-[2.5rem] aspect-square object-cover"
              src="/Koy-updated.mp4"
            ></video>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-[600px] mt-[40px] rounded-[2.5rem] aspect-square object-cover"
              src="/Miles-updated.mp4"
            ></video>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-[600px] mt-[40px] rounded-[2.5rem] aspect-square object-cover"
              src="/Pistakio-updated.mp4"
            ></video>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-[600px] mt-[40px] rounded-[2.5rem] aspect-square object-cover"
              src="/Zay-2.mp4"
            ></video>
            
            {/* Duplicated Videos for Infinite Loop */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-[600px] mt-[40px] rounded-[2.5rem] aspect-square object-cover"
              src="/Kelsey-updated.mp4"
            ></video>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-[600px] mt-[40px] rounded-[2.5rem] aspect-square object-cover"
              src="/Koy-updated.mp4"
            ></video>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-[600px] mt-[40px] rounded-[2.5rem] aspect-square object-cover"
              src="/Miles-updated.mp4"
            ></video>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-[600px] mt-[40px] rounded-[2.5rem] aspect-square object-cover"
              src="/Pistakio-updated.mp4"
            ></video>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="h-[600px] mt-[40px] rounded-[2.5rem] aspect-square object-cover"
              src="/Zay-2.mp4"
            ></video>
          </div>
        </div>
      </section>
      
    </main>
  );
}