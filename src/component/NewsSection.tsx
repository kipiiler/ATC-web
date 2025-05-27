import { useState } from "react";

const NewsSection = () => {
  const allNewsItems = [
    {
      id: 100,
      title: "Congrats to [Bhaumik Mehta](https://www.linkedin.com/in/bhaumik-m/) and [Patricia Dao](https://www.linkedin.com/in/patricia-d-382882301/) for their sixth month in [Goldman Sach's Possibilities Summit](https://www.goldmansachs.com/careers/students/programs-and-internships/americas/possibilities-summits)",
      date: "April 2025",
      description: "",
      category: "Career",
      hasDetails: true,
      link: ""
    },
    {
      id: 101,
      title: "Congrats to [Patricia Dao](https://www.linkedin.com/in/patricia-d-382882301/) for presenting her work at the [2025 Pacific Northwest Section of the Mathematical Association of America](https://faculty.washington.edu/etou/maapnw2025/home.html)",
      date: "April 2025",
      description: "",
      category: "Research",
      hasDetails: true,
      link: ""
    },
    // {
    //   id: 31,
    //   title: "[Huskyholdem](https://huskyholdem.atcuw.org/) is offcially launched!",
    //   date: "April 2025",
    //   description: "Huskyholdem is a poker bot game designed for students at the University of Washington by our club. It is a fun and engaging way to learn about poker strategy and pratice your programming skills.",
    //   category: "Event",
    //   hasDetails: true,
    //   link: ""
    // },
    {
      id: 12,
      title: "Congrats to [Ishan Sinha](https://www.linkedin.com/in/ishan-sinha-7b74b51aa/) and [Ishan Gupta](https://www.linkedin.com/in/ishangu/) on participating in [DE Shaw Connect Program](https://www.linkedin.com/company/d.-e.-shaw-&-co./)!",
      date: "March 2025",
      description: "",
      category: "Career",
      hasDetails: false,
      link: ""
    },
    {
      id: 13,
      title: "Congrats to [Jack Li](https://www.linkedin.com/in/jack-li-890a0623b/) on participating in [DE Shaw Nexus Fellowship](https://fellowships.deshaw.com/)!",
      date: "March 2025",
      description: "In the DE Shaw Nexus Fellowship, Jack worked with top undergraduates from around the U.S. in learning about quantitative finance. During that time, he listened to lectures from DE Shaw employees, professors, and industry professionals on finance and market behavior, and learned about day-to-day operations at the quant firm.",
      category: "Career",
      hasDetails: true,
      link: ""
    },
    {
      id: 1,
      title: "Congrats to [Bhavesh Kumar](https://www.linkedin.com/in/bhavkumar/) for presenting his [work](https://www.researchgate.net/publication/389739949_Enhancing_Simple_Moving_Average_Strategies_with_Reinforcement_Learning_A_Q-Learning_Approach) at [2024 IEEE Symposium on Computational Intelligence for Financial Engineering and Economics](https://ieeexplore.ieee.org/xpl/conhome/10772730/proceeding)!",
      date: "October 2025",
      description: "Join us for our upcoming Python for Finance workshop series starting next week. Learn algorithmic trading basics and advanced techniques.",
      category: "Research",
      hasDetails: false,
      link: ""
    },
    {
      id: 2,
      title: "Congrats to [Jack Li](https://www.linkedin.com/in/jack-li-890a0623b/) for participating at [Jane Street's first year trading and technology program](https://www.janestreet.com/join-jane-street/programs-and-events/fttp/)",
      date: "March 2025",
      description: "Last week's guest speaker shared insights on how quantitative strategies are reshaping market dynamics.",
      category: "Career",
      hasDetails: false,
      link: "https://www.example.com/speaker"
    },
    {
      id: 3,
      title: "Introduction to strategy replication from presented by Parametric quant developer",
      date: "March 28, 2025",
      description: "Join us for a talk on Strategy Replication in Quantitative Research, led by a speaker from Parametric. Learn how replicating investment strategies serves as a foundational task for quant interns, and how it reveals the distinct roles and collaboration between quant researchers, developers, and traders within a firm.",
      category: "Workshop",
      hasDetails: true,
      link: "",
    },
    {
      id: 4,
      title: "ATC member winning Jane Street Estimathon competition",
      date: "Feb 7, 2025",
      description: "Proud to share that ATC had a strong showing at the Jane Street Estimathon at the University of Washington this Monday! Congratulations to our members Jasper, Jack, Luke, and Siddharth for winning the competition, tackling 13 Fermi estimation problems in just 30 minutes.",
      category: "Competition",
      hasDetails: true,
      link: "https://www.instagram.com/p/DFyJVspyzJC/"
    },
    {
      id: 5,
      title: "Panel with [Snehal Verma](https://www.linkedin.com/in/snehalverma10/), a UC Berkeley '24 grad who ranked in the top 0.01% of Jane Street's recent Kaggle competition.",
      date: "Jan 22, 2025",
      description: " We’ll explore key strategies to do well in this competition format, developing valuable skills for standing out in both future Kaggle challenges and real-world quantitative finance roles. Join us in Sieg Hall - SIG 226, from 5:00–6:00 PM.",
      category: "Workshop",
      hasDetails: true,
      link: ""
    },
    {
      id: 6,
      title: "Market Making Game Competition",
      date: "November 12, 2025",
      category: "Event",
      description: "Kick off the new year with our Market Making Game competition! Test your skills in a simulated trading environment and compete for prizes.",
      hasDetails: true,
      link: ""
    },
    {
      id: 7,
      title: "Club Elections Results",
      date: "March 5, 2025",
      description: "Congratulations to our newly elected board members who will lead the club through the 2025-2026 academic year.",
      category: "Announcement",
      hasDetails: true,
      link: ""
    },
  ];
  const [showAllNews, setShowAllNews] = useState(false);
  const [viewMode, setViewMode] = useState("detailed");

  const displayedNews = showAllNews ? allNewsItems : allNewsItems.slice(0, 6);
  const toggleShowAll = () => setShowAllNews(!showAllNews);
  const toggleViewMode = () => setViewMode(viewMode === "compact" ? "detailed" : "compact");

  const parseMarkdownLinks = (text: string) => {
    if (!text) return text;
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const htmlText = text.replace(markdownLinkRegex, (_: any, linkText: string, url: string) => {
      return `<a href="${url}" class="text-[#BC9D5D] transition-colors" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
    });
    return htmlText === text ? text : <span dangerouslySetInnerHTML={{ __html: htmlText }} />;
  };

  const CompactNewsItem = ({ item }: any) => (
    <div className="relative my-2 rounded-md overflow-hidden shadow-md">
      <div
        className="absolute inset-0 rounded-md border border-white/20 backdrop-blur-[10px] bg-white/10 pointer-events-none z-0"
        style={{
          maskImage: 'radial-gradient(circle at center, transparent 35%, black 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, transparent 35%, black 100%)'
        }}
      />
      
      <div className="relative z-10 p-4 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className={`text-xs text-gray-900 py-1 px-2 font-bold rounded-sm ${item.category === "Workshop" ? "bg-pink-500" : ""}${item.category === "Event" ? "bg-blue-500" : ""}${item.category === "Competition" ? "bg-lime-500" : ""}${item.category === "Research" ? "bg-purple-500" : ""}${item.category === "Opportunity" ? "bg-amber-500" : ""}${item.category === "Announcement" ? "bg-cyan-500" : ""}${item.category === "Career" ? "bg-emerald-500" : ""}`}>{item.category}</span>
          <h3 className="text-sm font-medium text-white">{parseMarkdownLinks(item.title)}</h3>
        </div>
        <span className="text-gray-300 text-xs">{item.date}</span>
      </div>
    </div>
  );

  const DetailedNewsItem = ({ item }: any) => (
    <div className="relative my-4 rounded-md overflow-hidden shadow-md">
      <div
        className="absolute inset-0 rounded-md border border-white/20 backdrop-blur-[10px] bg-white/10 pointer-events-none z-0"
        style={{
          maskImage: 'radial-gradient(circle at center, transparent 35%, black 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, transparent 35%, black 100%)'
        }}
      />
      
      <div className="relative z-10 p-5 transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
          <div className="flex items-center gap-3 mb-1 sm:mb-0">
            <span className={`text-xs text-gray-900 py-1 px-2 font-bold rounded-sm ${item.category === "Workshop" ? "bg-pink-500" : ""}${item.category === "Event" ? "bg-blue-500" : ""}${item.category === "Competition" ? "bg-lime-500" : ""}${item.category === "Research" ? "bg-purple-500" : ""}${item.category === "Opportunity" ? "bg-amber-500" : ""}${item.category === "Announcement" ? "bg-cyan-500" : ""}${item.category === "Career" ? "bg-emerald-500" : ""}`}>{item.category}</span>
            <span className="text-gray-300 text-xs">{item.date}</span>
          </div>
        </div>
        <h3 className="text-base font-['Orbitron'] text-white mb-1">{parseMarkdownLinks(item.title)}</h3>
        {item.hasDetails && item.description && (
          <p className="text-gray-300 text-sm">{item.description}</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="relative flex items-center w-full justify-center py-24 text-white overflow-hidden">
      <div className="container px-4 md:px-20 z-10">
        <div className="mb-12">
          <div className="text-xl md:text-2xl text-[#BC9D5D] mb-2">_NEWS</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <div className="text-3xl md:text-5xl font-['Orbitron'] mb-1">LATEST UPDATES</div>
              <div className="text-3xl md:text-5xl font-['Orbitron'] border-b-4 border-[#BC9D5D] inline-block w-fit pb-1">AND ANNOUNCEMENTS</div>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <button onClick={toggleViewMode} className={`px-3 py-1 text-xs border ${viewMode === "compact" ? 'border-yellow-400 text-yellow-400' : 'border-white/30 text-white/60'}`}>COMPACT</button>
              <button onClick={toggleViewMode} className={`px-3 py-1 text-xs border ${viewMode === "detailed" ? 'border-yellow-400 text-yellow-400' : 'border-white/30 text-white/60'}`}>DETAILED</button>
            </div>
          </div>
        </div>

        <div className="rounded-xl">
          <div className="flex flex-col">
            {displayedNews.map((item) => (
              viewMode === "compact" ? <CompactNewsItem key={item.id} item={item} /> : <DetailedNewsItem key={item.id} item={item} />
            ))}
          </div>
          <div className="flex justify-center py-6">
            <button onClick={toggleShowAll} className="text-[#BC9D5D] text-sm flex items-center group">
              {showAllNews ? "SHOW LESS" : "VIEW ALL NEWS"}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAllNews ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
