'use client';
import { motion } from 'framer-motion';

// 12 Snapshots list (Aap yahan apni actual images ki paths ya URLs daal sakte hain)
const snapshotsData = [
  { id: 1, title: "Brainstorming Session", tag: "Culture", img: "images/career/img1.jpeg" },
  { id: 2, title: "Coding & Coffee", tag: "Workspace", img: "images/career/img2.jpeg" },
  { id: 3, title: "Team Collaboration", tag: "Team", img: "images/career/img4.jpeg" },
  { id: 4, title: "Design Discussion", tag: "Creative", img: "images/career/img3.jpeg" },
  { id: 5, title: "Office Vibe", tag: "Digifine", img: "images/career/img2.jpeg" },
  { id: 6, title: "Success Milestone", tag: "Celebration", img: "images/career/img1.jpeg" },
  { id: 7, title: "Tech Architecture", tag: "Development", img: "images/career/img3.jpeg" },
  { id: 8, title: "Happy Faces", tag: "People", img: "images/career/img4.jpeg" },
  { id: 9, title: "Client Pitch", tag: "Meeting", img: "images/career/img1.jpeg" },
  { id: 10, title: "Weekend Party", tag: "Fun", img: "images/career/img2.jpeg" },
  { id: 11, title: "Late Night Hustle", tag: "Dedication", img: "images/career/img3.jpeg" },
  { id: 12, title: "Digifine Family", tag: "Community", img: "images/career/img4.jpeg" },
];

export default function SnapshotsOfLife() {
  return (
    <section className="bg-white min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-slate-800">
      
      {/* Header Section with Scroll Animation */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-amber-100 text-amber-700 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest border border-amber-300">
            ✨ Behind the Scenes
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-black mt-4 tracking-tight text-slate-900"
        >
          Snapshots of Life @ <span style={{ color: '#046AED' }}>Digifine</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-lg text-slate-600"
        >
          A quick peek into our daily grind, creative highs, awesome team culture, and unforgettable moments.
        </motion.p>
      </div>

      {/* Grid Layout for Snapshots */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {snapshotsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group relative flex flex-col"
          >
            {/* Image Box */}
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Yellow Touch Badge */}
              <span className="absolute top-3 right-3 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                {item.tag}
              </span>
            </div>

            {/* Compact Details Footer (Bada box hata diya hai) */}
            <div className="py-3.5 px-4 flex items-center justify-between bg-white">
              <h3 className="font-semibold text-slate-800 text-base">
                {item.title}
              </h3>
              
              {/* Blue Dot Indicator */}
              <span 
                className="w-3 h-3 rounded-full inline-block shadow-sm flex-shrink-0"
                style={{ backgroundColor: '#046AED' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}