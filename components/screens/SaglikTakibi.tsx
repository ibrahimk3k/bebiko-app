import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SaglikTakibi() {
  const [vitaminAlindi, setVitaminAlindi] = useState(false);
  const [ilac, setIlac] = useState({ saat: "", dozaj: "" });
  const [kilo, setKilo] = useState("");

  const handleKaydet = () => {
    console.log("Vitamin:", vitaminAlindi);
    console.log("İlaç:", ilac);
    console.log("Kilo:", kilo);
  };

  return (
    <section className="bg-pink-50 rounded-2xl p-4 max-w-2xl mx-auto space-y-6 mt-10">
      <h2 className="text-xl font-semibold text-center">⚕️ Sağlık ve Hatırlatmalar</h2>

      <div className="space-y-2">
        <h3 className="font-medium">💊 Vitamin Takibi</h3>
        <div className="flex items-center gap-2">
          <Switch checked={vitaminAlindi} onCheckedChange={setVitaminAlindi} />
          <span>{vitaminAlindi ? "Alındı" : "Alınmadı"}</span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">🕑 İlaç Hatırlatıcı</h3>
        <Input
          placeholder="Saat seç"
          type="time"
          value={ilac.saat}
          onChange={(e) => setIlac({ ...ilac, saat: e.target.value })}
        />
        <Input
          placeholder="Dozaj"
          value={ilac.dozaj}
          onChange={(e) => setIlac({ ...ilac, dozaj: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">⚖️ Kilo Takibi</h3>
        <Input
          type="number"
          placeholder="Güncel Kilo (kg)"
          value={kilo}
          onChange={(e) => setKilo(e.target.value)}
        />
      </div>

      <Button onClick={handleKaydet} className="w-full">📥 Kaydet</Button>
    </section>
  );
}
