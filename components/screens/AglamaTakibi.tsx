import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AglamaTakibi() {
  const [aglamaKaydi, setAglamaKaydi] = useState({
    neden: "Açlık",
    zaman: new Date().toLocaleString(),
  });

  const handleKaydet = () => {
    console.log("Ağlama Kaydı:", aglamaKaydi);
  };

  return (
    <section className="bg-red-50 rounded-2xl p-4 max-w-2xl mx-auto space-y-4 mt-10">
      <h2 className="text-xl font-semibold text-center">😢 Ağlama Takibi</h2>

      <select
        value={aglamaKaydi.neden}
        onChange={(e) => setAglamaKaydi({ ...aglamaKaydi, neden: e.target.value })}
        className="w-full border p-2 rounded"
      >
        <option>Açlık</option>
        <option>Gaz</option>
        <option>Uykusuzluk</option>
        <option>Huzursuzluk</option>
      </select>

      <Button onClick={handleKaydet} className="w-full">💾 Kaydet</Button>
    </section>
  );
}
