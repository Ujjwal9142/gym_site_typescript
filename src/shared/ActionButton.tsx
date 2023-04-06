import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  children: React.ReactNode;
};

const ActionButton = ({ setSelectedPage, children }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ConatctUs)}
      href={`#${SelectedPage.ConatctUs}`}
      className="rounded-md bg-secondary-500 py-2 px-10 transition duration-200 hover:bg-primary-500 hover:text-white"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
