const Services = () => {
  const services = [
    {
      title: "Veterinary Care",
      description: "Comprehensive medical care for your pets including vaccinations, health checks, and treatments.",
      icon: "🏥"
    },
    {
      title: "Pet Spa & Grooming",
      description: "Professional grooming services including bathing, trimming, nail care, and spa treatments.",
      icon: "✂️"
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency veterinary services for urgent medical situations.",
      icon: "🚑"
    },
    {
      title: "Dental Care",
      description: "Complete dental services including cleaning, extractions, and oral health maintenance.",
      icon: "🦷"
    },
    {
      title: "Surgery",
      description: "Advanced surgical procedures performed by experienced veterinary surgeons.",
      icon: "⚕️"
    },
    {
      title: "Vaccination",
      description: "Essential vaccinations and immunization services to protect your pet's health.",
      icon: "💉"
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-24 py-16 sm:py-20 md:py-24 lg:py-28 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We offer a comprehensive range of veterinary services and pet spa treatments to keep your pets healthy and happy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-[#003566] mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-[#003566] text-white px-8 py-4 rounded-md hover:bg-[#002b52] transition-colors duration-300">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Services;

