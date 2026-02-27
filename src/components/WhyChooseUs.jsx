import Link from 'next/link';
import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        
        {/* --- PART 1: THE FANCY HEADER  --- */}
        <div className="text-center mb-12">
            {/* Tagline */}
            <p className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              A Tradition of Excellence
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-4">
              Welcome to <br />
              Success Institute
            </h2>

            {/* Sub-heading */}
            <h3 className="text-xl md:text-2xl font-serif italic text-gray-700 mb-6">
              "The Premier Tuition & Diploma Center in Godakawela"
            </h3>

            {/* Decorative Line */}
            <div className="relative flex items-center justify-center mb-8">
                <div className="h-px bg-gray-300 w-full max-w-xs md:max-w-sm"></div>
                <div className="absolute bg-white px-4 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
            </div>
        </div>

        {/* --- PART 2: THE CONTENT SECTION (This wrapper was missing!) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left Image gallery (Fixed: Proportionate Heights & Staggered) */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
                
                {/* Left Column */}
                <div className="flex flex-col gap-4">
                    <img className="h-40 w-full rounded-lg object-cover shadow-md" src="/Image/Temp.png" alt="Students" />
                    <img className="h-64 w-full rounded-lg object-cover shadow-md" src="/Image/Temp.png" alt="Class" />
                    <img className="h-48 w-full rounded-lg object-cover shadow-md" src="/Image/Temp.png" alt="Study" />
                </div>

                {/* Right Column (Added pt-8 to stagger the layout) */}
                <div className="flex flex-col gap-4 pt-8">
                    <img className="h-56 w-full rounded-lg object-cover shadow-md" src="/Image/Temp.png" alt="Institute" />
                    <img className="h-64 w-full rounded-lg object-cover shadow-md" src="/Image/Temp.png" alt="Library" />
                    <img className="h-40 w-full rounded-lg object-cover shadow-md" src="/Image/Temp.png" alt="Results" />
                </div>
                
            </div>


            {/* RIGHT: THE MESSAGE (Takes up 7 columns) */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left pt-8 md:pt-0">
                
                <h4 className="text-2xl font-bold text-blue-900">
                    "Guiding You to District Ranks and Professional Excellence."
                </h4>

                <p className="text-gray-600 leading-relaxed text-lg">
                    Success Institute provides top-tier mass classes for O/L and A/L students across all streams. With a highly qualified lecture panel, modern smart classrooms and a proven track record of district-best results, we are dedicated to securing your university entrance and career success.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg">
                    Our mission is to mold the leaders of tomorrow by providing a 
                    safe, nurturing and disciplined atmosphere. Under our guidance, 
                    your child will discover their true potential and learn the values 
                    that will guide them for a lifetime.
                </p>
                
            </div>

        </div> {/* End of Part 2 Wrapper */}

      </div>
    </section>
  );
}