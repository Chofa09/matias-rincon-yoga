import ComingSoonPlaceholder from "../components/ComingSoonPlaceholder";

export default function ClassesPage() {
  return (
    <main className="flex flex-1 flex-col gap-8 px-8 py-10 md:p-20">
      <h1 className="text-[48px] text-center md:text-start font-aboreto">Clases</h1>
      <div className="border-t border-[#3f1518]/50" />
      <div className="flex flex-1 items-center justify-center">
        <ComingSoonPlaceholder />
      </div>
    </main>
  );
}
