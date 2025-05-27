// const AboutSection = () => {
//   return (
//     <div className="bg-gradient-to-br from-[#2F1947] to-[#735D78] flex justify-center pt-20 md:pt-40 pb-10 md:pb-20">
//       <div className="container px-4 md:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//           <div>
//             <div className="text-xl md:text-2xl mb-2">_ABOUT</div>
//             <div className="text-3xl md:text-5xl font-['Orbitron'] mb-2">
//               THE ALGORITHMIC
//             </div>
//             <div className="text-3xl md:text-5xl font-['Orbitron']">
//               TRADING CLUB
//             </div>
//           </div>
//           <div>
//             <div className="text-sm md:text-base">
//               <p className="mb-4 md:mb-10">
//                 Established in 2019, the Algorithmic Trading Club, previously
//                 known as the Financial Engineering Club, ardently steers
//                 students through the dynamic realm of quantitative finance and
//                 financial engineering.
//               </p>
//               <p>
//                 Our unwavering dedication is centered on equipping members with
//                 practical proficiency, encompassing fundamental Python
//                 programming to sophisticated data science methodologies.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Glossy Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 md:my-16">
//           <div
//             className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-10 text-2xl md:text-3xl text-white min-h-[200px] md:min-h-[320px] flex items-center justify-center text-center"
//             style={{ fontFamily: "Orbitron" }}
//           >
//             QUANTITATIVE FINANCE EXPERTISE
//           </div>

//           <div
//             className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-10 text-2xl md:text-3xl text-white min-h-[200px] md:min-h-[320px] flex items-center justify-center text-center"
//             style={{ fontFamily: "Orbitron" }}
//           >
//             INDUSTRY READY
//           </div>

//           <div
//             className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-10 text-2xl md:text-3xl text-white min-h-[200px] md:min-h-[320px] flex items-center justify-center text-center"
//             style={{ fontFamily: "Orbitron" }}
//           >
//             EDUCATIONAL WORKSHOPS
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;


const AboutSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#2F1947] to-[#735D78] flex justify-center pt-20 md:pt-40 pb-10 md:pb-20 overflow-hidden">
      
      {/* ✨ Background Glow Orb */}
      <div className="absolute top-[-200px] left-[-200px] w-[900px] h-[900px] bg-[#BC9D5D] rounded-full opacity-10 blur-3xl animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[900px] h-[900px] bg-[#BC9D5D] rounded-full opacity-10 blur-3xl animate-pulse-slow pointer-events-none z-0" />

      <div className="container px-4 md:px-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="text-xl md:text-2xl mb-2 text-[#BC9D5D]">_ABOUT</div>
            <div className="text-3xl md:text-5xl font-['Orbitron'] mb-2 text-white">
              THE ALGORITHMIC
            </div>
            <div className="text-3xl md:text-5xl font-['Orbitron'] text-white border-b-4 border-[#BC9D5D] inline-block w-fit pb-1">
              TRADING CLUB
            </div>
          </div>
          <div>
            <div className="text-sm md:text-base text-gray-200">
              <p className="mb-4 md:mb-10">
                Established in 2019, the Algorithmic Trading Club, previously
                known as the Financial Engineering Club, ardently steers
                students through the dynamic realm of quantitative finance and
                financial engineering.
              </p>
              <p>
                Our unwavering dedication is centered on equipping members with
                practical proficiency, encompassing fundamental Python
                programming to sophisticated data science methodologies.
              </p>
            </div>
          </div>
        </div>

        {/* ✨ Glossy Cards with Gold Accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 md:my-16">
          {[
            "QUANTITATIVE FINANCE EXPERTISE",
            "INDUSTRY READY",
            "EDUCATIONAL WORKSHOPS",
          ].map((text, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-[#BC9D5D]/30 rounded-xl p-6 md:p-10 text-2xl md:text-3xl text-white min-h-[200px] md:min-h-[320px] flex items-center justify-center text-center shadow-md"
              style={{
                fontFamily: "Orbitron",
                textShadow: "0 0 4px #BC9D5D55",
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
