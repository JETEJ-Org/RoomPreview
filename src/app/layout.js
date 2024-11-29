import "./globals.css";

export const metadata = {
  title: "Room Preview",
  description: "A room preview app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  );
}
