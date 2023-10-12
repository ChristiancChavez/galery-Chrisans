import React, { FC, useState, useContext, useMemo, createContext, ReactNode, SetStateAction } from 'react';

interface ClientListContextType {
  userProfileState: {
    nameLastName: string,
    account: number,
    address: string,
    neighborhood: string,
    phone: number,
    personalContact: string,
    paymentDate: string,
    payments: number,
    totalValue: number
  }[];
  setClientListState: React.Dispatch<SetStateAction<{
    nameLastName: string,
    account: number,
    address: string,
    neighborhood: string,
    phone: number,
    personalContact: string,
    paymentDate: string,
    payments: number,
    totalValue: number
  }[]>>;
}

export const ClientListContext = createContext<ClientListContextType | null>(null);

const ClientListProvider: FC<ReactNode> = ({ children }) => {
  const [userProfile, setUserProfile] = useState([
    {
      nameLastName: '',
      account: 0,
      address: '',
      neighborhood: '',
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

  if (clientInfoContext === null) {
    throw new Error('You need to use this context inside a ClientListProvider');
  }
  return clientInfoContext;
}
export default ClientListProvider;
