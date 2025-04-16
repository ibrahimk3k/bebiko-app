import jsPDF from "jspdf";

export function olusturRapor(babyInfo: any) {
  const doc = new jsPDF();
  doc.text(`Bebek Adı: ${babyInfo.name}`, 10, 10);
  doc.text(`Doğum Tarihi: ${babyInfo.birthDate}`, 10, 20);
  doc.text(`Kilo: ${babyInfo.currentWeight}`, 10, 30);
  doc.text(`Kan Grubu: ${babyInfo.bloodType}`, 10, 40);
  doc.save("bebiko-rapor.pdf");
}
