import { IncompleteCircle, OpenInBrowser, Share, ThumbDown, ThumbUp } from '@mui/icons-material'

function Events() {
    return (
        <div className="AnnouncementDetail flex flex-col gap-8 justify-center sm:mb-0 mb-22 w-full ">

            <div className="w-full  bg-white rounded-2xl relative p-8">

                <section className="flex flex-col flex-1">
                    <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-2xl"><IncompleteCircle /></span>
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-semibold text-gray-800">
                            Feature Coming Soon
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-gray-500 max-w-xs">
                            We’re working on something awesome.
                            Event management and interactions will be available shortly.
                        </p>

                        {/* Subtle Placeholder Card */}
                        <div className="w-full max-w-md mt-4 bg-gray-100 rounded-2xl p-4">
                            <div className="h-3 bg-gray-300 rounded w-3/4 mb-2 animate-pulse"></div>
                            <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                        </div>
                    </div>
                </section>


            </div>
            {/* <div className="w-full  bg-white rounded-2xl relative p-8">
                <button className='absolute top-5 right-5'><Share fontSize='small' /></button>
                Header 
                <section className='flex lg:flex-row flex-col gap-4'>
                    Image 
                    <div className=" overflow-hidden mx-auto h-84 bg-gray-200 flex lg:flex-1/3 items-center justify-center rounded-2xl">
                        <img src="https://assets-static.invideo.io/images/large/103_Instagram_Post_Ideas_8_8a54dd5a86.png" alt="" className='w-full h-full object-cover' />
                    </div>
                    <section className='flex flex-col flex-1'>
                        <div className="flex flex-1 flex-col  gap-3 p-4">
                            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                            <div>
                                <p className="font-semibold text-sm">Dr. Richard James</p>
                                <p className="text-xs text-gray-500">Aug 12, 2026 · 6:40 PM</p>
                            </div>
                            Content 
                            <div className=" text-sm text-gray-800 bg-gray-200 rounded-2xl p-4  max-h-46 overflow-scroll">
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                                The digestive system includes the mouth, pharynx (throat), esophagus,
                                stomach, small intestine, large intestine, rectum, and anus.
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            Likes and Dislikes
                            <div className="flex items-center gap-6 text-gray-600">

                                Like
                                <div className="flex items-center gap-1 cursor-pointer hover:text-[#1B7339] duration-200">
                                    <ThumbUp fontSize="small" />
                                    <span className="text-sm font-medium">24</span>
                                </div>

                                Dislike
                                <div className="flex items-center gap-1 cursor-pointer hover:text-red-500 duration-200">
                                    <ThumbDown fontSize="small" />
                                    <span className="text-sm font-medium">3</span>
                                </div>

                            </div>
                            <div className="flex items-center gap-1 cursor-pointer hover:text-[#1B7339] duration-200 underline font-bold">
                                <span className="text-sm">Visit</span>
                                <OpenInBrowser fontSize="small" />

                            </div>
                        </div>

                    </section>
                </section>

            </div> */}
        </div>

    )
}

export default Events