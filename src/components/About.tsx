
const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate software developer with a keen interest in building innovative solutions.
            My journey in technology has equipped me with a diverse skill set and a problem-solving mindset.
            I thrive on challenges and continuously seek opportunities to learn and grow.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Download CV
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition">
              Contact Me
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/profile-image.jpg"
              alt="Professional headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;