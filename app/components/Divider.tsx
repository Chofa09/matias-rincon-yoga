'use client';

interface DividerProps {
  text: string;
}

export default function Divider({ text }: DividerProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="border border-[#3f1518]/50 px-3 py-1 uppercase rounded-lg text-sm">
        {text}
      </div>
      <div className="flex-1 border-t border-[#3f1518]/50" />
    </div>
  );
}