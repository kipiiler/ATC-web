import React, { useEffect, useState, useMemo } from "react";
import { getMembers } from "../api/mock";
import { People } from "../types/People";
import PeopleCard from "./PeopleCard";

  
interface MemberState {
  data: Record<string, People>;
  isLoading: boolean;
  error: string | null;
}

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

const MembersSection = () => {
  const [state, setState] = useState<MemberState>({
    data: {},
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchExecutives = async () => {
      try {
        const response = await getMembers();
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
        <PeopleCard key={key} executive={executive} />
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
          <h1 className="text-3xl md:text-5xl font-bold font-['Orbitron'] text-white border-b-4 border-[#BC9D5D] inline-block pb-1">
            ALUMNI
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

const MemoizedMembersSection = React.memo(MembersSection);
export default MemoizedMembersSection;
