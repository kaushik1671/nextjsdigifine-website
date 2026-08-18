'use client';

import { motion } from 'framer-motion';

// 10 Snapshots list
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
  { id: 10, title: "Digifine Family", tag: "Community", img: "images/career/img2.jpeg" },
];

export default function SnapshotsOfLife() {
  return (
    <section className="min-h-screen bg-slate-50 text-slate-950 pt-24 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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
            className="text-3xl sm:text-4xl font-black mt-3 tracking-tight text-slate-900"
          >
            Snapshots of Life @ <span style={{ color: '#046AED' }}>Digifine</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-3 text-sm sm:text-base text-slate-600"
          >
            A quick peek into our daily grind, creative highs, awesome team culture, and unforgettable moments.
          </motion.p>
        </div>

        {/* Bento Grid Structure matched with clean layout bounds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[280px]">
          {snapshotsData.map((item, index) => {
            let layoutClass = "";

            if (index === 0 || index === 5) {
              layoutClass = "md:col-span-2 lg:col-span-2";
            } else {
              layoutClass = "col-span-1";
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 group relative flex flex-col justify-end bg-slate-900 ${layoutClass}`}
              >
                {/* Background Image with Hover Zoom */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Professional Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                </div>
                
                {/* Tag Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Title Content Overlay */}
                <div className="relative z-10 p-5 flex items-end justify-between">
                  <h3 className="font-bold text-white text-base sm:text-lg tracking-tight drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}