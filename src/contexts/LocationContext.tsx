import { createContext, useContext, useState } from "react";

interface Location {
  city: string;
  state: string;
}

interface LocationProps {
  changeLocation: ({ city, state }: Location) => void;
  location: Location;
}

const LocationContext = createContext({} as LocationProps);

interface LocationProvider {
  children: React.ReactNode;
}

export const LocationProvider = ({ children }: LocationProvider) => {
  const [location, setLocation] = useState({} as Location);

  const changeLocation = ({ city, state }: Location) => {
    setLocation({ city, state });
  };

  return (
    <LocationContext.Provider value={{ location, changeLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  return useContext(LocationContext);
};
