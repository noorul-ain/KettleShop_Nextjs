export default function Testimonials() {
    const testimonials = [
      {
        name: "Emily R",
        role: "Home Chef",
        feedback: "The kettle heats water incredibly fast, making my mornings so much easier!",
        image: "/av1.png", // Replace with your image path
        rating: 5,
      },
      {
        name: "Michael T",
        role: "Food Blogger",
        feedback: "I love the sleek design and the variety of temperature settings!",
        image: "/av2.png", // Replace with your image path
        rating: 5,
      },
      {
        name: "Sarah L",
        role: "Interior Designer",
        feedback: "This kettle is not only functional but also a beautiful addition to my kitchen.",
        image: "/av3.png", // Replace with your image path
        rating: 5,
      },
    ];
  
    return (
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-medium text-gray-600">Testimonials</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
            <p className="text-gray-600 mt-2">
              Discover how our high-quality electric kettles have transformed the lives of our customers.
            </p>
          </div>
  
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-lg flex flex-col items-center text-center border-2 border-transparent hover:border-[#8B4513] hover:shadow-md transition duration-300 cursor-pointer"
              >
                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path d="M12 17.27l5.18 3.73-1.64-6.04L20 9.24l-6.17-.54L12 3 10.17 8.7 4 9.24l4.46 5.72L6.82 21z" />
                    </svg>
                  ))}
                </div>
  
                {/* Feedback */}
                <p className="text-gray-700 mb-6">{testimonial.feedback}</p>
  
                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  