import React from 'react';
import CallToAction from './ui/CallToAction'

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-white rounded-2xl  overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Image Column - Hidden on mobile */}
          <div className="hidden lg:block lg:w-1/2 relative min-h-125">
            <div className="absolute inset-0 bg-linear-to-b from-green-800 to-green-800/10  flex items-center justify-center">
              <div className="text-white text-center">
                <p className="text-blue-200 text-xl">
                  <CallToAction />
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="w-full lg:w-1/2 p-8">
            <div className="max-w-md mx-auto">
              {/* Mobile Header */}
              <div className="lg:hidden text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="flex items-center text-[20px] font-extrabold text-[#1B7339] tracking-wide">
                    <span className='text-[#1B7339] border-2 border-[#1B7339] rounded-full p-2 mr-2 w-10 h-10 flex items-center justify-center'>𝓢</span>
                    <p className="text-black">UG.</p>HUB
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{subtitle}</p>
              </div>

              {/* Desktop Header */}
              <div className="hidden lg:block text-center mb-8">
                <div className="flex items-center justify-center mb-6">
                  <span className="flex items-center text-[20px] font-extrabold text-[#1B7339] tracking-wide">
                    <span className='text-[#1B7339] border-2 border-[#1B7339] rounded-full p-2 mr-2 w-10 h-10 flex items-center justify-center'>𝓢</span>
                    <p className="text-black">UG.</p>HUB
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{subtitle}</p>
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;