"use client";

import { useState } from "react";
import { models, categories } from "@/lib/models";
import ModelCard from "@/components/ModelCard";
import { FiSearch, FiFilter, FiX } from "react-icons/fi";

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredModels = models.filter((model) => {
    const matchesCategory =
      selectedCategory === "All" || model.category === selectedCategory;
    const matchesSearch =
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center sm:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-semibold mb-4 shadow-lg shadow-cyan-500/20">
            <FiFilter />
            <span>Explore Collection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            3D Model Catalog
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Browse our complete collection of {models.length} premium 3D models
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-300">
          <div className="relative max-w-2xl mx-auto">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 text-xl" />
            <input
              type="text"
              placeholder="Search models by name, description, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-cyan-500/30 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 focus:outline-none text-white placeholder-gray-500 bg-gray-900/50 backdrop-blur-sm shadow-lg shadow-cyan-500/10 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FiX className="text-xl" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8 animate-fade-in-up">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium transition-all transform hover:scale-105 active:scale-95 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-gray-900/50 backdrop-blur-sm text-gray-300 hover:bg-gray-800 border-2 border-cyan-500/20 hover:border-cyan-400/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <p className="text-sm sm:text-base text-gray-400">
            Showing{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {filteredModels.length}
            </span>{" "}
            {filteredModels.length === 1 ? "model" : "models"}
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-sm text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
            >
              <FiX className="text-base" />
              Clear search
            </button>
          )}
        </div>

        {/* Models Grid */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredModels.map((model, index) => (
              <div
                key={model.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ModelCard model={model} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 sm:py-24 animate-fade-in-up">
            <div className="text-6xl sm:text-7xl mb-6">🔍</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              No models found
            </h3>
            <p className="text-base sm:text-lg text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 transform hover:scale-105"
            >
              <FiX />
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
