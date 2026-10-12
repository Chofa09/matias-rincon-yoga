import TextsPageContent from "../components/TextsPageContent";

export default function TextsPage() {
  return (
    <main className="flex flex-1 flex-col gap-8 px-4 md:px-8 py-10 md:p-20">
      <h1 className="text-[48px] text-center md:text-start font-aboreto">Textos</h1>
      <div className="border-t border-[#3f1518]/50" />
      <TextsPageContent />
    </main>
  );
}
