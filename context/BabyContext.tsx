import React, { createContext, useContext, useState, useEffect } from "react";

export const BabyContext = createContext(null);

export const BabyProvider = ({ children }: { children: React.ReactNode }) => {
  const [babyInfo, setBabyInfo] = useState({
    name: "",
    birthDate: "",
    gender: "",
    bloodType: "",
    birthWeight: "",
    currentWeight: "",
    theme: "sade",
  });

  useEffect(() => {
    const kayitliVeri = localStorage.getItem("bebiko-veri");
    if (kayitliVeri) {
      setBabyInfo(JSON.parse(kayitliVeri));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bebiko-veri", JSON.stringify(babyInfo));
  }, [babyInfo]);

  return (
    <BabyContext.Provider value={{ babyInfo, setBabyInfo }}>
      {children}
    </BabyContext.Provider>
  );
};

export const useBaby = () => useContext(BabyContext);
