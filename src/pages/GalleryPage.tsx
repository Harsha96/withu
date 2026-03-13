import { Quote } from 'lucide-react';
import InstagramFeed from '../components/InstagramFeed';
import koranclass from '../assets/korean_class.jpg';
import cultre from '../assets/culture.jpg';
import party from '../assets/party.jpg';
import dentail from '../assets/dentail.jpg';
import outings from '../assets/outings.jpg';
import lec from '../assets/lec.jpg';
type Page = 'home' | 'about' | 'programs' | 'gallery' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}
export default function GalleryPage({ onNavigate }: HomePageProps) {
  const galleryImages = [
    {
      url: koranclass,
      title: 'Korean Language Class',
      description: 'Students learning Korean with native teachers',
    },
    {
      url: cultre,
      title: 'Cultural Activities',
      description: 'Immerse yourself in Korean culture through hands-on experiences, traditional activities, and local exploration.',
    },
    {
      url: party,
      title: 'Social Meetups',
      description: 'Build lasting friendships through regular social gatherings, game nights, and community events.',
    },
    {
      url: dentail,
      title: 'Medical & Dental Guidance',
      description: 'Navigate the Korean healthcare system with confidence through our comprehensive medical support services.',
    },
    {
      url: outings,
      title: 'Outings',
      description: 'Fun, memorable experiences beyond the classroom.',
    },
    {
      url: lec,
      title: 'Special Lectures',
      description: 'Expert-led sessions on Korean culture, history, and life in Korea and important topics.',
    },
 
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      country: 'Philippines',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'Coming to Korea was scary at first, but WithU made me feel at home immediately. The Korean classes helped me communicate with locals, and I made friends from all over the world!',
    },
    {
      name: 'Ahmed Hassan',
      country: 'Egypt',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The counseling services at WithU helped me through a really tough time when I was feeling homesick. The staff genuinely cares about international students.',
    },
    {
      name: 'Sophie Chen',
      country: 'Taiwan',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'I love the cultural activities! We visited temples, tried traditional food, and even wore hanbok. WithU makes learning about Korea so fun and authentic.',
    },
    {
      name: 'Carlos Rodriguez',
      country: 'Mexico',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The medical guidance service was a lifesaver when I needed to see a doctor. They helped me find an English-speaking clinic and explained everything about Korean health insurance.',
    },
    {
      name: 'Priya Patel',
      country: 'India',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'WithU is more than a center—it\'s a family. The friends I made here will last a lifetime. I\'m so grateful for this community.',
    },
    {
      name: 'Liam O\'Connor',
      country: 'Ireland',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      quote: 'The free Korean lessons are incredibly professional. My teacher was patient and supportive, and I went from zero Korean to having conversations in just a few months!',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Community</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              See the vibrant community we've built together and hear from students
              whose lives have been transformed by WithU.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Moments Together
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Capturing the joy, learning, and friendships that make WithU special
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from international students who found their home at WithU
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <Quote className="text-orange-500 mb-4" size={32} />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Instagram Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Follow us @with_u_center for daily updates and cultural insights
            </p>
            <InstagramFeed />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Story Could Be Next
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Join our growing community of international students who have found friendship,
            support, and a true home away from home at WithU Center.
          </p>
          <button onClick={() => onNavigate('contact')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            Join Our Community
          </button>
        </div>
      </section>
    </div>
  );
}
