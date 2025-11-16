"use client";

import GLTFModelViewer from "@/components/GLTFModelViewer";
import Link from "next/link";
import { FiArrowLeft, FiBox } from "react-icons/fi";

export default function ModelShowcasePage() {
  const models = [
    { name: "Damaged Helmet", path: "/models/damaged-helmet.glb" },
    { name: "Vintage Lantern", path: "/models/lantern.glb" },
    { name: "Retro Boombox", path: "/models/boombox.glb" },
    { name: "Realistic Avocado", path: "/models/avocado.glb" },
    { name: "Cartoon Duck", path: "/models/duck.glb" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-4"
          >
            <FiArrowLeft />
            Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <FiBox className="text-4xl text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              3D Model Showcase
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Interactive preview of all available 3D models
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {models.map((model) => (
            <div
              key={model.path}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {model.name}
              </h3>
              <div className="h-[400px]">
                <GLTFModelViewer modelPath={model.path} />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Drag to rotate • Scroll to zoom • Auto-rotating
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Interact
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🖱️</div>
              <h3 className="font-bold text-gray-900 mb-2">Rotate</h3>
              <p className="text-gray-600">
                Click and drag to rotate the model
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="font-bold text-gray-900 mb-2">Zoom</h3>
              <p className="text-gray-600">Scroll wheel to zoom in and out</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="font-bold text-gray-900 mb-2">Auto-Rotate</h3>
              <p className="text-gray-600">Models rotate automatically</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
