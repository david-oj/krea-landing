import Header from "@/components/Header";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-suisse">
      <Header />
      {children}
    </main>
  );
}
