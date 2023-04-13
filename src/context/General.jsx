'use client';

import React from 'react';
import { createContext, useContext, useState } from 'react';

const GeneralContext = createContext({});

export const GeneralContextProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    return (
        <GeneralContext.Provider value={{ show, setShow }}>
            {children}
        </GeneralContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GeneralContext);

