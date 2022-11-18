import React, { ReactNode } from "react";

const SMALL_SCREEN = 900;

interface ContextValueTypes {
  width: number;
  height: number;
  small_screen: number;
}

interface ViewportProviderProps {
  children?: ReactNode;
}

const viewportContext = React.createContext<ContextValueTypes | null>(null);

export const ViewportProvider: React.FC<ViewportProviderProps> = ({
  children,
}) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider
      value={{ width, height, small_screen: SMALL_SCREEN }}
    >
      {children}
    </viewportContext.Provider>
  );
};

export const useViewport = () => {
  const context = React.useContext(viewportContext);

  if (context === null) {
    throw new Error("useViewport must be used within a ViewportProvider");
  }

  const { width, height, small_screen } = context;

  return { width, height, small_screen };
};
