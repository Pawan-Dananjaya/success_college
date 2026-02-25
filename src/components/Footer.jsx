import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: 4 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COLUMN 1: LOGO & ABOUT */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
               {/* Logo Image - Make sure this path is correct */}
               <div className="relative w-12 h-12 bg-white rounded-full p-1">
                 <Image 
                   src="/Image/logo1.png" 
                   alt="Success College Logo" 
                   fill 
                   className="object-contain p-1"
                 />
               </div>
               <div className="flex flex-col">
                 <span className="text-xl font-extrabold tracking-wide leading-none">SUCCESS</span>
                 <span className="text-[10px] text-red-400 font-bold uppercase tracking-widest leading-none mt-1">International College</span>
               </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Empowering the next generation with world-class education, moral values, and leadership skills. Join us in shaping a brighter future.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-red-500 pl-3">Quick Links</h3>
            <ul className="space-y-3 text-sm text-blue-200">
              <li><Link href="/about/profile" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-white hover:translate-x-1 transition-all inline-block">Admissions</Link></li>
              <li><Link href="/news" className="hover:text-white hover:translate-x-1 transition-all inline-block">News & Events</Link></li>
              <li><Link href="/gallery" className="hover:text-white hover:translate-x-1 transition-all inline-block">Photo Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: ACADEMICS */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-red-500 pl-3">Academics</h3>
            <ul className="space-y-3 text-sm text-blue-200">
              <li><Link href="/programs/diploma" className="hover:text-white hover:translate-x-1 transition-all inline-block">Diploma Programmes</Link></li>
              <li><Link href="/programs/english" className="hover:text-white hover:translate-x-1 transition-all inline-block">Department of English</Link></li>
              <li><Link href="/programs/training" className="hover:text-white hover:translate-x-1 transition-all inline-block">Teacher Training</Link></li>
              <li><Link href="/academics/primary" className="hover:text-white hover:translate-x-1 transition-all inline-block">Primary Section</Link></li>
              <li><Link href="/academics/alevel" className="hover:text-white hover:translate-x-1 transition-all inline-block">Advanced Level</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white border-l-4 border-red-500 pl-3">Contact Us</h3>
            <ul className="space-y-4 text-sm text-blue-200">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>
                  Success International College,<br/>
                  Main Street, Godakawela,<br/>
                  Sri Lanka.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+94 123 456 789</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@successcollege.lk</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR: COPYRIGHT */}
        <div className="border-t border-blue-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300">
          <p>© 2025 Success International College. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}