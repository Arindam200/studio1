export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="border-2 overflow-hidden md:overflow-visible">
      {children}
    </div>
  );
}
