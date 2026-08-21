import { PageSideBeamGlows } from "@/components/shared/page-side-beam-glows";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen overflow-x-clip">
      <PageSideBeamGlows />
      {children}
    </div>
  );
}
