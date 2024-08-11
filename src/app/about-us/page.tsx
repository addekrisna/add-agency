import Image from "next/image";
export default function AboutUs(){
    return(
        <>
        {/* About Section */}
        <section className="bg-gray-100">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                    <div className="max-w-lg">
                        <h2 className="text-3xl font-extrabold text-indigo-600 sm:text-4xl">Our Story</h2>
                        <p className="mt-4 text-gray-600 text-lg">ADD Agency was founded on the belief that in a world where digital media reigns supreme, every brand deserves to have its voice heard. We recognized a gap in the market for a creative agency that not only understood the technical complexities of digital marketing but also had the creative flair to produce standout content. From this vision, ADD Agency was born.

Our journey began with a small team of talented creatives who shared a common goal: to help brands navigate the rapidly evolving digital landscape. Over the years, we have grown into a diverse team of strategists, designers, developers, and content creators, each bringing a unique perspective and skill set to the table. Despite our growth, we have remained true to our roots, always putting creativity and client success at the forefront of everything we do.</p>
                        {/* <div className="mt-8">
                            <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                                <span className="ml-2">&#8594;</span></a>
                        </div> */}
                    </div>
                    <div className="mt-12 md:mt-0">
                        <Image 
                            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" 
                            alt="About Us Image" 
                            className="object-cover rounded-lg shadow-md"
                            width="600" 
                            height="400"
                            ></Image>
                    </div>
                </div>
            </div>
        </section>


        {/* timeline Section */}
        {/* <ul className="timeline timeline-vertical">
        <li>
            <div className="timeline-start timeline-box">First Macintosh computer</div>
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <div className="timeline-end timeline-box">iMac</div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-start timeline-box">iPod</div>
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <div className="timeline-end timeline-box">iPhone</div>
            <hr />
        </li>
        <li>
            <hr />
            <div className="timeline-start timeline-box">Apple Watch</div>
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
        </li>
        </ul>         */}
        </>
    )
}