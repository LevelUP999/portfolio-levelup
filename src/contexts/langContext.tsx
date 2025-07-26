import React, { createContext, useContext, useState } from "react";

type Lang = "pt-br" | "en";

interface LangContextType {
    lang: Lang;
    changeLang: (newLang: Lang) => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Lang>("pt-br");

    const changeLang = (newLang: Lang) => {
        if (newLang === "pt-br" || newLang === "en") {
            setLang(newLang);
        }
    };

    return (
        <LangContext.Provider value={{ lang, changeLang }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => {
    const context = useContext(LangContext);
    if (!context) {
        throw new Error("useLang deve ser usado dentro de um LangProvider");
    }
    return context;
};