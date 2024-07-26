import { Check } from "lucide-react";
import { type CheckList } from "@/lib/types";

// component that renders a neat checklist with the values provided in the checkArray
export default function CheckList({ checkArray }: CheckList) {
  return (
    <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
      {checkArray.map((item, index) => (
        <li key={index} className="flex gap-1.5 items-center text-left">
          <Check className="h-5 w-5 shrink-0 text-red-600" />
          {item}
        </li>
      ))}
    </ul>
  );
}
