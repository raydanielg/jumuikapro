import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-lg font-semibold">Jumuika</div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Follow Us</span>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-green-500 transition-colors"><FaFacebookF /></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-green-500 transition-colors"><FaInstagram /></a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-green-500 transition-colors"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Jumuika. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Statement</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
