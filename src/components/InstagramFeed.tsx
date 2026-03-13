import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: string;
  comments: string;
  url: string;
}

const SAMPLE_POSTS: InstagramPost[] = [
  {
    id: '1',
    imageUrl: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Learning Korean together at WithU Center! 🇰🇷✨ #WithUCenter #LearningKorean',
    likes: '124',
    comments: '12',
    url: 'https://instagram.com/with_u_center',
  },
  {
    id: '2',
    imageUrl: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Great moments from our cultural exchange dinner! 🌏🥘 #InternationalCommunity',
    likes: '89',
    comments: '8',
    url: 'https://instagram.com/with_u_center',
  },
  {
    id: '3',
    imageUrl: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Success! These students just finished their beginner Korean course. 🎓👏',
    likes: '156',
    comments: '15',
    url: 'https://instagram.com/with_u_center',
  },
  {
    id: '4',
    imageUrl: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Exploring Daejeon together. What a beautiful city! 🏙️🚶‍♂️ #Daejeon #KoreaLife',
    likes: '112',
    comments: '6',
    url: 'https://instagram.com/with_u_center',
  },
  {
    id: '5',
    imageUrl: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Hands-on cultural experience: Hanbok trying day! 👘❤️ #Hanbok #KoreanCulture',
    likes: '203',
    comments: '24',
    url: 'https://instagram.com/with_u_center',
  },
  {
    id: '6',
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Weekly social meetup! New friends, great conversations. ☕️🤝',
    likes: '95',
    comments: '10',
    url: 'https://instagram.com/with_u_center',
  },
];

export default function InstagramFeed() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5 rounded-full">
            <div className="bg-white p-0.5 rounded-full">
              <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                <Instagram className="text-gray-800" size={24} />
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 leading-none mb-1">with_u_center</h3>
            <p className="text-sm text-gray-500">WithU International Culture Center</p>
          </div>
        </div>
        <a 
          href="https://instagram.com/with_u_center" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2"
        >
          Follow
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {SAMPLE_POSTS.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200"
          >
            <img 
              src={post.imageUrl} 
              alt={post.caption} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white font-semibold">
              <div className="flex items-center gap-1">
                <Heart size={20} fill="currentColor" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={20} fill="currentColor" />
                <span>{post.comments}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="mt-8 text-center lg:hidden">
        <a 
          href="https://instagram.com/with_u_center" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
        >
          View more on Instagram
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}
