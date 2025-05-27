import React from "react";
import { People } from "../types/People";

const PeopleCard = React.memo(({ executive }: { executive: People }) => (
  <div className="bg-white/5 hover:bg-white/10 transition-colors duration-300 backdrop-blur-md border border-white/10 rounded-xl p-4 md:p-6 flex flex-col text-white shadow-[0_0_30px_#2F1947aa]">
    <div className="flex-grow">
      <h3 className="font-['Orbitron'] text-xl md:text-3xl mb-3 md:pr-6">
        {executive.name.toUpperCase()}
      </h3>
      <p className="text-lg md:text-xl mb-4 md:mb-8 text-gray-300">
        {executive.title.toUpperCase()}
      </p>
    </div>
    <div className="flex mt-6 w-full justify-end items-end">
      <picture>
        <source media="(min-width: 1024px)" srcSet={executive.imageUrl} />
        <img
          src={executive.imageUrl}
          alt={`${executive.name} - ${executive.title}`}
          className="w-48 md:w-full h-48 md:h-48 lg:h-64 lg:w-64 object-cover rounded shadow-[0_0_30px_#2F1947aa]"
          loading="lazy"
        />
      </picture>
    </div>
  </div>
));

export default PeopleCard;