import { BookOpen, Globe, Users, Stethoscope, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/bg.webp';

export default function HomePage() {
  const navigate = useNavigate();
  const services = [
    {
      icon: BookOpen,
      title: 'Free Korean Language Classes',
      description: 'Learn Korean from professional teachers at no cost. All levels welcome.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Globe,
      title: 'Cultural Experiences',
      description: 'Discover Korean traditions, festivals, and local culture through immersive activities.',
      color: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Users,
      title: 'International Friendships',
      description: 'Build lasting connections with students from around the world.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Stethoscope,
      title: 'Medical & Dental Guidance',
      description: 'Get support navigating healthcare services and finding trusted providers.',
      color: 'bg-red-100 text-red-600',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              A Home Away From Home for International Students in Korea
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Learn Korean, experience culture, and build friendships at WithU Center
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/programs')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 group"
              >
                See our Programs
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors border-2 border-white/30"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              WithU International Culture Center is a non-profit organization dedicated to supporting
              international students in South Korea. We provide comprehensive services including language
              education, cultural activities, and personal support to help you thrive in your new home.
              Our welcoming community is here to ensure you never feel alone on your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow group"
              >
                <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/programs')}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg group"
            >
              Explore All Programs
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>


      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl">
                Whether you're new to Korea or looking to expand your social circle,
                we're here to welcome you with open arms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  Get Started Today
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
