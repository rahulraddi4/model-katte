import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { models } from "@/lib/models";
import GLTFModelViewer from "@/components/GLTFModelViewer";
import { FiShoppingCart, FiDownload, FiCalendar, FiTag } from "react-icons/fi";

export default async function ModelDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const model = models.find((m) => m.id === id);

  if (!model) {
    notFound();
  }

  // Get related models from the same category
  const relatedModels = models
    .filter((m) => m.category === model.category && m.id !== model.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden mb-8 border border-cyan-500/20">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left Column - 3D Preview */}
            <div>
              <div className="mb-6 h-[400px] rounded-xl overflow-hidden border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <GLTFModelViewer modelPath={model.fileUrl} />
              </div>

              <div className="grid grid-cols-4 gap-3">
                <div className="relative h-24 rounded-lg overflow-hidden border-2 border-cyan-500 shadow-lg shadow-cyan-500/30">
                  <Image
                    src={model.thumbnail}
                    alt={model.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden bg-gray-800 border border-cyan-500/20">
                  <Image
                    src={model.thumbnail}
                    alt={model.name}
                    fill
                    className="object-cover grayscale opacity-50"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden bg-gray-800 border border-cyan-500/20">
                  <Image
                    src={model.thumbnail}
                    alt={model.name}
                    fill
                    className="object-cover grayscale opacity-50"
                  />
                </div>
                <div className="relative h-24 rounded-lg overflow-hidden bg-gray-800 border border-cyan-500/20">
                  <Image
                    src={model.thumbnail}
                    alt={model.name}
                    fill
                    className="object-cover grayscale opacity-50"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-semibold mb-3">
                  {model.category}
                </span>
                {model.featured && (
                  <span className="inline-block ml-2 px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full text-sm font-semibold shadow-lg shadow-cyan-500/50">
                    Featured
                  </span>
                )}
                <h1 className="text-4xl font-bold text-white mb-3">
                  {model.name}
                </h1>
                <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
                  ${model.price}
                </p>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {model.description}
              </p>

              {/* Technical Specs */}
              <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 block mb-1">
                      File Format
                    </span>
                    <span className="font-semibold text-cyan-400">
                      {model.fileFormat}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">
                      Polygon Count
                    </span>
                    <span className="font-semibold text-cyan-400">
                      {model.polyCount.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">Category</span>
                    <span className="font-semibold text-cyan-400">
                      {model.category}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400 block mb-1">
                      Release Date
                    </span>
                    <span className="font-semibold text-cyan-400">
                      {new Date(model.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <FiTag className="text-cyan-400" />
                  <span className="font-semibold text-white">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link
                  href={`/purchase/${model.id}`}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transform hover:scale-105"
                >
                  <FiShoppingCart />
                  Purchase Now
                </Link>
              </div>

              {/* Features */}
              <div className="mt-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What's Included
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-cyan-400"
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
                    <span>Commercial license included</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-cyan-400"
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
                    <span>Instant download after purchase</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-cyan-400"
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
                    <span>Lifetime updates and support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-cyan-400"
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
                    <span>Use in unlimited projects</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Related Models */}
        {relatedModels.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Related Models
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedModels.map((relatedModel) => (
                <Link
                  key={relatedModel.id}
                  href={`/models/${relatedModel.id}`}
                  className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl shadow-lg shadow-cyan-500/10 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-1"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedModel.thumbnail}
                      alt={relatedModel.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1">
                      {relatedModel.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      ${relatedModel.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
