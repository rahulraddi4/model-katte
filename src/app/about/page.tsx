import {
  FiAward,
  FiUsers,
  FiZap,
  FiShield,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/20">
            <FiStar className="animate-twinkle" />
            <span>About ModelKatte</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Premium 3D Assets for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-glow">
              Creative Professionals
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide high-quality, game-ready 3D models for developers,
            designers, and creators worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-400">3D Models</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-cyan-400 mb-2">4.9★</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose ModelKatte?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
                <FiAward className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Every model is professionally crafted and optimized for the
                highest quality standards.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                <FiZap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Instant Access
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Download your models immediately after purchase and start
                creating right away.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50">
                <FiShield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Commercial License
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Use our models in unlimited commercial projects with flexible
                licensing options.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/50">
                <FiUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Expert Support
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our dedicated support team is here to help you with any
                questions or technical issues.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50">
                <FiTrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Regular Updates
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Get free updates and improvements to your purchased models as we
                enhance our collection.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/50">
                <FiStar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Curated Collection
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Every model is hand-picked and reviewed to maintain our
                high-quality standards.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            At ModelKatte, we believe that great 3D assets should be accessible
            to everyone. We're committed to providing premium quality models at
            fair prices.
          </p>
        </div>
      </div>
    </div>
  );
}
