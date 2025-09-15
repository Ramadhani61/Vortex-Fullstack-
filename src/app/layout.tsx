import "./globals.css";
import AppBar from "@/components/AppBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <AppBar />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
