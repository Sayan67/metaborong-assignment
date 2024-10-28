import "@/app/globals.css"
import '@rainbow-me/rainbowkit/styles.css';


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body
                className={`antialiased font-neue-regular bg-bg-black text-white`}
            >
                {children}

            </body>
        </html>
    );
}
