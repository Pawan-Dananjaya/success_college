import Image from 'next/image';

const steps = [
  {
    title: "Early Childhood",
    age: "Age 2-5 Years",
    description: "Play-based learning in a caring environment.",
    image: "/Image/1.png", 
  },
  {
    title: "Primary",
    age: "Age 6-10 Years",
    description: "Building strong foundations in core subjects.",
    image: "/Image/2.png", 
  },
  {
    title: "Secondary",
    age: "Age 11-15 Years",
    description: "Advanced academics and character development.",
    image: "/Image/3.png", 
  },
  {
    title: "Higher Education",
    age: "Age 16+ Years",
    description: "O/L & A/L preparation for global success.",
    image: "/Image/4.png", 
  },
];

export default function JourneySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            An Educational Journey for Life
          </h2>
          {/* Blue divider instead of Red */}
          <div className="h-1.5 w-24 bg-blue-900 mx-auto rounded-full"></div> 
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            From their first steps in nursery to their graduation day, we guide your child through every stage of their academic and personal growth.
          </p>
        </div>

        {/* CARD GRID (No connecting lines, just clean cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                
                {/* RECTANGULAR IMAGE (Not Circular) */}
                <div className="relative h-48 w-full bg-gray-200">
                    {/* Placeholder Text - Remove when you have images */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold">
                        Add Image
                    </div>

                    {/* Uncomment when you have images */}
                    <Image 
                      src={step.image} 
                      alt={step.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    /> 
                    
                    
                    {/* Blue Overlay on Hover */}
                    <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* TEXT CONTENT */}
                <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-blue-900 mb-1">
                        {step.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-bold rounded-full mb-3">
                        {step.age}
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                    </p>
                </div>

                {/* Bottom Blue Line Accent */}
                <div className="h-1 w-full bg-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}