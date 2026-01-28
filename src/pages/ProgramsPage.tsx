import { BookOpen, Globe, Music, Users, Stethoscope, MessageCircle, Calendar, Clock, ArrowRight, Church } from 'lucide-react';
type Page = 'home' | 'about' | 'programs' | 'gallery' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}
export default function ProgramsPage({ onNavigate }: HomePageProps) {
  const programs = [
    {
      icon: BookOpen,
      title: 'Korean Language Classes',
      description: 'Master Korean with our free, professionally-taught language courses designed specifically for international students.',
      features: [
        'Beginner to Advanced levels',
        'Professional native Korean teachers',
        'Small class sizes for personalized attention',
        'Interactive learning methods',
        // 'Free textbooks and materials',
        'Flexible scheduling options',
      ],
      schedule: 'Mon-Fri, Multiple time slots available',
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Globe,
      title: 'Cultural Activities',
      description: 'Immerse yourself in Korean culture through hands-on experiences, traditional activities, and local exploration.',
      features: [
        'Traditional Korean cooking classes',
        'Hanbok wearing experiences',
        'Temple visits and cultural tours',
        'K-pop dance workshops',
        'Traditional tea ceremonies',
        'Festival celebrations',
      ],
      schedule: 'Weekly events, Seasonal trips',
      color: 'from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100 text-orange-600',
    },
    {
      icon: Church,
      title: 'Sunday Service & Fellowship',
      description: 'Discover the joy of music through worship and community featuring global Christian songs, group singing, and cultural music appreciation.',
      features: [
        'Group worship & singing',
        'International sacred music',
        'Fellowship & spiritual connection',
        'Performance in service settings',
        'Inclusive, supportive environment',
      ],
      schedule: 'Sunday, Everyone welcome',
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-100 text-purple-600',
    },
    {
      icon: Users,
      title: 'Social Meetups',
      description: 'Build lasting friendships through regular social gatherings, game nights, and community events.',
      features: [
        'Weekly coffee meetups',
        'International potluck dinners',
        'Board game nights',
        'Movie screenings',
        'Sports activities',
        'Conversation exchange partners',
      ],
      schedule: 'Multiple events weekly',
      color: 'from-green-500 to-green-600',
      iconBg: 'bg-green-100 text-green-600',
    },
    {
      icon: Stethoscope,
      title: 'Medical & Dental Guidance',
      description: 'Navigate the Korean healthcare system with confidence through our comprehensive medical support services.',
      features: [
        'Hospital and clinic recommendations',
        'Medical interpretation assistance',
        'Health insurance guidance',
        'Emergency contact information',
        'Dental clinic referrals',
        'Prescription assistance',
      ],
      schedule: 'By appointment, Emergency support available',
      color: 'from-red-500 to-red-600',
      iconBg: 'bg-red-100 text-red-600',
    },
    {
      icon: MessageCircle,
      title: 'Professional Counseling',
      description: 'Access confidential, professional support for personal, academic, and cultural adjustment challenges.',
      features: [
        'Individual counseling sessions',
        'Stress and anxiety management',
        'Academic pressure support',
        'Cultural adjustment guidance',
        'Homesickness support',
        'Career guidance',
      ],
      schedule: 'By appointment, Confidential',
      color: 'from-teal-500 to-teal-600',
      iconBg: 'bg-teal-100 text-teal-600',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Comprehensive support services designed to help international students
              thrive in Korea. All programs are free or low-cost.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className={`md:w-2/5 bg-gradient-to-br ${program.color} p-8 md:p-12 text-white flex flex-col justify-center`}>
                    <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <program.icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{program.title}</h2>
                    <p className="text-lg leading-relaxed opacity-90 mb-6">
                      {program.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar size={20} />
                        <span className="text-sm">{program.schedule}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-3/5 p-8 md:p-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">What's Included:</h3>
                    <ul className="space-y-3 mb-8">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button           onClick={() => onNavigate('contact')}
 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 group">
                        Ask for Details
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button onClick={() => onNavigate('gallery')} className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                        See more..
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="md:flex items-center gap-8">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-gray-700">
                  Join thousands of international students who have found their community at WithU.
                  All programs are designed with your success and wellbeing in mind.
                </p>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <button   onClick={() => onNavigate('contact')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center gap-2 group">
                  Contact Us
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
