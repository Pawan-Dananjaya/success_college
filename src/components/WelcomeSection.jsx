import Link from 'next/link';
import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        
        {/* --- PART 1: THE FANCY HEADER (Royal Institute Style) --- */}
        <div className="text-center mb-12">
            {/* Tagline */}
            <p className="text-red-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">
              A Tradition of Excellence
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-4">
              Welcome to <br />
              Success International College
            </h2>

            {/* Sub-heading */}
            <h3 className="text-xl md:text-2xl font-serif italic text-gray-700 mb-6">
              "The Pioneer International School in Godakawela"
            </h3>

            {/* Decorative Line */}
            <div className="relative flex items-center justify-center mb-8">
                <div className="h-px bg-gray-300 w-full max-w-xs md:max-w-sm"></div>
                <div className="absolute bg-white px-4 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                </div>
            </div>
        </div>

        {/* --- PART 2: PRINCIPAL'S MESSAGE SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* LEFT: MRS. GIRTY'S PHOTO (Takes up 5 columns) */}
            <div className="md:col-span-5 relative">
                {/* Image Container with Border */}
                <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl border-4 border-gray-100">
                    
                    {/* PLACEHOLDER TEXT (Remove this when you add the photo) */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400 font-bold text-center p-4">
                        Add Photo: public/Image/principal.jpg
                    </div>

                    {/* UNCOMMENT THIS CODE BELOW when you have the photo */}
                    {/* <Image 
                        src="/Image/principal.jpg" 
                        alt="Mrs. Girty - Principal" 
                        fill 
                        className="object-cover"
                    /> 
                    */}
                </div>
                
                {/* Name Tag floating at bottom */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white px-8 py-3 rounded-full shadow-lg text-center whitespace-nowrap z-10">
                    <p className="font-bold text-lg">Mrs. Girty</p>
                    <p className="text-xs uppercase tracking-wider text-blue-200">Principal</p>
                </div>
            </div>

            {/* RIGHT: THE MESSAGE (Takes up 7 columns) */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left pt-8 md:pt-0">
                
                <h4 className="text-2xl font-bold text-blue-900">
                    "Education is the passport to the future."
                </h4>

                <p className="text-gray-600 leading-relaxed text-lg">
                    It is my honor to welcome you to Success International College. 
                    We believe that every child is unique and deserves an environment 
                    where they can grow not just academically, but socially and morally.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg">
                    Our mission is to mold the leaders of tomorrow by providing a 
                    safe, nurturing, and disciplined atmosphere. Under our guidance, 
                    your child will discover their true potential and learn the values 
                    that will guide them for a lifetime.
                </p>

                {/* <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link href="/about/message">
                        <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition shadow-lg hover:shadow-xl">
                            Principal's Message
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="px-8 py-3 bg-white text-blue-900 border-2 border-blue-900 font-bold rounded-full hover:bg-blue-50 transition shadow-lg">
                            Contact Us
                        </button>
                    </Link>
                </div> */}

                {/* Signature Image (Optional: if you have a signature image) */}
                {/* <div className="pt-2 opacity-60">
                    <Image src="/Image/signature.png" width={150} height={50} alt="Signature" />
                </div> */}
            </div>

        </div>

      </div>
    </section>
  );
}