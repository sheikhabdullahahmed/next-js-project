import "./globals.css";
// app/layout.tsx
import { ReduxProvider } from "@/src/app/provider";
import ThemeWrapper from "@/src/components/theme/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ReduxProvider>
      </body>
    </html>
  );
}
