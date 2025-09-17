import BackButton from "@/components/website-components/BackButton";

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-primary/20">
      <header className="fixed top-0 left-0 z-50 p-4">
          <BackButton />
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
