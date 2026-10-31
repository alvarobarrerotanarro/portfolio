"use client"

import { createContext, FC, ReactNode, useEffect, useState } from "react"

type ClientContextData = {
    isClient: boolean;
};

export const ClientContext = createContext<ClientContextData>({isClient: false});

const ClientContextProvider: FC<{children: ReactNode}> = ({children}) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        if (!isClient) setIsClient(true);
    }, [isClient]);

    return <ClientContext.Provider value={{isClient}}>{children}</ClientContext.Provider>
}

export default ClientContextProvider;