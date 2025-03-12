import './global.css';

export const metadata = {
  title: 'Currency Converter - with Customizable Integration',
  description:
    'Easily convert currencies. Seamlessly integrate into your website with customizable styling to match your design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
