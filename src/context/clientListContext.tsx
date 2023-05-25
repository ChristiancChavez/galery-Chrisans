import React, { FC, useState, useContext, useMemo } from 'react';

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

  const memoizedClientListContext = useMemo(
    () => ({
      userProfileState: userProfile, 
      setClientListState: setUserProfile
    }),[userProfile, setUserProfile]
  )

  return (
    <ClientListContext.Provider value={memoizedClientListContext}>
      {children}
    </ClientListContext.Provider>
  );
}

export const useClientInfoContext = () => {
  const clientInfoContext = useContext(ClientListContext);

  if(!useClientInfoContext) throw new Error('You need to use this context inside');

  return clientInfoContext;
}
export default ClientListProvider;
