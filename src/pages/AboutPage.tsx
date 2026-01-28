import { Heart, Target, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Inclusion',
      description: 'We welcome students from all backgrounds, cultures, and walks of life. Everyone deserves to feel at home.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Target,
      title: 'Support',
      description: 'We provide comprehensive assistance to help international students overcome challenges and achieve their goals.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Globe,
      title: 'Cultural Exchange',
      description: 'We celebrate diversity and create opportunities for meaningful cross-cultural learning and friendship.',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We build strong, supportive networks where international students can connect, grow, and thrive together.',
      color: 'bg-orange-100 text-orange-600',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About WithU</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Building bridges between cultures and creating a supportive home
              for international students in Daejeon, South Korea.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  WithU International Culture Center was founded with a simple yet powerful vision:
                  to ensure that no international student in Korea feels alone or unsupported during
                  their journey abroad.
                </p>
                <p>
                  We understand the challenges that come with studying in a new country—language
                  barriers, cultural differences, homesickness, and navigating unfamiliar systems.
                  These experiences inspired us to create a welcoming space where international
                  students can find not just services, but a true community.
                </p>
                <p>
                  Located in the heart of Daejeon, our center has grown from a small gathering
                  of volunteers into a thriving non-profit organization serving hundreds of
                  international students each year. Through free Korean language classes, cultural
                  activities, counseling services, and social events, we've helped countless students
                  build confidence, make lasting friendships, and truly feel at home in Korea.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="International students studying together"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <p className="font-semibold text-lg">Serving students since 2015</p>
                <p className="text-sm text-orange-100 mt-1">Over 2,000 students supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the welcoming
              environment we create for international students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why WithU Was Founded
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Studying abroad is an incredible opportunity, but it can also be one of the most
                  challenging experiences of a student's life. Many international students arrive
                  in Korea excited about their future, only to face unexpected obstacles:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    <span>Language barriers that make daily life difficult</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    <span>Cultural differences that can feel overwhelming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    <span>Isolation and loneliness without family and friends nearby</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">•</span>
                    <span>Confusion navigating healthcare, banking, and other essential services</span>
                  </li>
                </ul>
                <p className="text-lg">
                  WithU was created to address these challenges head-on. We believe that with the
                  right support, every international student can not only survive but truly thrive
                  in Korea. Our programs are designed to remove barriers, build confidence, and
                  create lasting connections that transform the study abroad experience from
                  daunting to delightful.
                </p>
                <p className="text-lg font-semibold text-blue-900">
                  Because you deserve to feel at home, no matter where you're from.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
