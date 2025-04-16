import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { olusturRapor } from "@/utils/pdf";

export default function UykuTakibi() {
  const [uykuKaydi, setUykuKaydi] = useState({
    baslangic: "",
    bitis: ""
  });

  const handleKaydet = () => {
    console.log("Uyku Kaydı:", uykuKaydi);
    // Burada ileride localStorage veya API kullanabiliriz
  };

  return (
    <section className="bg-purple-50 rounded-2xl p-4 max-w-2xl mx-auto space-y-4 mt-10">
      <h2 className="text-xl font-semibold text-center">💤 Uyku Takibi</h2>

      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          type="time"
          value={uykuKaydi.baslangic}
          onChange={(e) => setUykuKaydi({ ...uykuKaydi, baslangic: e.target.value })}
          placeholder="Başlangıç Saati"
        />
        <Input
          type="time"
          value={uykuKaydi.bitis}
          onChange={(e) => setUykuKaydi({ ...uykuKaydi, bitis: e.target.value })}
          placeholder="Bitiş Saati"
        />
      </div>

      <Button onClick={handleKaydet} className="w-full">+ Yeni Uyku Kaydı</Button>
      <Button onClick={() => olusturRapor({ name: 'Bebek', birthDate: '2025-01-01', currentWeight: '8kg', bloodType: 'A+' })} className="w-full mt-4">PDF İndir</Button>
    </section>
  );
}
