
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the SUG | Student Union Government',
  description: 'Learn about the Student Union Government, its mission, structure, and role in representing students and supporting campus life.',
};

export default function AboutPage() {
  return (
      <main className="min-h-screen bg-linear-to-b from-gray-50 to-white">
        {/* Hero Section with H1 */}
        <section className="relative bg-linear-to-r from-green-600 to-blue-800 text-white py-20 rounded-tr-xl rounded-tl-xl">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-4xl font-bold mb-6">
                About the Student Union Government
              </h1>
              <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
                Your Voice, Your Representation, Your Campus Community
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="#mission" 
                  className="px-6 py-3 text-white hover:text-gray-50 font-semibold rounded-lg hover:bg-transparent border-2 border-white  transition-colors "
                >
                  Our Mission
                </a>
                <a 
                  href="#team" 
                  className="px-6 py-3 bg-transparent border-2 border-white font-semibold rounded-lg hover:bg-gray-100 hover:text-green-900 transition-colors "
                >
                  Meet Our Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-16">
          {/* Introduction Section */}
          <section className="mb-16 mx-8 text-justify">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What is the Student Union Government?
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                The <strong>Student Union Government (SUG)</strong> serves as the official 
                representative body for all students at our university. We are elected by 
                students to advocate for student interests, enhance campus life, and 
                facilitate communication between the student body and university administration.
              </p>
              <p className="text-gray-600 mb-4">
                Our organization plays a crucial role in shaping university policies, 
                organizing campus events, managing student activities, and ensuring that 
                student voices are heard in all matters affecting academic and campus life.
              </p>
            </div>
          </section>

          {/* Mission, Vision, Values Grid */}
          <section id="mission" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Core Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
                <p className="text-gray-600 text-center">
                  To empower students through effective representation, foster campus 
                  community, and advocate for academic excellence and student welfare.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
                <p className="text-gray-600 text-center">
                  To create a transformative student experience where every voice is 
                  heard and every student feels connected to our campus community.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">💎</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Values</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    Integrity and Transparency
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    Inclusivity and Diversity
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                    Student-Centered Service
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Structure & Organization */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">SUG Structure & Organization</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Executive Branch</h3>
                  <ul className="space-y-3">
                    {[
                      'President - Overall leadership and representation',
                      'Vice President - Supports President and oversees committees',
                      'Secretary - Documentation and communications',
                      'Treasurer - Budget and financial management',
                      'Public Relations Officer - Media and outreach',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Functions</h3>
                  <ul className="space-y-3">
                    {[
                      'Student Advocacy & Representation',
                      'Campus Event Organization',
                      'Student Welfare Support',
                      'Academic Policy Input',
                      'Budget Allocation for Student Activities',
                      'Campus Community Building',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-2 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Current Leadership Team
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Meet the dedicated student leaders who represent your interests and work 
              tirelessly to improve campus life.
            </p>
            <div className="text-center mb-12">
              <a 
                href="/excos"
                className="inline-flex items-center px-6 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-900 transition-colors"
              >
                View Full Executive Committee
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </section>

          {/* FAQ Section for SEO */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                {
                  q: 'What does the Student Union Government do?',
                  a: 'The SUG represents student interests to university administration, organizes campus events, manages student activities budget, and advocates for student welfare and academic improvements.'
                },
                {
                  q: 'How can I contact the SUG?',
                  a: 'You can reach us via email at sughub@university.edu, visit our office in the Student Union Building HUB 101, or attend our weekly office hours.'
                },
                {
                  q: 'How are SUG members elected?',
                  a: 'SUG executives are elected annually through a campus-wide election where all registered students can vote. Election campaigns typically occur each spring semester.'
                },
                {
                  q: 'How can I get involved with the SUG?',
                  a: 'Students can join various committees, volunteer for events, run for office in elections, or attend our general assembly meetings which are open to all students.'
                },
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow-md p-6">
                  <summary className="font-bold text-gray-900 cursor-pointer text-lg hover:text-green-800">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-linear-to-r from-green-800 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Get Involved with Student Government
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Your voice matters! Join us in making our university a better place for all students.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-3 bg-transparent border-2 border-white font-semibold rounded-lg hover:bg-gray-50 hover:text-green-900 transition-colors cursor-pointer">
                  Attend Our Next Meeting
                </button>
                <button className="px-6 py-3 bg-transparent border-2 border-white font-semibold rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  Submit Feedback
                </button>
                <button className="px-6 py-3 bg-black/20 border-2 border-white/30 font-semibold rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  View Upcoming Events
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
  );
}