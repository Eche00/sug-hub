import React from 'react';

const App: React.FC = () => {
    return (
        <div className=' w-full max-w-3xl mx-auto px-10 sm:px-16'>
            <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between py-8 sm:py-1 sm:px-20 rounded-full  -mt-10 -mb-10 w-full bg-white">
                <p className="text-xl font-semi-bold pr-3 -ml-16 text-black px-2">
                  SUG HUB, where all voice matters!
                </p>
                <a 
                    href="#" 
                    className="flex items-center rounded-full py-5 px-8 -mr-18 bg-black hover:bg-gray-900 transition text-gray-200"
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="size-4.5"
                    >
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                    </svg>
                </a>
            </div>
            <div> 
            <p className='absolute bottom-0 md:text-2xl left-0 px-14 pb-12 text-left font-medium font-mono sm:text-3xl text-white'>
                A digital platform enhancing SUG transparency and engagement through public info sharing and anonymous feedback systems.
            </p>  
            </div>
            

        </div>
    );
};

export default App;