import { Loader } from "lucide-react";

export function Loading() {
  return (
    <div className="absolute inset-0 z-10 flex animate-spin items-center justify-center">
      <Loader />
    </div>
  );
}
