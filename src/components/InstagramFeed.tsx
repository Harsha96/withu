import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import InstagramPost from './InstagramPost';

// Actual post IDs from @with_u_center
const POST_IDS = [
  'DO33nneEqOx',
  'DO33SniElWq',
  'C6K2tUARBGV',
  'C6K1jx3xuqO',
  'C6K1GErRrO8',
  'C117Zy2RxPR',
  'C1FCeI-RgPp',
  'C1FB_QjRSkf',
  'CyLSMA-LF0P',
];

export default function InstagramFeed() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-8 px-4">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POST_IDS.map((id) => (
          <div key={id} className="w-full flex justify-center">
            <InstagramPost postId={id} />
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
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
