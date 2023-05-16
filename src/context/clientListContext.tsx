import React, { FC, useState } from 'react';

interface ClientListContextType {
  userProfileState: {
    NameLastName: string,
    account: number,
    address: string,
    Neighborhood: string,
    phone: number,
    personalContact: string,
    paymentDate: string,
    payments: number,
    totalValue: number
  }[];
  setClientListState: React.Dispatch<React.SetStateAction<{
    NameLastName: string,
    account: number,
    address: string,
    Neighborhood: string,
    phone: number,
    personalContact: string,
    paymentDate: string,
    payments: number,
    totalValue: number
  }[]>>;
}

export const ClientListContext = React.createContext<ClientListContextType | null>(null);

const ClientListProvider: FC<React.ReactNode> = ({ children }) => {
  const [userProfile, setUserProfile] = useState([
    {
      NameLastName: '',
      account: 0,
      address: '',
      Neighborhood: '',
      phone: 0,
      personalContact: '',
      paymentDate: '',
      payments: 0,
      totalValue: 0
    }
  ]);

  return (
    <ClientListContext.Provider value={{ userProfileState: userProfile, setClientListState: setUserProfile }}>
      {children}
    </ClientListContext.Provider>
  );
}

export default ClientListProvider;
