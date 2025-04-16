import KarsilamaEkrani from "@/components/screens/KarsilamaEkrani";
import AnaPanel from "@/components/screens/AnaPanel";
import UykuTakibi from "@/components/screens/UykuTakibi";
import BeslenmeTakibi from "@/components/screens/BeslenmeTakibi";
import AglamaTakibi from "@/components/screens/AglamaTakibi";
import GelisimGunlugu from "@/components/screens/GelisimGunlugu";
import SaglikTakibi from "@/components/screens/SaglikTakibi";
import AnneAlani from "@/components/screens/AnneAlani";
import AilePaylasimi from "@/components/screens/AilePaylasimi";

export default function Home() {
  return (
    <main className="p-4 min-h-screen bg-gradient-to-b from-lavender-100 to-white space-y-16">
      <KarsilamaEkrani />
      <AnaPanel />
      <UykuTakibi />
      <BeslenmeTakibi />
      <AglamaTakibi />
      <GelisimGunlugu />
      <SaglikTakibi />
      <AnneAlani />
      <AilePaylasimi />
    </main>
  );
}
