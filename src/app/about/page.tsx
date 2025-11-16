export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About ModelKatte
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Your premier destination for high-quality, professional 3D models
              designed for game developers, animators, architects, and creative
              professionals.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              We believe that every creator should have access to premium 3D
              assets without breaking the bank. Our marketplace connects
              talented 3D artists with professionals who need quality models for
              their projects.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              What We Offer
            </h2>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Game-Ready Assets:</strong> Optimized models perfect
                  for real-time rendering in game engines
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Multiple Formats:</strong> FBX, OBJ, and GLTF formats
                  for maximum compatibility
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Commercial Licenses:</strong> All models include
                  commercial usage rights
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>
                  <strong>Quality Guarantee:</strong> Every model is reviewed
                  for quality and optimization
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Browse</h3>
                <p className="text-sm text-gray-600">
                  Explore our extensive catalog of 3D models
                </p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Sign In</h3>
                <p className="text-sm text-gray-600">
                  Quick authentication with your Google account
                </p>
              </div>
              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Download</h3>
                <p className="text-sm text-gray-600">
                  Instant access to your purchased models
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              Have questions or need support? We're here to help! Reach out to
              us at{" "}
              <a
                href="mailto:support@modelkatte.com"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                support@modelkatte.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
