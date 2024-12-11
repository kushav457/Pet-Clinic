/*eslint-disable*/
const About = () => {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-24 py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Our Pet Clinic
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Providing compassionate veterinary care and exceptional service for your beloved pets since 1995.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#003566] mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              To provide the highest quality veterinary care while treating each pet as if they were our own. We strive to create a welcoming environment where pets and their owners feel comfortable and cared for.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-[#003566] mb-4">Our Values</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Compassionate care for all animals</li>
              <li>• Professional excellence in veterinary medicine</li>
              <li>• Education and preventive care</li>
              <li>• Building lasting relationships with pet families</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Expert Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <h4 className="text-xl font-bold text-[#003566]">Dr. Sarah Johnson</h4>
              <p className="text-gray-600">Chief Veterinarian</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <h4 className="text-xl font-bold text-[#003566]">Dr. Michael Chen</h4>
              <p className="text-gray-600">Veterinary Surgeon</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>
              <h4 className="text-xl font-bold text-[#003566]">Emma Wilson</h4>
              <p className="text-gray-600">Head Nurse</p>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Our Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-[#003566] mb-3">State-of-the-Art Equipment</h4>
              <p className="text-gray-600">
                Our clinic is equipped with modern diagnostic and treatment technology to provide the best care for your pets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-[#003566] mb-3">Comfortable Environment</h4>
              <p className="text-gray-600">
                We maintain a clean, comfortable, and stress-free environment to ensure your pet's visit is as pleasant as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
