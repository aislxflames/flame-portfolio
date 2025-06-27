export const metadata = {
  title: "Admin | Aislx Flames",
  description: "Flame Portfolio - Aislx's Personal Portfolio Fullstack Developer",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aislx Flames",
    description: "Aislx's Personal Portfolio Fullstack Developer",
    url: "https://portfolio.theflames.fun",
    images: [
      {
        url: "https://portfolio.theflames.fun/preview.png",
        width: 1200,
        height: 630,
        alt: "Flame Portfolio Open Graph Image",
      },
    ],
  },
}


export default function AdminLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
