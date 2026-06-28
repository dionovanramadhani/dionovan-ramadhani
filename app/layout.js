import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Dionovan Ramadhani — Full-Stack & Blockchain Developer",
  description:
    "Portfolio of Dionovan Ramadhani — a Full-Stack Web & Blockchain Developer specializing in JavaScript, TypeScript, React, Next.js, Node.js, and Solidity smart contracts.",
  keywords: [
    "Dionovan Ramadhani",
    "Full-Stack Developer",
    "Blockchain Developer",
    "Next.js",
    "React",
    "Node.js",
    "Solidity",
    "Portfolio",
  ],
  authors: [{ name: "Dionovan Ramadhani" }],
  openGraph: {
    title: "Dionovan Ramadhani — Full-Stack & Blockchain Developer",
    description:
      "Portfolio of Dionovan Ramadhani — a Full-Stack Web & Blockchain Developer specializing in JavaScript, TypeScript, React, Next.js, Node.js, and Solidity smart contracts.",
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);',
          }}
        />
      </head>
      <body className="bg-bg-hard text-fg font-mono">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
