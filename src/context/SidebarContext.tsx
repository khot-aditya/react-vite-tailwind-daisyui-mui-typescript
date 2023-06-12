import { FC, useState, createContext } from 'react';
type GlobalContext = {
  // sidebarToggle: any;
  // toggleSidebar: () => void;
  // closeSidebar: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const GlobalContext = createContext<GlobalContext>(
  {} as GlobalContext
);

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: FC<Props> = ({ children }) => {
  // const [sidebarToggle, setSidebarToggle] = useState(false);
  // const toggleSidebar = () => {
  //   setSidebarToggle(!sidebarToggle);
  // };
  // const closeSidebar = () => {
  //   setSidebarToggle(false);
  // };

  return (
    <GlobalContext.Provider
      value={{
        // sidebarToggle,
        // toggleSidebar,
        // closeSidebar
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
