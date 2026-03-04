import './CompanyPlacements.css';
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

const placementCategories = [
  {
    title: "Quant Finance Firms / Roles",
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
      { name: "Goldman Sachs", url: "https://www.goldmansachs.com/", logo: goldmanSachsLogo },
    ],
  },
  {
    title: "AI Labs",
    companies: [
      { name: "OpenAI", url: "https://openai.com/", logo: openaiLogo },
      { name: "Perplexity", url: "https://www.perplexity.ai/", logo: perplexityLogo },
      { name: "Haze Labs", url: "https://www.haizelabs.com/", logo: hazeLabsLogo },
      { name: "Nous Research", url: "https://nousresearch.com/", logo: nousResearchLogo },
      { name: "Axiom", url: "https://www.axiomatic-ai.com/", logo: axiomLogo },
    ],
  },
  {
    title: "SWE Companies",
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
    <section className="company-placements">
      <h2>Company Placements</h2>

      {placementCategories.map((category) => (
        <div className="placement-category" key={category.title}>
          <h3>{category.title}</h3>
          <ul>
            {category.companies.map((company) => (
              <li key={company.name}>
                <a href={company.url} target="_blank" rel="noopener noreferrer">
                  <img src={company.logo} alt={`${company.name} logo`} />
                  {company.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default CompanyPlacements;