import Link from "next/link";

const offerings = [
  {
    title: "Diploma Programmes", // CHANGED FROM "Degree Programmes"
    description: "We offer a range of recognized Diploma programmes designed to equip students with professional skills and practical knowledge. These courses act as a perfect bridge between school education and the professional world, ensuring career readiness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    title: "Department of English",
    description: "In a globalized world, English mastery is essential. Our dedicated department focuses on advanced linguistics, literature, and spoken English proficiency, empowering students to communicate effectively and confidently on the international stage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/>
      </svg>
    ),
  },
  {
    title: "Teacher Training Centre",
    description: "We are committed to shaping the educators of tomorrow. Our training centre offers comprehensive Diplomas in Montessori and Primary Education, providing aspiring teachers with hands-on experience and modern pedagogical skills.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
        <path d="M3 21h18"/><path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14"/><path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"/>
      </svg>
    ),
  },
  {
    title: "Academic Curricula",
    description: "We offer a balanced blend of Local and London curriculums (Cambridge/Edexcel). From early childhood development to Advanced Level examinations, our rigorous academic framework is designed to prepare students for top-tier university success.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-900">
        <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>
      </svg>
    ),
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {offerings.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              
              {/* 1. ICON with Hover Effect */}
              <div className="mb-6 p-4 bg-blue-50 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                {item.icon}
              </div>

              {/* 2. TITLE */}
              <h3 className="text-xl font-extrabold text-gray-800 mb-4 h-12 flex items-center justify-center">
                {item.title}
              </h3>

              {/* 3. DECORATIVE DIVIDER (Line with Circle) */}
              <div className="relative w-full flex items-center justify-center mb-6 opacity-60">
                {/* Horizontal Line */}
                <div className="h-px bg-red-200 w-full absolute"></div>
                {/* Center Circle */}
                <div className="w-4 h-4 rounded-full border-2 border-red-500 bg-white z-10"></div>
              </div>

              {/* 4. DESCRIPTION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}