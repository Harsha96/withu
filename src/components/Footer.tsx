import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import logo from '../assets/logo.webp'; 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
                <img src={logo} alt="Logo" className="w-18 h-14 object-contain" />

              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <div>
                <div className="font-bold text-white">WithU</div>
                <div className="text-xs text-gray-400">International Culture Center</div>
              </div> */}
            </div>
            <p className="text-sm leading-relaxed">
              Supporting international students in Korea through language education,
              cultural experiences, and community building.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  3F, Seven-Eleven Building<br />
                  Dongdaejeon-ro 174-7<br />
                  Dong-gu, Daejeon, South Korea
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <p className="text-sm">+82-42-XXX-XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <p className="text-sm">info@withu-center.org</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-sm leading-relaxed">
              We believe every international student deserves a supportive community
              and the resources to thrive in their new home. Join us in creating
              meaningful connections across cultures.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-orange-500" /> for international students
          </p>
          <p className="text-xs text-gray-500 mt-2">
            © {new Date().getFullYear()} WithU International Culture Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
