"use client";

import Link from "next/link";
import Image from "next/image";
import { Model3D } from "@/lib/models";
import { FiShoppingCart, FiEye, FiStar } from "react-icons/fi";
import { useState } from "react";

interface ModelCardProps {
  model: Model3D;
}

export default function ModelCard({ model }: ModelCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-purple-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <Image
          src={model.thumbnail}
          alt={model.name}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {model.featured && (
            <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-pulse-slow">
              <FiStar className="text-xs" />
              Featured
            </div>
          )}
          <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold">
            {model.fileFormat}
          </div>
        </div>

        {/* Quick View Button */}
        <Link
          href={`/models/${model.id}`}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full font-semibold text-gray-900 flex items-center gap-2 transform hover:scale-110 transition-transform shadow-xl">
            <FiEye />
            Quick View
          </div>
        </Link>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-1">
            {model.name}
          </h3>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent whitespace-nowrap ml-2">
            ${model.price}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {model.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {model.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium hover:bg-purple-100 transition-colors cursor-default"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-5 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            {model.polyCount.toLocaleString()} polys
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
            {model.category}
          </span>
        </div>

        <div className="flex gap-2 sm:gap-3">
          <Link
            href={`/models/${model.id}`}
            className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium text-sm hover:scale-105 active:scale-95"
          >
            <FiEye className="text-base" />
            <span className="hidden sm:inline">View</span>
          </Link>
          <Link
            href={`/purchase/${model.id}`}
            className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all shadow-md hover:shadow-xl font-medium text-sm hover:scale-105 active:scale-95"
          >
            <FiShoppingCart className="text-base" />
            <span>Buy</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
