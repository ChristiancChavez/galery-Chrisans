import React, { FC, useState, useContext, useMemo, createContext, ReactNode, SetStateAction } from 'react';


export const ClientListContext = createContext(null);

const ClientListProvider = ({ children }) => {
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
