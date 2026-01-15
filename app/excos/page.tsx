// app/excos/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { excosByYear, getYears, Executive } from '../../utils/excosData';

export default function ExcosPage() {
  const router = useRouter();
  const [selectedYear, setSelectedYear] = useState('2024-2025');
  const [mounted, setMounted] = useState(false);

  const years = getYears();
  const currentExcos = excosByYear[selectedYear] || [];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
    router.push(`/excos?year=${year}`, { scroll: false });
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <main>
      {/* Header */}
      <div className="bg-linear-to-r from-green-800 to-blue-800 text-white rounded-tr-xl rounded-tl-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl md:text-4xl font-bold text-gray-100 mb-4">
              Student Union Government Executives
            </h1>
            <p className="text-lg text-gray-100 max-w-2xl mx-auto">
              Meet the student leaders representing your interests across different academic sessions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Year Selection Buttons */}
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Select Academic Session
            </h2>

            {/* Button Group */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => handleYearClick(year)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${selectedYear === year
                    ? 'hover:bg-green-900 bg-green-800 text-white shadow-lg shadow-green-200 cursor-pointer'
                    : 'hover: bg-gray-50  text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 cursor-pointer'
                    }`}
                >
                  {year}
                  {selectedYear === year && (
                    <span className="ml-2">✓</span>
                  )}
                </button>
              ))}
            </div>

            {/* Current Session Badge */}
            <div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full mb-2">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Currently viewing: {selectedYear} Session</span>
            </div>
          </div>
        </div>

        {/* Executives Scroller Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedYear} Executive Committee
            </h3>
            <div className="text-gray-600">
              <span className="font-medium">{currentExcos.length}</span> members
            </div>
          </div>

          {/* Horizontal Scroller */}
          <div className="relative">
            <div className="overflow-x-auto pb-8 -mx-4 px-4">
              <div className="flex space-x-6 min-w-max">
                {currentExcos.map((exco: Executive) => (
                  <ExcoCard key={exco.id} exco={exco} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-linear-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Executive Committee Stats
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {currentExcos.length}
              </div>
              <div className="text-gray-700">Executive Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {new Set(currentExcos.map(e => e.department)).size}
              </div>
              <div className="text-gray-700">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {currentExcos.filter(e =>
                  e.position.includes('President') ||
                  e.position.includes('Vice') ||
                  e.position.includes('Director')
                ).length}
              </div>
              <div className="text-gray-700">Leadership Roles</div>
            </div>
          </div>
        </div>

        {/* Info Section with Roles & Contact */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            About the Executive Committee
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                {[
                  'Represent student interests to administration',
                  'Organize campus events and activities',
                  'Manage student union budget and resources',
                  'Address student concerns and feedback',
                  'Promote academic excellence and student welfare',
                  'Foster campus community engagement',
                  'Coordinate with student clubs and organizations',
                  'Advocate for student rights and needs'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Leadership Roles & Contact
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium text-gray-700 mb-2">Key Positions:</h5>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(currentExcos.map(e => e.position))).slice(0, 6).map((position, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                      >
                        {position}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h5 className="font-medium text-gray-700 mb-3">Contact Information:</h5>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:sughub@university.edu" className="hover:text-green-600 transition-colors">
                        sughub@university.edu
                      </a>
                    </div>

                    <div className="flex items-start text-gray-700">
                      <svg className="w-5 h-5 text-gray-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Student Union Building, Hub 101, Main Campus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// ExcoCard Component
function ExcoCard({ exco }: { exco: Executive }) {
  return (
    <div className="w-72 shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Card Image */}
      <div className="relative h-48 bg-linear-to-br from-green-50 to-blue-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-linear-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-green-800">
              {exco.name.charAt(0)}
            </span>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="px-3 py-1 bg-green-800 text-white text-xs font-semibold rounded-full">
            {exco.position}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-2">{exco.name}</h4>
        <p className="text-gray-600 mb-3">
          <span className="font-bold">Department:</span> {exco.department}
        </p>
        <p className="text-gray-500 text-sm mb-4">{exco.bio}</p>

        <div className="flex space-x-3 pt-4 border-t border-gray-100">
          <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium cursor-pointer">
            View Profile
          </button>
          <button className="flex-1 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium cursor-pointer">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}