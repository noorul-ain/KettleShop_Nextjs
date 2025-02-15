import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import Image from "next/image";

export default function ProductFAQ() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto p-8 flex flex-col lg:flex-row gap-12">
        {/* Left side - Image */}
        <div className="flex-1">
          <Image
            src="/Choice.png" // Replace with the path to your image
            alt="Mint green electric kettle"
            width={500}
            height={500}
            className="w-full h-auto rounded-md"
          />
        </div>

        {/* Right side - FAQ */}
        <div className="flex-1 space-y-6">
          <div>
            <p className="text-sm text-gray-600 mb-1 my-20 ">Superior Choice</p>
            <h2 className="text-2xl font-medium text-gray-900">Why Choose Us?</h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-t border-b border-gray-200">
              <AccordionTrigger className="py-4 text-left font-normal text-gray-800 hover:underline">
                Why is Kettle Klo energy efficient?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pl-4">
                Our kettle features advanced heating technology that ensures quick boiling while minimizing energy consumption.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-gray-200">
              <AccordionTrigger className="py-4 text-left font-normal text-gray-800 hover:underline">
                What temperature settings does it have?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pl-4">
                The kettle offers precise temperature control settings for different beverages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-gray-200">
              <AccordionTrigger className="py-4 text-left font-normal text-gray-800 hover:underline">
                Is it safe to use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pl-4">
                Yes, it includes multiple safety features including auto shut-off and boil-dry protection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-gray-200">
              <AccordionTrigger className="py-4 text-left font-normal text-gray-800 hover:underline">
                How does it compare to traditional kettles?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pl-4">
                It offers better energy efficiency and modern features compared to traditional kettles.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
