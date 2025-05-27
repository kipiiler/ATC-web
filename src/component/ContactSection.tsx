const ContactSection = () => {
  return (
    <div className="relative flex justify-center py-24 text-white overflow-hidden">
    
      <div className="container z-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center">
          <div className="md:col-span-2 mb-12 md:mb-0">
            <div className="pl-2 md:pl-8">
              <div className="text-xl md:text-2xl text-[#BC9D5D] mb-2">_CONTACT</div>
              <h2 className="text-4xl md:text-5xl font-['Orbitron'] border-b-4 border-[#BC9D5D] inline-block pb-1">
                GET IN TOUCH
              </h2>
            </div>
          </div>

          <div className="md:col-span-3 flex justify-start md:justify-end">
            <div className="space-y-4 text-xl md:text-2xl">
              <div>
                <a
                  href="mailto:atc@uw.edu"
                  className="hover:text-[#BC9D5D] transition-colors"
                >
                  EMAIL
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/atc.uw/"
                  className="hover:text-[#BC9D5D] transition-colors"
                  target="_blank"
                >
                  INSTAGRAM
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/algorithmic-trading-club-at-uw/"
                  className="hover:text-[#BC9D5D] transition-colors"
                  target="_blank"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;