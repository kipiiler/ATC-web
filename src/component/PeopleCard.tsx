import React from "react";
import { People } from "../types/People";

const PeopleCard = React.memo(({ executive }: { executive: People }) => (
  <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-md">
    {/* Masked frosted background layer */}
    <div
      className="absolute inset-0 bg-white/5 backdrop-blur-md z-0"
      style={{
        maskImage: 'radial-gradient(circle at center, transparent 30%, black 100%)',
        WebkitMaskImage: 'radial-gradient(circle at center, transparent 30%, black 100%)'
      }}
    />

    {/* Opaque content layer */}
    <div className="relative z-10 p-4 md:p-6 flex flex-col text-white">
      <div className="flex-grow">
        <h3 className="font-['Orbitron'] text-xl md:text-3xl mb-3 md:pr-6">
          {executive.name.toUpperCase()}
        </h3>
        <p className="text-lg md:text-xl mb-4 md:mb-8 text-white">
          {executive.title.toUpperCase()}
        </p>
      </div>
      <div className="flex mt-6 w-full justify-end items-end">
        <picture>
          <source media="(min-width: 1024px)" srcSet={executive.imageUrl} />
          <img
            src={executive.imageUrl}
            alt={`${executive.name} - ${executive.title}`}
            className="w-48 md:w-full h-48 md:h-48 lg:h-64 lg:w-64 object-cover rounded shadow-md"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
  </div>
));

export default PeopleCard;