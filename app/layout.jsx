// app/layout.js
import './globals.css';
import { UserProvider } from '@/context/UserContext'; // Still necessary for context
import Navbar from '@/components/Navbar'; // Import Navbar
import Footer from '@/components/Footer'; // Import Footer

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider> {/* UserProvider remains here to wrap the whole app */}
          <Navbar /> {/* Navbar is now part of the global layout */}
          <main className="flex-grow"> {/* Ensure main content grows to fill space */}
            {children} {/* This is where app/page.jsx or app/login/page.jsx content will go */}
          </main>
          <Footer /> {/* Footer is now part of the global layout */}
        </UserProvider>
      </body>
    </html>
  );
}
