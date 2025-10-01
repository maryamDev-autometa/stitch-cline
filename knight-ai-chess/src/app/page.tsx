import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the authentication/login page
  redirect('/authentication/login');
}
