const ContactSection = () => {
  return (
    <div className="bg-[#242140] flex justify-center mt-20 pt-20 mp-40">
      <div className="container pt-20 pb-20">
        <div className="grid grid-cols-5">
          <div className="col-span-2 h-full">
            <div className="flex-col pl-20 h-full items-center">
              <div className="text-5xl" style={{ fontFamily: "Orbitron" }}>
                GET IN TOUCH
              </div>
              <div className="mt-60">
                <div className="text-2xl my-2">
                  <a href="mailto:atc@uw.edu">EMAIL</a>
                </div>
                <div className="text-2xl my-2">
                  <a href="https://instagram.com">
                    {"instagram".toUpperCase()}
                  </a>
                </div>
                <div className="text-2xl my-2">
                  {" "}
                  <a href="https://linkedin.com">{"Linkedin".toUpperCase()}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 flex w-full justify-end">
            {" "}
            {/* Modified */}
            <div className="border-2 border-amber-200 px-40 py-20">
              <div className="w-full my-10 text-3xl">JOIN OUR NEWSLETTER</div>
              <div className="w-3/5">
                <div className="border-b border-white py-2 w-96">
                  <input
                    className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="NAME"
                    aria-label="Full name"
                  />
                </div>
                <div className="border-b border-white py-2  w-96">
                  <input
                    className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="EMAIL ADDRESS"
                    aria-label="Full name"
                  />
                </div>
                <div className="w-96 flex justify-end">
                  <button className="text-white border-white border text-1xl py-2 px-4 rounded-2xl mt-10">
                    SIGN UP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
