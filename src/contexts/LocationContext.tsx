import { createContext, useContext, useState } from "react";
import { useCartContext } from "./CartContext";

interface Location {
  street: string;
  district: string;
  city: string;
  state: string;
  number: number | null;
  zip: string;
}

interface LocationProps {
  changeLocation: ({ city, state }: Location) => void;
  location: Location;
  allFilled: boolean;
}

const LocationContext = createContext({} as LocationProps);

interface LocationProvider {
  children: React.ReactNode;
}

export const LocationProvider = ({ children }: LocationProvider) => {
  const [location, setLocation] = useState({} as Location);
  const { paymentOption } = useCartContext();

  const changeLocation = ({ city, zip, state, number, district, street }: Location) => {
    setLocation({ city, district, street, state, number, zip });
  };

  const allFilled =
    !!location.city &&
    !!location.state &&
    !!location.number &&
    !!location.district &&
    !!location.street &&
    !!location.zip &&
    !!paymentOption;

  return (
    <LocationContext.Provider value={{ allFilled, location, changeLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  return useContext(LocationContext);
};
