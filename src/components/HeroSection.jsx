import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[600px] flex items-center text-white">
      
      {/* 1. BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Image/hero.png" 
          alt="School Campus"
          fill 
          // CHANGE 1: Added 'object-right'. This forces the image to align to the right side.
          className="object-cover object-right" 
          priority 
        />
        
        {/* CHANGE 2: Changed from solid black to a Gradient. 
            'from-black/80' makes the left side dark for text.
            'to-transparent' makes the right side clear for the children. 
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* 2. TEXT CONTENT */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
        
        <div className="max-w-3xl"> 
          <p className="text-yellow-400 font-bold tracking-widest uppercase mb-2">
            Welcome to Success International College
          </p>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Empowering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
              Next Generation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Providing world-class education with a focus on academic excellence, 
            character building, and leadership development in Godakawela and beyond.
          </p>

          {/* 3. BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link href="/courses">
              <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition transform hover:scale-105 shadow-lg">
                Explore Courses
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-full transition transform hover:scale-105 shadow-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}