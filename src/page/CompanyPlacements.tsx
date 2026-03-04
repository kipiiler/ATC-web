import amazonLogo from "../assets/images/placements/amazon.png";
import axiomLogo from "../assets/images/placements/axiom.png";
import citadelLogo from "../assets/images/placements/citadel.png";
import databricksLogo from "../assets/images/placements/databricks.png";
import goldmanSachsLogo from "../assets/images/placements/goldman-sachs.png";
import googleLogo from "../assets/images/placements/google.png";
import hazeLabsLogo from "../assets/images/placements/haze-labs.png";
import hudsonRiverTradingLogo from "../assets/images/placements/hudson-river-trading.png";
import imcTradingLogo from "../assets/images/placements/imc-trading.png";
import janeStreetLogo from "../assets/images/placements/jane-street.png";
import jumpTradingLogo from "../assets/images/placements/jump-trading.png";
import metaLogo from "../assets/images/placements/meta.png";
import microsoftLogo from "../assets/images/placements/microsoft.png";
import nousResearchLogo from "../assets/images/placements/nous-research.png";
import nvidiaLogo from "../assets/images/placements/nvidia.png";
import openaiLogo from "../assets/images/placements/openai.png";
import perplexityLogo from "../assets/images/placements/perplexity.png";
import robloxLogo from "../assets/images/placements/roblox.png";
import stripeLogo from "../assets/images/placements/stripe.png";
import sigLogo from "../assets/images/placements/susquehanna-international-group.png";

type PlacementCompany = {
  name: string;
  url: string;
  logo: string;
};

type PlacementCategory = {
  title: string;
  companies: PlacementCompany[];
};

const placementCategories: PlacementCategory[] = [
  {
    title: "QUANT FINANCE FIRMS / ROLES",
    companies: [
      {
        name: "Hudson River Trading",
        url: "https://www.hudsonrivertrading.com/",
        logo: hudsonRiverTradingLogo,
      },
      { name: "Jane Street", url: "https://www.janestreet.com/", logo: janeStreetLogo },
      { name: "Citadel", url: "https://www.citadel.com/", logo: citadelLogo },
      { name: "Susquehanna International Group", url: "https://sig.com/", logo: sigLogo },
      { name: "Jump Trading", url: "https://www.jumptrading.com/", logo: jumpTradingLogo },
      { name: "IMC Trading", url: "https://www.imc.com/", logo: imcTradingLogo },
      {
        name: "Goldman Sachs",
        url: "https://www.goldmansachs.com/",
        logo: goldmanSachsLogo,
      },
    ],
  },
  {
    title: "AI LABS",
    companies: [
      { name: "OpenAI", url: "https://openai.com/", logo: openaiLogo },
      { name: "Perplexity", url: "https://www.perplexity.ai/", logo: perplexityLogo },
      { name: "Haze Labs", url: "https://www.haizelabs.com/", logo: hazeLabsLogo },
      { name: "Nous Research", url: "https://nousresearch.com/", logo: nousResearchLogo },
      { name: "Axiom", url: "https://www.axiomatic-ai.com/", logo: axiomLogo },
    ],
  },
  {
    title: "SWE COMPANIES",
    companies: [
      { name: "Meta", url: "https://about.meta.com/", logo: metaLogo },
      { name: "NVIDIA", url: "https://www.nvidia.com/", logo: nvidiaLogo },
      { name: "Databricks", url: "https://www.databricks.com/", logo: databricksLogo },
      { name: "Stripe", url: "https://stripe.com/", logo: stripeLogo },
      { name: "Roblox", url: "https://www.roblox.com/", logo: robloxLogo },
      { name: "Amazon", url: "https://www.amazon.com/", logo: amazonLogo },
      { name: "Microsoft", url: "https://www.microsoft.com/", logo: microsoftLogo },
      { name: "Google", url: "https://www.google.com/", logo: googleLogo },
    ],
  },
];

const CompanyPlacements = () => {
  return (
    <div className="relative w-full min-h-screen bg-[radial-gradient(ellipse_at_60%_60%,_#3B2C4F_0%,_#5D3F6A_40%,_#8F75AA_75%,_#3B2C4F_100%)] text-white overflow-hidden px-6 md:px-20 pt-28 pb-16">
      <div className="absolute inset-0 grid-background pointer-events-none z-0" />
      <div className="absolute -top-60 -left-60 w-[900px] h-[900px] bg-[#BC9D5D] rounded-full opacity-20 blur-[200px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-[-300px] right-[-300px] w-[1000px] h-[1000px] bg-[#BC9D5D] opacity-15 rounded-full blur-[220px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute top-[50%] left-[-150px] w-[600px] h-[600px] bg-[#BC9D5D] rounded-full opacity-10 blur-[200px] animate-pulse-slow pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#BC9D5D] opacity-10 rounded-full blur-[180px] animate-pulse-slow pointer-events-none z-0" />

      <div className="relative z-10">
        <header className="mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold font-['Orbitron'] border-b-4 border-[#BC9D5D] inline-block pb-1">
            COMPANY PLACEMENTS
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#E7DAF3] max-w-3xl">
            Firms and roles where ATC members have landed internships and full-time
            opportunities.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {placementCategories.map((category) => (
            <article
              key={category.title}
              className="bg-[#242140]/90 border border-[#BC9D5D] p-6 md:p-8 backdrop-blur-sm"
            >
              <h2 className="text-xl md:text-2xl font-bold font-['Orbitron'] text-[#F5E7C2] mb-5">
                {category.title}
              </h2>
              <ul className="space-y-3">
                {category.companies.map((company) => (
                  <li key={company.name}>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm md:text-base text-[#F2EDF7] leading-relaxed border-l-2 border-[#BC9D5D]/70 pl-3 py-1 hover:text-[#BC9D5D] transition-colors"
                    >
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="h-8 w-8 rounded bg-white object-contain p-1"
                      />
                      {company.name}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default CompanyPlacements;