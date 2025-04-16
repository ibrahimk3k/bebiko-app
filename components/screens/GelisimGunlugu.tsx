import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function GelisimGunlugu() {
  const [notlar, setNotlar] = useState("");
  const [seciliKart, setSeciliKart] = useState("");

  const handleKaydet = () => {
    console.log("Gelişim Notu:", notlar);
    console.log("Gelişim Kartı:", seciliKart);
  };

  return (
    <section className="bg-green-50 rounded-2xl p-4 max-w-2xl mx-auto space-y-4 mt-10">
      <h2 className="text-xl font-semibold text-center">📘 Bugün Ne Öğrendik?</h2>

      <textarea
        placeholder="Not Ekle..."
        value={notlar}
        onChange={(e) => setNotlar(e.target.value)}
        className="w-full border p-2 rounded min-h-[100px]"
      />

      <div className="flex gap-2 flex-wrap justify-center">
        {["İlk Kelime", "İlk Adım", "İlk Gülüş"].map((kart) => (
          <Button
            key={kart}
            variant={seciliKart === kart ? "default" : "outline"}
            onClick={() => setSeciliKart(kart)}
          >
            🧩 {kart}
          </Button>
        ))}
      </div>

      <Button onClick={handleKaydet} className="w-full mt-2">📆 Haftalık Özet Kaydet</Button>
    </section>
  );
}
