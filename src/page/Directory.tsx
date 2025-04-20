import MemoizedExecutiveSection from "../component/ExecutiveSection";
import MemoizedMembersSection from "../component/MemberSection";

const Directory = () => {
    return (
        <div className="mb-20">
            <MemoizedExecutiveSection />
            <MemoizedMembersSection />
        </div>
    );
}

export default Directory;