import MemoizedExecutiveSection from "../component/ExecutiveSection";
import MemoizedMembersSection from "../component/MemberSection";

const Directory = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#3B2C4F] text-white overflow-hidden px-6 md:px-20 pt-28 pb-16">
      
      <div className="absolute -top-60 -left-60 w-[900px] h-[900px] bg-[#BC9D5D] rounded-full opacity-10 blur-[200px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-[-300px] right-[-300px] w-[1000px] h-[1000px] bg-[#BC9D5D] opacity-10 rounded-full blur-[200px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[-150px] w-[600px] h-[600px] bg-[#BC9D5D] rounded-full opacity-5 blur-[200px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#BC9D5D] opacity-7 rounded-full blur-[180px] animate-pulse-slow pointer-events-none z-0" />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-[260px] h-[260px] bg-[#A28CBF] opacity-20 blur-[600px] rounded-full" />
        <div className="absolute top-[60%] left-[40%] w-[320px] h-[320px] bg-[#9D79B9] opacity-15 blur-[300px] rounded-full" />
        <div className="absolute top-[30%] right-[5%] w-[180px] h-[180px] bg-[#C4B3DC] opacity-20 blur-[700px] rounded-full" />

        <div className="absolute top-[75%] left-[15%] w-[240px] h-[240px] bg-[#4A3C5B] opacity-25 blur-[600px] rounded-full" />
        <div className="absolute bottom-[10%] right-[25%] w-[200px] h-[200px] bg-[#5D3F6A] opacity-15 blur-[500px] rounded-full" />
        <div className="absolute top-[45%] left-[70%] w-[300px] h-[300px] bg-[#6A4F7B] opacity-18 blur-[800px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-0">
        <MemoizedExecutiveSection />
        <MemoizedMembersSection />
      </div>
    </div>
  );
};

export default Directory;