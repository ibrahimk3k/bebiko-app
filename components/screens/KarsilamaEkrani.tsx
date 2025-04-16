import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useBaby } from "@/context/BabyContext";

export default function KarsilamaEkrani() {
  const { babyInfo, setBabyInfo } = useBaby();

  return (
    <section className="space-y-4 max-w-md mx-auto mt-10">
      <Input
        placeholder="Bebek Adı"
        value={babyInfo.name}
        onChange={(e) =>
          setBabyInfo({ ...babyInfo, name: e.target.value })
        }
      />
      <Input
        placeholder="Doğum Kilosu (kg)"
        type="number"
        value={babyInfo.birthWeight}
        onChange={(e) =>
          setBabyInfo({ ...babyInfo, birthWeight: e.target.value })
        }
      />
      <Button className="w-full mt-2">Devam Et</Button>
    </section>
  );
}
