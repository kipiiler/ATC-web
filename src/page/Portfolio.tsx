import { useState, useEffect } from "react";
import { getPortfolio } from "../api/mock";
import ContactSection from "../component/ContactSection";

interface Portfolio {
  name: string;
  amount: number;
  change: number;
}

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPortfolios = async () => {
      const result = await getPortfolio();
      setPortfolios(Object.values(result.data));
    };
    fetchPortfolios();
  }, []);

  const filteredPortfolios = portfolios.filter((portfolio) =>
    portfolio.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="p-6 container min-h-[700px] mt-10 mb-32">
          <h1
            className="text-white font-bold mb-6 text-5xl"
            style={{ fontFamily: "Orbitron" }}
          >
            TRADE PORTFOLIOS
          </h1>
          <div className="mb-4 border-white border-2 w-5/12">
            <input
              type="text"
              placeholder="SEARCH FOR TRADER"
              className="w-full p-2 appearance-none bg-transparent focus:outline-none border-none bg-indigo-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex justify-between py-8 pl-4 pr-10">
            <div className="text-white text-3xl">NAME/PORTFOLIO LINK</div>
            <div className="text-white text-3xl">RETURNS</div>
          </div>
          <div>
            {filteredPortfolios.map((portfolio, index) => (
              <div
                key={index}
                className={`${
                  index % 2 ? "bg-[#242140]" : "bg-indigo-800"
                } py-6 px-8 flex justify-between items-center border-b border-white`}
              >
                <div>
                  <div
                    className="text-white font-thin text-3xl"
                    style={{ fontFamily: "Orbitron" }}
                  >
                    {portfolio.name}
                  </div>
                  <div className="text-indigo-300 text-sm">
                    portfolio-link.pdf
                  </div>
                </div>
                <div className="text-right flex space-x-5 items-center">
                  <div className="text-white font-thin text-2xl">
                    {portfolio.amount.toLocaleString()}
                  </div>
                  <div
                    className="white border-2 rounded-xl border-white py-1 px-3 text-md"
                    style={{ fontFamily: "Orbitron" }}
                  >
                    + {(portfolio.change * 100).toFixed(0)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Portfolio;
