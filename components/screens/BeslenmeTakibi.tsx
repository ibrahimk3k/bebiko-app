import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BeslenmeTakibi() {
  const [beslenmeKaydi, setBeslenmeKaydi] = useState({
    saat: "",
    tur: "Anne Sütü"
  });

  const handleKaydet = () => {
    console.log("Beslenme Kaydı:", beslenmeKaydi);
  };

  return (
    <section className="bg-yellow-50 rounded-2xl p-4 max-w-2xl mx-auto space-y-4 mt-10">
      <h2 className="text-xl font-semibold text-center">🍼 Beslenme Takibi</h2>

      <Input
        type="time"
        value={beslenmeKaydi.saat}
        onChange={(e) => setBeslenmeKaydi({ ...beslenmeKaydi, saat: e.target.value })}
        placeholder="Beslenme Saati"
      />

      <select
        value={beslenmeKaydi.tur}
        onChange={(e) => setBeslenmeKaydi({ ...beslenmeKaydi, tur: e.target.value })}
        className="w-full border p-2 rounded"
      >
        <option>Anne Sütü</option>
        <option>Mama</option>
        <option>Ek Gıda</option>
      </select>

      <Button onClick={handleKaydet} className="w-full">+ Beslenme Kaydını Ekle</Button>
    </section>
  );
}
