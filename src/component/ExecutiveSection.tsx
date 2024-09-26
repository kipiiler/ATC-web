import { useEffect, useState } from "react";
import { getExecutiveSummary } from "../api/mock";

interface Executive {
  name: string;
  title: string;
  imageUrl: string;
}

const ExecutiveSection = () => {
  const [executives, setExecutives] = useState<{ [key: string]: Executive }>(
    {}
  );

  useEffect(() => {
    (async () => {
      const response = await getExecutiveSummary();
      if (response) {
        setExecutives(response.data);
      }
    })();
  }, []);

  return (
    <div className="flex justify-center pt-20 md:pt-40 px-4 md:px-0">
      <div className="container">
        <div className="w-full mb-10 md:mb-20">
          <div className="text-xl md:text-2xl mb-2">_MEET THE TEAM</div>
          <div className="text-3xl md:text-5xl font-bold font-['Orbitron']">
            THE EXECUTIVE OF ATC
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.keys(executives).map((key) => (
            <div
              key={key}
              className="bg-[#242140] flex flex-col border border-amber-200 p-6 md:p-0 md:pt-8 md:pl-8"
            >
              <div className="flex-grow">
                <div className="font-['Orbitron'] text-2xl md:text-4xl mb-4 md:pr-8">
                  {executives[key].name.toUpperCase()}
                </div>
                <div className="text-xl md:text-2xl mb-6 md:mb-10">
                  {executives[key].title.toUpperCase()}
                </div>
              </div>
              <div className="flex mt-10 w-full justify-end items-end">
                <div
                  className="hidden lg:block w-full h-48 md:h-64 lg:h-80 lg:w-80"
                  style={{
                    backgroundImage: `url("${executives[key].imageUrl}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div
                  className="block lg:hidden w-full h-48 md:h-64 lg:h-80 lg:w-80"
                  style={{
                    backgroundImage: `url("${executives[key].imageUrl}")`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSection;
