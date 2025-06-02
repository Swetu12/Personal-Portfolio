import React from "react";

const SectionBadge = ({ section }: { section: string }) => {
  return (
    <div
      className={`section-bg-color text-white px-3 py-1 shadow-xl rounded-full`}
    >
      {section}
    </div>
  );
};
export default SectionBadge;
