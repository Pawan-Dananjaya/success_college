import Link from "next/link";
import Image from "next/image";

const branches = [
  {
    id: 1,
    name: "Godakawela Branch",
    fullName: "Success International College - Godakawela",
    description: "Our main campus offering comprehensive education from Nursery to Advanced Level with state-of-the-art facilities.",
    image: "/Image/SCG.jpg", // Make sure to add this photo later
    link: "/branches/godakawela",
    phone: "+94 77 418 9196"
  },
  {
    id: 2,
    name: "Kahawaththa Branch",
    fullName: "Success International College - Kahawaththa",
    description: "A vibrant learning community focused on primary and secondary education with a strong emphasis on English proficiency.",
    image: "/Image/kahawaththa.jpg", // Make sure to add this photo later
    link: "/branches/ratnapura",
    phone: "+94 123 456 788"
  },
  {
    id: 3,
    name: "Kosnathota Branch",
    fullName: "Success International College - Kosnathota",
    description: "Dedicated to nurturing young minds in a secure and creative environment, building a solid foundation for the future.",
    image: "/Image/kosnathota.jpg", // Make sure to add this photo later
    link: "/branches/colombo",
    phone: "+94 123 456 787"
  }
];

export default function Branches() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">
            Our Network
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mt-2 mb-4">
            Our Campuses
          </h2>
          {/* Decorative Divider */}
          <div className="h-1.5 w-24 bg-blue-900 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Providing quality international education across three convenient locations, 
            ensuring every child has access to excellence near their home.
          </p>
        </div>

        {/* --- BRANCHES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div 
              key={branch.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
            >
              
              {/* IMAGE SECTION */}
              <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
                {/* Placeholder Text */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-center px-4">
                   Add Image: {branch.image}
                </div>

                {/* UNCOMMENT THIS WHEN YOU HAVE PHOTOS */}
                 {/* <Image 
                  src={branch.image} 
                  alt={branch.fullName} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />  */}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-60"></div>
                
                {/* Location Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                   <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   <span className="text-xs font-bold text-blue-900 uppercase">{branch.name}</span>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-1">
                  {branch.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                  {branch.description}
                </p>

                {/* CONTACT INFO */}
                <div className="flex items-center gap-2 text-gray-500 mb-6 text-sm">
                   <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                   <span>{branch.phone}</span>
                </div>

                {/* BUTTON */}
                <Link href={branch.link} className="block">
                  <button className="w-full py-3 border-2 border-blue-900 text-blue-900 font-bold rounded-xl hover:bg-blue-900 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                    Visit Branch
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}