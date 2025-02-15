export default function Specifications() {
  return (
    <section className="bg-pink-50 py-12 px-4 sm:px-6">
      <div className="container mx-auto flex justify-center">
        {/* Card */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 w-full max-w-4xl flex flex-col md:flex-row">
          {/* Left Section - Specifications */}
          <div className="md:w-1/2 space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Specifications</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Our Elegant Kettle combines cutting-edge technology with luxurious design, offering perfect temperature
              control and style.
            </p>

            <table className="w-full text-left text-gray-700 border-collapse text-sm sm:text-base">
              <tbody>
                {[
                  ["Capacity", "1.7 Liters"],
                  ["Power Consumption", "1500 Watts"],
                  ["Material", "Stainless Steel / Glass"],
                  ["Temperature Settings", "5 adjustable levels"],
                  ["Weight", "3.5 lbs"],
                  ["Warranty", "2 years"],
                ].map(([label, value], index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-1 sm:py-2 font-medium">{label}</td>
                    <td className="py-1 sm:py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Icons */}
            <div className="flex space-x-2 sm:space-x-4 mt-4 sm:mt-6">
              {["p1.png", "p2.png", "p3.png"].map((img, index) => (
                <img
                  key={index}
                  src={`/${img}`}
                  alt={`Icon ${index + 1}`}
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover"
                />
              ))}
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <img
              src="/singlecatelrotate1.png"
              alt="Elegant Kettle"
              className="object-contain w-48 sm:w-64 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
