import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AilePaylasimi() {
  const [etkinlik, setEtkinlik] = useState("");
  const [not, setNot] = useState("");
  const [davetEmail, setDavetEmail] = useState("");

  const handleKaydet = () => {
    console.log("Etkinlik:", etkinlik);
    console.log("Not:", not);
    console.log("Davet:", davetEmail);
  };

  return (
    <section className="bg-blue-100 rounded-2xl p-4 max-w-2xl mx-auto space-y-6 mt-10">
      <h2 className="text-xl font-semibold text-center">🤝 Aile Paylaşımı ve Takvim</h2>

      <div className="space-y-2">
        <h3 className="font-medium">📅 Yeni Etkinlik Ekle</h3>
        <Input
          placeholder="Etkinlik açıklaması"
          value={etkinlik}
          onChange={(e) => setEtkinlik(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">👨‍👩‍👧‍👦 Ebeveyn / Bakıcı Davet Et</h3>
        <Input
          type="email"
          placeholder="E-posta ile davet et"
          value={davetEmail}
          onChange={(e) => setDavetEmail(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">📓 Bugün Neler Oldu?</h3>
        <textarea
          className="w-full border p-2 rounded min-h-[100px]"
          placeholder="Kısa bir not..."
          value={not}
          onChange={(e) => setNot(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-medium">🔔 Bildirim Ayarları</h3>
        <Button variant="outline">Ayarları Düzenle</Button>
      </div>

      <Button onClick={handleKaydet} className="w-full">💾 Kaydet</Button>
    </section>
  );
}
