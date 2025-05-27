const DefaultFooter = () => {
  return (
    <footer className="w-full bg-white text-[#2F1947] border-t border-gray-200 shadow-[0_-8px_30px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center text-sm font-medium">
        <div className="mb-2 lg:mb-0 text-center lg:text-left">
          University of Washington, Seattle, WA, 98195
        </div>
        <div className="text-center lg:text-right">
          ©2025 Algorithmic Trading Club @ UW. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default DefaultFooter;
