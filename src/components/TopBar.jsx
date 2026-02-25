import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white py-4 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        
        {/* Left Side: Contact Info */}
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            {/* Phone Icon */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.116 15.116 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 13.98 13.98 0 0013.96 13.96c.55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
            <span>+94 123 456 789</span>
          </div>
          <div className="flex items-center space-x-2">
            {/* Email Icon */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            <span>info@successcollege.lk</span>
          </div>
        </div>

        {/* Right Side: Social Media & Login */}
        <div className="flex items-center space-x-4">
           {/* Facebook Icon */}
           <a href="#" className="hover:text-gray-300 transition">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
           </a>
           {/* YouTube Icon */}
           <a href="#" className="hover:text-gray-300 transition">
             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.58 7.24a2.828 2.828 0 00-1.99-1.99C17.84 4.75 12 4.75 12 4.75s-5.84 0-7.59.5c-1.07.29-1.9.99-2.19 1.99C1.75 8.99 1.75 12 1.75 12s0 3.01.47 4.76c.29 1.07.99 1.9 1.99 2.19 1.75.5 7.59.5 7.59.5s5.84 0 7.59-.5c1.07-.29 1.9-.99 2.19-1.99.47-1.75.47-4.76.47-4.76s0-3.01-.47-4.76zM10 15V9l5.2 3-5.2 3z"/></svg>
           </a>
           
           {/* Instagram Icon (FIXED - Just one!) */}
           <a href="#" className="hover:text-gray-300 transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6" fill="currentColor">
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/>
            </svg>
           </a>

           {/* LinkedIn Icon (FIXED - Just one!) */}
           <a href="#" className="hover:text-gray-300 transition">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6" fill="currentColor">
               <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/>
             </svg>
           </a>
           
           <div className="border-l border-gray-500 h-6 mx-2"></div>
           
           <Link href="/alumni" className="hover:underline">Alumni</Link>
           <Link href="/login" className="hover:underline">Login</Link>
           
           {/* Custom Gradient Button (No extra library needed) */}
           <button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg rounded-full px-4 py-3 text-xs font-bold hover:opacity-90 transition">
             Apply Now
           </button>
        </div>
      </div>
    </div>
  );
}