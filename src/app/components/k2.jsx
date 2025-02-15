import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MicroscopeIcon as Magnifier } from "lucide-react";

export default function K2() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Product Image */}
          <div className="relative">
            <button className="absolute right-4 top-4 z-10 bg-black rounded-full p-2">
              <Magnifier className="h-5 w-5 text-white" />
            </button>
            <div className="bg-[#F5F5F5] rounded-lg p-8">
              <Image
                src="/About.png"
                alt="Kettle Klo appliance set"
                width={600}
                height={450}
                className="w-full"
                priority
              />
            </div>
          </div>

          {/* Right side - Product Info */}
          <div className="space-y-6">
            <div className="inline-block border-b border-gray-200">
              <span className="text-sm text-gray-600">About Kettle Klo</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Discover the Art of Boiling Water
            </h1>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Kettle Klo is a revolutionary kitchen appliance designed to make your cooking experience seamless and
                enjoyable. With its state-of-the-art technology, Kettle Klo ensures that your water is boiled to
                perfection in no time.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our kettle features a sleek design, multiple temperature settings, and an energy-efficient system that
                saves you time and electricity. Whether you're brewing tea, making instant coffee, or preparing meals,
                Kettle Klo is your perfect kitchen companion.
              </p>
            </div>

            <Button
              variant="secondary"
              className="bg-[#C69C7B] hover:bg-[#B68D6E] text-white rounded-full px-8 py-2"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
