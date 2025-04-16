import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AnneAlani() {
  const [duygu, setDuygu] = useState("");
  const [gunluk, setGunluk] = useState("");

  const handleKaydet = () => {
    console.log("Duygu:", duygu);
    console.log("Günlük Yazısı:", gunluk);
  };

  return (
    <section className="bg-purple-100 rounded-2xl p-4 max-w-2xl mx-auto space-y-6 mt-10">
      <h2 className="text-xl font-semibold text-center">💜 Anne Alanı</h2>

      <div className="flex gap-2 overflow-x-auto whitespace-nowrap justify-center">
        {["😊", "😴", "😣", "😢", "😃"].map((emoji) => (
          <Button
            key={emoji}
            variant={duygu === emoji ? "default" : "outline"}
            className="text-3xl"
            onClick={() => setDuygu(emoji)}
          >
            {emoji}
          </Button>
        ))}
      </div>

      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="font-medium">🎧 Mini Podcast</h3>
        <p className="text-sm text-gray-600">1-3 dakikalık rahatlatıcı içerik</p>
        <Button variant="outline" className="mt-2">Dinle</Button>
      </div>

      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="font-medium">🌬️ Nefes Egzersizi</h3>
        <p className="text-sm text-gray-600">Animasyonlu yönlendirme ile</p>
        <Button variant="outline" className="mt-2">Başla</Button>
      </div>

      <div>
        <h3 className="font-medium mb-2">🖋️ Günlüğüme Yaz</h3>
        <textarea
          className="w-full border p-2 rounded min-h-[100px]"
          placeholder="Bugünkü duygularım..."
          value={gunluk}
          onChange={(e) => setGunluk(e.target.value)}
        />
      </div>

      <Button onClick={handleKaydet} className="w-full">💾 Kaydet</Button>
    </section>
  );
}
