/* eslint-disable */
import { Link } from "react-router-dom";
import { assets } from "../../assets/images";
const About = () => {

  return (
    <div className="px-4 sm:px-6 lg:px-24 py-16 sm:py-20 md:py-24 lg:py-28">
      <div >
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  items-center ">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Your Trusted Partner in Pet Care
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              With over 15 years of experience, we 've been providing exceptional veterinary care to pets of all kinds. Our team of dedicated professionals is committed to ensuring the health and happiness of your beloved companions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#f0f1f3] p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#003566] mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-[#f0f1f3] p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-[#003566] mb-2">5000+</h3>
                <p className="text-gray-600">Happy Pets</p>
              </div>
            </div>
            <Link to="/about" className="bg-[#003566] text-white px-8 py-4 rounded-md hover:bg-[#002b52] transition-colors duration-300"  >
            Learn More
            </Link>     
          </div>
          <div className="relative ">
            <img 
              src={assets.about_pet} 
              alt="Veterinarian with pet"
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-[#003566]">Professional Care</p>
              <p className="text-gray-600">24/7 Emergency Services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;