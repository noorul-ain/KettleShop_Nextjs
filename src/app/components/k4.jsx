"use client"; // Mark the file as a client component

import { useState, useEffect } from "react";
import Image from "next/image";

export default function K4() {
  // Set the target date for the countdown
  const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000; // 5 days from now

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Countdown over
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-[#f3ebe5] min-h-screen px-6 py-12">
      {/* Left Side */}
      <div className="relative md:w-1/2 flex flex-col justify-center items-start text-left p-12 bg-[#b08968] text-white rounded-l-full">
        {/* Circular Background */}
        <div className="absolute inset-0 bg-[#b08968] rounded-full w-[150%] h-[150%] -left-[25%] -top-[25%] -z-10"></div>

        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Special Limited Time Offer Kettle!
        </h2>
        <p className="mb-6 text-lg">Get 10% Off By Signing Up</p>

        {/* Timer */}
        <div className="flex items-center space-x-4 text-white text-3xl font-bold mb-6">
          <div className="text-center">
            <span>{timeLeft.days.toString().padStart(2, "0")}</span>
            <p className="text-sm font-normal">Days</p>
          </div>
          <span>:</span>
          <div className="text-center">
            <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
            <p className="text-sm font-normal">Hours</p>
          </div>
          <span>:</span>
          <div className="text-center">
            <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
            <p className="text-sm font-normal">Mins</p>
          </div>
          <span>:</span>
          <div className="text-center">
            <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
            <p className="text-sm font-normal">Secs</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center text-white mb-6">
          <span className="text-3xl font-bold mr-4">$99.99</span>
          <span className="line-through text-black text-xl">$140</span>
        </div>

        {/* Button */}
        <button
          className="bg-white text-[#b08968] font-medium px-6 py-3 rounded-full shadow hover:bg-gray-100"
          aria-label="Order Now for $99.99"
        >
          Order Now
        </button>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex items-center justify-center">
        <Image
          src="/main1.png" // Replace with your image path
          alt="Kettle"
          width={500}
          height={500}
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
