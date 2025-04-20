import React from "react";
import { People } from "../types/People";

  
const PeopleCard = React.memo(({ executive }: { executive: People }) => (
<div className="bg-[#242140] flex flex-col border border-amber-200 p-4 md:p-0 md:pt-6 md:pl-6">
    <div className="flex-grow">
    <h3 className="font-['Orbitron'] text-xl md:text-3xl mb-3 md:pr-6">
        {executive.name.toUpperCase()}
    </h3>
    <p className="text-lg md:text-xl mb-4 md:mb-8">
        {executive.title.toUpperCase()}
    </p>
    </div>
    <div className="flex mt-6 w-full justify-end items-end">
    <picture>
        <source media="(min-width: 1024px)" srcSet={executive.imageUrl} />
        <img
        src={executive.imageUrl}
        alt={`${executive.name} - ${executive.title}`}
        className="w-48 md:w-full h-48 md:h-48 lg:h-64 lg:w-64 object-cover"
        loading="lazy"
        />
    </picture>
    </div>
</div>
));
  
export default PeopleCard;
