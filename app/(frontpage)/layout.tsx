import Navbar from "../../components/layout/navbar";

interface FrontPageLayoutProps {
  children: React.ReactNode;
}

export default async function FrontPageLayout({
  children,
}: FrontPageLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
