import { useEffect, useState } from "react";
import { getExecutiveSummary } from "../api/mock";

const ExecutiveSection = () => {
  interface Executive {
    name: string;
    title: string;
    imageUrl: string;
  }

  const [executives, setExecutives] = useState<{ [key: string]: Executive }>(
    {}
  );

  useEffect(() => {
    (async () => {
      const response = await getExecutiveSummary();
      console.log(response);
      if (response) {
        console.log(response.data);
        setExecutives(response.data);
      }
    })();
  }, []);

  return (
    <div className="flex justify-center pt-40">
      <div className="container">
        <div className="w-full">
          <div className="text-2xl">_MEET THE TEAM</div>
          <div
            className="text-5xl font-bold"
            style={{ fontFamily: "Orbitron" }}
          >
            THE EXECUTIVE OF ATC
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 mt-20">
          {Object.keys(executives).map((key) => (
            <div
              key={key}
              className="bg-[#242140] flex-col m-8 border border-6 border-amber-200"
            >
              <div
                className="pt-36 pl-6 text-3xl pr-16"
                style={{ fontFamily: "Orbitron" }}
              >
                <div
                  style={{ fontFamily: "Orbitron" }}
                  className=" min-h-[80px] text-4xl"
                >
                  {executives[key].name.toUpperCase()}
                </div>
                <div className="text-2xl min-h-[80px]">
                  {executives[key].title}
                </div>
              </div>
              <div className="flex mt-10 w-full justify-end items-end">
                <div
                  className="w-full"
                  style={{
                    backgroundImage: `url("${executives[key].imageUrl}")`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "312px",
                    maxWidth: "312px",
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
