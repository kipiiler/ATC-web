import { useState } from "react";

const NewsSection = () => {
  // Sample news data - replace with your actual news items
  const allNewsItems = [
    {
      id: 31,
      title: "[Huskyholdem](https://huskyholdem.atcuw.org/) is offcially launch!",
      date: "April 2025",
      description: "Huskyholdem is a poker bot game designed for students at the University of Washington by our club. It is a fun and engaging way to learn about poker strategy and pratice your programming skills.",
      category: "Event",
      hasDetails: true,
      link: ""
    },
    {
      id: 12,
      title: "Congrat to [Ishan Sinha](https://www.linkedin.com/in/ishan-sinha-7b74b51aa/) and [Ishan Gupta](https://www.linkedin.com/in/ishangu/) on participating in [DE Shaw Connect Program](https://www.linkedin.com/company/d.-e.-shaw-&-co./)!",
      date: "March 2025",
      description: "",
      category: "Career",
      hasDetails: false,
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
  const [viewMode, setViewMode] = useState("detailed"); // "compact" or "detailed"
  
  const displayedNews = showAllNews ? allNewsItems : allNewsItems.slice(0, 6);

  const toggleShowAll = () => {
    setShowAllNews(!showAllNews);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === "compact" ? "detailed" : "compact");
  };

  // Function to convert markdown links to HTML
  const parseMarkdownLinks = (text: string) => {
    if (!text) return text;
    
    // Regular expression to match markdown links: [text](url)
    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    
    // Process the text and replace markdown links with HTML links
    const htmlText = text.replace(markdownLinkRegex, (_: any, linkText: string, url: string) => {
      return `<a href="${url}" class="text-blue-400 hover:text-pink-400 hover:underline transition-colors" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
    });
    
    // If there were no changes, return the original text
    if (htmlText === text) {
      return text;
    }
    
    // If there were changes, we need to return a React element with dangerouslySetInnerHTML
    return <span dangerouslySetInnerHTML={{ __html: htmlText }} />;
  };

  // Compact news item component
  const CompactNewsItem = ({ item }: any) => (
    <div 
      className="border-b border-gray-700 py-3 px-2 hover:bg-gray-800/30 transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
    >
      <div className="flex items-center gap-3">
        <span className={`
          text-xs text-gray-900 py-1 px-2 font-bold rounded-sm
          ${item.category === "Workshop" ? "bg-pink-500" : ""}
          ${item.category === "Event" ? "bg-blue-500" : ""}
          ${item.category === "Competition" ? "bg-lime-500" : ""}
          ${item.category === "Research" ? "bg-purple-500" : ""}
          ${item.category === "Opportunity" ? "bg-amber-500" : ""}
          ${item.category === "Announcement" ? "bg-cyan-500" : ""}
          ${item.category === "Career" ? "bg-emerald-500" : ""}
        `}>
          {item.category}
        </span>
        <h3 className="text-sm font-medium">{parseMarkdownLinks(item.title)}</h3>
      </div>
      <div className="flex items-center justify-between sm:justify-end gap-4">
        <span className="text-gray-400 text-xs">{item.date}</span>
        {item.link != "" && (
          <button className={`text-blue-400 hover:text-pink-400 text-xs flex items-center group`}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                Read more
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );

  // Detailed news item component
  const DetailedNewsItem = ({ item }: any) => (
    <div 
      className="border-b border-gray-700 pb-5 hover:bg-gray-800/30 transition-all p-3"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <div className="flex items-center gap-3 mb-1 sm:mb-0">
          <span className={`
            text-xs text-gray-900 py-1 px-2 font-bold rounded-sm
            ${item.category === "Workshop" ? "bg-pink-500" : ""}
            ${item.category === "Event" ? "bg-blue-500" : ""}
            ${item.category === "Competition" ? "bg-lime-500" : ""}
            ${item.category === "Research" ? "bg-purple-500" : ""}
            ${item.category === "Opportunity" ? "bg-amber-500" : ""}
            ${item.category === "Announcement" ? "bg-cyan-500" : ""}
            ${item.category === "Career" ? "bg-emerald-500" : ""}
          `}>
            {item.category}
          </span>
          <span className="text-gray-400 text-xs">{item.date}</span>
        </div>
        {item.link != "" && (
          <button className={`text-blue-400 hover:text-pink-400 text-xs flex items-center group`}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                Read more
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        )}
      </div>
      <h3 className="text-base font-['Orbitron'] mb-1">{parseMarkdownLinks(item.title)}</h3>
      {item.hasDetails && item.description && (
        <p className="text-gray-400 text-sm">{item.description}</p>
      )}
    </div>
  );

  return (
    <div className="bg-gray-900 flex justify-center py-16 md:py-24">
      <div className="container px-4 md:px-20">
        <div className="mb-8 md:mb-12">
          <div className="text-xl md:text-2xl mb-2">_NEWS</div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <div className="text-3xl md:text-5xl font-['Orbitron'] mb-1">
                LATEST UPDATES
              </div>
              <div className="text-3xl md:text-5xl font-['Orbitron']">
                AND ANNOUNCEMENTS
              </div>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <button 
                onClick={toggleViewMode}
                className={`px-3 py-1 text-xs border ${viewMode === "compact" ? 'border-blue-500 text-blue-500' : 'border-gray-600 text-gray-400'}`}
              >
                COMPACT
              </button>
              <button 
                onClick={toggleViewMode}
                className={`px-3 py-1 text-xs border ${viewMode === "detailed" ? 'border-blue-500 text-blue-500' : 'border-gray-600 text-gray-400'}`}
              >
                DETAILED
              </button>
            </div>
          </div>
        </div>

        <div className="border-gray-700 rounded">
          <div className="flex flex-col">
            {displayedNews.map((item) => (
              viewMode === "compact" ? 
                <CompactNewsItem key={item.id} item={item} /> : 
                <DetailedNewsItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="flex justify-center py-4 border-t border-gray-700">
            <button 
              onClick={toggleShowAll}
              className="text-blue-400 hover:text-pink-400 text-sm flex items-center group"
            >
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