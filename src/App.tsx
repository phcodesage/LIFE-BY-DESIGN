import { useEffect } from 'react';
import { Calendar, Clock, MapPin, Target, Users, Lightbulb, Phone, Globe, MapPinIcon } from 'lucide-react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="font-poppins">
      {/* HERO SECTION */}
      <section className="min-h-screen bg-navy text-white py-16 px-6 lg:px-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-6xl lg:text-8xl font-black tracking-tight">
                LIFE BY DESIGN
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-gray-300">
                FOR TEENS & ADULTS
              </p>
            </div>

            <div className="w-20 h-1 bg-bright-red"></div>

            <p className="text-xl lg:text-2xl font-medium text-gray-300 italic">
              Feeling unsure what path is right for you?
            </p>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              4-week course helps you discover your ideal future and create a clear plan.
            </p>

            <div className="inline-block bg-bright-red px-6 py-2 rounded-full">
              <span className="font-bold text-base lg:text-lg tracking-wider">JANUARY</span>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-soft-red flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Every Sunday</p>
                  <p className="text-gray-300 text-base">January 4, 11, 18, 25</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-soft-red flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">10:00 AM – 1:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-soft-red flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg">Exceed Learning Center</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="bg-bright-red hover:bg-soft-red transition-colors text-white font-bold text-xl px-10 py-5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
                REGISTER NOW – $749
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="order-first lg:order-last">
            <img
              src="/images/hero.png"
              alt="Confident professional"
              className="w-full h-[500px] lg:h-[650px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 - WHAT YOU'LL LEARN */}
      <section className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-navy mb-4">
              WHAT YOU'LL LEARN
            </h2>
            <div className="w-24 h-1 bg-bright-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-bright-red rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-navy mb-4">
                Mindset Reprogramming
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Transform limiting beliefs and develop a success-oriented mindset that empowers you to achieve your goals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-bright-red rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-navy mb-4">
                Goal Setting + Action Planning
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Learn proven strategies to set meaningful goals and create actionable plans that lead to real results.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-bright-red rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-navy mb-4">
                Designing Your Ideal Future
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Discover what truly matters to you and create a comprehensive blueprint for your ideal life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHO THIS IS FOR */}
      <section className="py-20 px-6 lg:px-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-4">
              WHO THIS IS FOR
            </h2>
            <div className="w-24 h-1 bg-bright-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-3xl font-bold mb-4 text-soft-red">
                Teens Preparing for the Future
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                High school students who want clarity on their future path, college choices, and career direction before making major decisions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-3xl font-bold mb-4 text-soft-red">
                Adults Seeking Direction
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Professionals feeling stuck or confused about their career path, wanting to make a meaningful change or find new purpose.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-3xl font-bold mb-4 text-soft-red">
                Anyone Wanting Clarity
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                People who feel uncertain about their direction and want confidence in their decisions to create the life they truly desire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - EVENT SCHEDULE */}
      <section className="py-20 px-6 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black text-navy mb-4">
              EVENT SCHEDULE
            </h2>
            <div className="w-24 h-1 bg-bright-red mx-auto"></div>
            <p className="text-gray-600 mt-6 text-xl">
              All sessions: 10:00 AM – 1:00 PM at Exceed Learning Center
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Date 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-bright-red text-center">
              <div className="text-7xl font-black text-navy mb-2">4</div>
              <div className="text-2xl font-bold text-gray-600">JANUARY</div>
              <div className="text-base text-gray-500 mt-2">Saturday</div>
            </div>

            {/* Date 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-bright-red text-center">
              <div className="text-7xl font-black text-navy mb-2">11</div>
              <div className="text-2xl font-bold text-gray-600">JANUARY</div>
              <div className="text-base text-gray-500 mt-2">Saturday</div>
            </div>

            {/* Date 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-bright-red text-center">
              <div className="text-7xl font-black text-navy mb-2">18</div>
              <div className="text-2xl font-bold text-gray-600">JANUARY</div>
              <div className="text-base text-gray-500 mt-2">Sunday</div>
            </div>

            {/* Date 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-bright-red text-center">
              <div className="text-7xl font-black text-navy mb-2">25</div>
              <div className="text-2xl font-bold text-gray-600">JANUARY</div>
              <div className="text-base text-gray-500 mt-2">Saturday</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - PRICE + CTA */}
      <section className="py-20 px-6 lg:px-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            INVEST IN YOUR FUTURE
          </h2>

          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20 mb-8">
            <div className="mb-6">
              <span className="text-7xl lg:text-9xl font-black text-soft-red">$749</span>
            </div>
            <p className="text-2xl text-gray-300 mb-8">
              Complete 4-week transformation program
            </p>
            <button className="bg-bright-red hover:bg-soft-red transition-colors text-white font-bold text-2xl px-14 py-6 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all">
              RESERVE MY SPOT
            </button>
          </div>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Limited spots available. This comprehensive program provides you with the tools, strategies, and clarity needed to design the life you've always wanted. Don't wait – take control of your future today.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy border-t border-white/10 py-12 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-6 h-6 text-soft-red" />
              <span className="text-gray-300 text-lg">(555) 123-4567</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <Globe className="w-6 h-6 text-soft-red" />
              <span className="text-gray-300 text-lg">www.exceedlearning.com</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPinIcon className="w-6 h-6 text-soft-red" />
              <span className="text-gray-300 text-lg">Exceed Learning Center</span>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-base">
            <p>&copy; 2025 Exceed Learning Center. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
