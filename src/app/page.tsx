import type { Metadata } from "next";
import { BpinfoExperience } from "@/components/sections/BpinfoExperience";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <BpinfoExperience />
  );
}
