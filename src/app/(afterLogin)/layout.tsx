export default function AfterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>AfterLogin Layout</h1>
      {children}
    </div>
  );
}
