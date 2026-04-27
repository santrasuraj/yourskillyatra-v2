import ServerNavbar from '@/components/ServerNavbar';
import ServerFooter from '@/components/ServerFooter';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServerNavbar />
      <main className="relative flex-1">
        {children}
      </main>
      <ServerFooter />
    </>
  );
}
