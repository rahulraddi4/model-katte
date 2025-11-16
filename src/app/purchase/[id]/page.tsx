import { notFound } from "next/navigation";
import Image from "next/image";
import { models } from "@/lib/models";
import { auth } from "@/lib/auth";
import { FiCheck, FiDownload } from "react-icons/fi";

export default async function PurchasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await auth();
  const model = models.find((m) => m.id === id);

  if (!model) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-6">
            <h1 className="text-3xl font-bold mb-2">Complete Your Purchase</h1>
            <p className="text-purple-100">
              Secure checkout powered by Google authentication
            </p>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Model Info */}
              <div>
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={model.thumbnail}
                    alt={model.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {model.name}
                </h2>
                <p className="text-gray-600 mb-4">{model.description}</p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-green-600" />
                    <span>Format: {model.fileFormat}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-green-600" />
                    <span>
                      Polygon Count: {model.polyCount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-green-600" />
                    <span>Category: {model.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiCheck className="text-green-600" />
                    <span>Instant Download</span>
                  </div>
                </div>
              </div>

              {/* Purchase Details */}
              <div>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Order Summary
                  </h3>

                  <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Model Price</span>
                      <span className="font-semibold text-gray-900">
                        ${model.price}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Processing Fee</span>
                      <span className="font-semibold text-gray-900">$0.00</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-900">
                      Total
                    </span>
                    <span className="text-3xl font-bold text-purple-600">
                      ${model.price}
                    </span>
                  </div>
                </div>

                {/* User Info */}
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Account Details
                  </h3>
                  <div className="flex items-center gap-3">
                    {session?.user?.image && (
                      <img
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-medium text-gray-900">
                        {session?.user?.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {session?.user?.email}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Purchase Button */}
                <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl text-lg">
                  <FiDownload />
                  Complete Purchase & Download
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By completing this purchase, you agree to our Terms of Service
                  and License Agreement
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's Included
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-600 flex-shrink-0" />
                  <span>Commercial license included</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-600 flex-shrink-0" />
                  <span>Lifetime updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-600 flex-shrink-0" />
                  <span>Technical support</span>
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-600 flex-shrink-0" />
                  <span>Unlimited project usage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
