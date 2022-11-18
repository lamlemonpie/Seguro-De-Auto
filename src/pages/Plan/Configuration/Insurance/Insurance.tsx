import React from "react";
import { useViewport } from "../../../../shared/contexts/ViewportProvider";
import InsuranceHeader from "./InsuranceHeader";
import ShowMoreIndicator from "./ShowMoreIndicator";
import AddButton from "./AddButton";

interface InsuranceProps {
  icon: string;
  title: string;
  text: string;
}

export const Insurance: React.FC<InsuranceProps> = ({ icon, title, text }) => {
  const { width, small_screen } = useViewport();
  const [more, setMore] = React.useState(false);

  const handleMore = () => {
    setMore(!more);
  };

  const [active, setActive] = React.useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <div className="plan__insurance_container">
      <InsuranceHeader
        icon={icon}
        title={title}
        showMore={more}
        handleMore={handleMore}
        active={active}
        handleActive={handleActive}
      />

      {width >= small_screen && (
        <AddButton active={active} handleActive={handleActive} />
      )}

      {more && <p className="plan__insurance-text">{text}</p>}

      {width < small_screen && (
        <ShowMoreIndicator showMore={more} onClick={handleMore} />
      )}
    </div>
  );
};
