import Sidebar from "~/components/common/overviewsidebar/sidebar";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex gap-[32px]">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
