    'use client'; // This directive is necessary for client-side components like LoginPage

    import LoginPage from '@/components/LoginPage'; // Adjust the import path if your LoginPage.jsx is not directly in 'components'

    export default function Login() {
      return (
        // The LoginPage component handles its own styling and layout,
        // including the light green background that spans the full screen.
        <LoginPage />
      );
    }
    