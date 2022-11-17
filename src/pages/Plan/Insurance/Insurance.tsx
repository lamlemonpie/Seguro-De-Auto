import React from "react";
import InsuranceHeader from "./InsuranceHeader";
import ShowMoreIndicator from "./ShowMoreIndicator";

interface InsuranceProps {
  icon: string;
  title: string;
  text: string;
}

export const Insurance: React.FC<InsuranceProps> = ({ icon, title, text }) => {
  const [more, setMore] = React.useState(false);

  const handleMore = () => {
    setMore(!more);
  };

  return (
    <div className="plan__insurance_container">
      <InsuranceHeader icon={icon} title={title} />

      {more && <p className="plan__insurance-text">{text}</p>}

      <ShowMoreIndicator showMore={more} onClick={handleMore} />
    </div>
  );
};
