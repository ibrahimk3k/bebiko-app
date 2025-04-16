import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBaby } from "@/context/BabyContext";
import { olusturRapor } from "@/utils/pdf";

export default function AnaPanel() {
  const { babyInfo } = useBaby();

  const kartlar = [
    { label: "Uyku Süresi", icon: "😴" },
    { label: "Beslenme Saati", icon: "🍼" },
    { label: "Ağlama Algısı", icon: "😢" },
    { label: "Sıvı Alımı", icon: "💧" },
    { label: "Kan Grubu", icon: babyInfo.bloodType || "🩸" },
    { label: "Kilo", icon: babyInfo.currentWeight || "⚖️" },
  ];

  return (
    <section className="bg-blue-50 rounded-2xl p-4 max-w-4xl mx-auto space-y-6 mt-10">
      <h2 className="text-xl font-semibold text-center">🏡 Ana Panel</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {kartlar.map((card, idx) => (
          <Card key={idx} className="text-center">
            <CardContent className="py-6">
              <div className="text-3xl">{card.icon}</div>
              <p className="mt-2 text-sm font-medium">{card.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold">📣 Günlük Öneri</h3>
        <p>Bugün bolca sevgiyle sarılın 💖</p>
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        <Button variant="outline">+ Uyku Ekle</Button>
        <Button variant="outline">+ Beslenme Kaydı</Button>
        <Button variant="outline">+ Gelişim Notu</Button>
        <Button variant="outline" onClick={() => olusturRapor(babyInfo)}>PDF İndir</Button>
      </div>
    </section>
  );
}
