import React, { useEffect, useState, useMemo } from "react";
import { getExecutiveSummary } from "../api/mock";

interface Executive {
  name: string;
  title: string;
  imageUrl: string;
}

interface ExecutivesState {
  data: Record<string, Executive>;
  isLoading: boolean;
  error: string | null;
}

const ExecutiveCard = React.memo(({ executive }: { executive: Executive }) => (
  <div className="bg-[#242140] flex flex-col border border-amber-200 p-6 md:p-0 md:pt-8 md:pl-8">
    <div className="flex-grow">
      <h3 className="font-['Orbitron'] text-2xl md:text-4xl mb-4 md:pr-8">
        {executive.name.toUpperCase()}
      </h3>
      <p className="text-xl md:text-2xl mb-6 md:mb-10">
        {executive.title.toUpperCase()}
      </p>
    </div>
    <div className="flex mt-10 w-full justify-end items-end">
      <picture>
        <source media="(min-width: 1024px)" srcSet={executive.imageUrl} />
        <img
          src={executive.imageUrl}
          alt={`${executive.name} - ${executive.title}`}
          className="w-64 md:w-full h-64 md:h-64 lg:h-80 lg:w-80 object-cover"
          loading="lazy"
        />
      </picture>
    </div>
  </div>
));

ExecutiveCard.displayName = "ExecutiveCard";

const LoadingCard = () => (
  <div className="bg-[#242140] flex flex-col border border-amber-200 p-6 md:p-0 md:pt-8 md:pl-8 animate-pulse">
    <div className="flex-grow">
      <div className="h-8 bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="h-6 bg-gray-700 rounded w-1/2 mb-6"></div>
    </div>
    <div className="flex mt-10 w-full justify-end items-end">
      <div className="w-full h-48 md:h-64 lg:h-80 lg:w-80 bg-gray-700 rounded"></div>
    </div>
  </div>
);

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="col-span-full text-center p-4 bg-red-900 border border-red-500 rounded">
    <h3 className="text-xl font-bold mb-2">Error Loading Executives</h3>
    <p>{message}</p>
  </div>
);

const ExecutiveSection = () => {
  const [state, setState] = useState<ExecutivesState>({
    data: {},
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchExecutives = async () => {
      try {
        const response = await getExecutiveSummary();
        if (isMounted && response) {
          setState((prev) => ({
            ...prev,
            data: response.data,
            isLoading: false,
          }));
        }
      } catch (error) {
        if (isMounted) {
          setState((prev) => ({
            ...prev,
            error: error instanceof Error ? error.message : "An error occurred",
            isLoading: false,
          }));
        }
      }
    };

    fetchExecutives();

    return () => {
      isMounted = false;
    };
  }, []);

  const executiveCards = useMemo(
    () =>
      Object.entries(state.data).map(([key, executive]) => (
        <ExecutiveCard key={key} executive={executive} />
      )),
    [state.data]
  );

  const loadingCards = useMemo(
    () =>
      Array.from({ length: 3 }).map((_, index) => (
        <LoadingCard key={`loading-${index}`} />
      )),
    []
  );

  return (
    <section className="flex justify-center pt-20 md:pt-40 px-4 md:px-0">
      <div className="container">
        <header className="w-full mb-10 md:mb-20">
          <h2 className="text-xl md:text-2xl mb-2">_MEET THE TEAM</h2>
          <h1 className="text-3xl md:text-5xl font-bold font-['Orbitron']">
            THE EXECUTIVE OF ATC
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {state.error ? (
            <ErrorMessage message={state.error} />
          ) : state.isLoading ? (
            loadingCards
          ) : (
            executiveCards
          )}
        </div>
      </div>
    </section>
  );
};

const MemoizedExecutiveSection = React.memo(ExecutiveSection);
export default MemoizedExecutiveSection;
