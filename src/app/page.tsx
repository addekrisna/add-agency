import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen" 
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1678282514430-1350ec121314?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
        >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-indigo-600">Transform Your Brand's Digital Presence</h1>
            <p className="mb-5">
            Elevate your brand with cutting-edge digital strategies, captivating content, and unmatched creativity. Let's ADD more value to your brand today.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
      

      {/* Stats Section */}
      <div className="bg-base-200 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Adding Value to Brands Globally</h2>
              <p className="mt-4 text-lg leading-8">
                Our company is trusted by organizations worldwide to boost productivity, streamline operations, and enhance
                customer experiences.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col dark:bg-gray-800 bg-teal-400 p-8">
                <dt className="text-sm font-semibold leading-6">Client Globally</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">12,345</dd>
              </div>
              <div className="flex flex-col dark:bg-gray-800 bg-teal-400 p-8">
                <dt className="text-sm font-semibold leading-6">Transactions Today</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">1.23M</dd>
              </div>
              <div className="flex flex-col dark:bg-gray-800 bg-teal-400 p-8">
                <dt className="text-sm font-semibold leading-6">Total Revenue</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">$5.6B</dd>
              </div>
              <div className="flex flex-col dark:bg-gray-800 bg-teal-400 p-8">
                <dt className="text-sm font-semibold leading-6">Happy Customers</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">98%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>


      {/* Services Section */}
      <section className="text-center p-20">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Creative Design & Advertising</h2>
        <p>We bring trusted solutions for your business</p>
      </section>

      {/* Company Profile Section */}
      <section className="overflow-hidden bg-white py-8 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Produce faster</h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-indigo-600">ADD Agency's Overview</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Founded with a vision to redefine how brands communicate and connect in the digital age, ADD Agency has quickly established itself as a leading creative powerhouse in the digital media landscape. Our agency thrives on creativity, innovation, and a deep understanding of the ever-evolving digital ecosystem. We believe that every brand has a unique story to tell, and our mission is to help you tell that story in a way that resonates, engages, and drives meaningful connections with your audience.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">At ADD Agency, we don’t just create digital content; we craft experiences that captivate and inspire. Our team of seasoned professionals, including digital strategists, designers, developers, and content creators, works collaboratively to deliver comprehensive solutions that elevate your brand’s presence across all digital platforms.
                </p>
                
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <a href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">More About us
                </a>
              </div>
            </div><Image 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxjb21wdXRlcnxlbnwwfDB8fHwxNjkxODE2NjY3fDA&ixlib=rb-4.0.3&q=80&w=1080" 
                    alt="Product screenshot" 
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" 
                    width="2432" 
                    height="1442">
                    </Image>
          </div>
        </div>
      </section>

      {/* <div className="hero bg-base-200 min-h-screen"> */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="container mx-auto px-6 p-6 bg-white">


                <div className="mb-16 text-center">
                    {/* <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h4> */}
                    <p className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">What We Do

                    </p>
                </div>


                <div className="flex flex-wrap my-12">


                    <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl text-indigo-500">Social Media Marketing</div>
                        </div>
                        <p className="leading-loose text-gray-500">Strategy development, content creation, community management, and targeted ad campaigns to enhance your brand’s presence on social platforms.
                        </p>
                    </div>



                    <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl text-indigo-500">Branding and Identity Design</div>
                        </div>
                        <p className="leading-loose text-gray-500">Comprehensive branding services including logo design, brand guidelines, visual identity, and brand messaging to establish a strong and consistent brand image.
                        </p>
                    </div>



                    <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl text-indigo-500">Content Creation and Marketing</div>
                        </div>
                        <p className="leading-loose text-gray-500">Crafting engaging and impactful content, including blog posts, videos, infographics, and more, to attract and retain your target audience.
                        </p>
                    </div>



                    <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl text-indigo-500">Website Design and Development</div>
                        </div>
                        <p className="leading-loose text-gray-500">Custom website design and development services that focus on creating visually appealing, user-friendly, and responsive websites that drive conversions.
                        </p>
                    </div>



                    <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl text-indigo-500">Search Engine Optimization (SEO)</div>
                        </div>
                        <p className="leading-loose text-gray-500">On-page and off-page SEO strategies designed to improve your website’s visibility on search engines, driving more organic traffic to your site.
                        </p>
                    </div>



                    <div className="w-full md:w-1/2 lg:w-1/3 p-8">
                        <div className="flex items-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                fill="currentColor" className="h-6 w-6 text-indigo-500">
                                <path
                                    d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                </path>
                            </svg>
                            <div className="ml-4 text-xl text-indigo-500">Digital Advertising</div>
                        </div>
                        <p className="leading-loose text-gray-500">Comprehensive digital advertising solutions, including Google Ads, social media ads, and display advertising, tailored to reach your target audience and maximize ROI.
                        </p>
                    </div>


                
                </div>
            </div>
        </div>
    </section>      

    {/* Testimonial Section */}
    <section id="testimonials" aria-label="What our customers are saying" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Are Saying</h2>
        </div>
        <ul role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl dark:bg-gray-800 bg-teal-400 p-6 shadow-xl shadow-slate-900/10">
                  {/* <svg aria-hidden="true"
                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg> */}
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight">"Working with ADD Agency has been a game-changer for our brand. Their team took the time to understand our vision and brought it to life with creativity and precision. The digital campaigns they crafted not only captured our brand’s essence but also delivered exceptional results. Our online engagement has skyrocketed, and we’ve seen a significant increase in brand awareness. We couldn’t be happier with the partnership!"</p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base">Sheryl Berge</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <Image alt="" className="object-cover" width="20" height="20" src="https://randomuser.me/api/portraits/men/15.jpg"></Image>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl dark:bg-gray-800 bg-teal-400 p-6 shadow-xl shadow-slate-900/10">
                  {/* <svg aria-hidden="true"
                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg> */}
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight">"ADD Agency exceeded our expectations in every way. From the initial strategy sessions to the final deliverables, their attention to detail and commitment to excellence were evident. They transformed our website into a visually stunning, user-friendly platform that has drastically improved our customer experience. Their innovative approach to digital marketing has also driven a noticeable increase in our sales. ADD Agency truly added more value to our brand!"</p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base">Leland Kiehn</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <Image alt="" className="object-cover" width="20" height="20" src="https://randomuser.me/api/portraits/women/15.jpg"></Image>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li>
            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
              <li>
                <figure className="relative rounded-2xl dark:bg-gray-800 bg-teal-400 p-6 shadow-xl shadow-slate-900/10">
                  {/* <svg aria-hidden="true"
                    width="105" height="78" className="absolute left-6 top-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg> */}
                  <blockquote className="relative">
                    <p className="text-lg tracking-tight">"The team at ADD Agency is nothing short of exceptional. Their creative solutions and strategic insights helped us navigate the complexities of digital marketing with ease. They developed a comprehensive digital strategy that aligned perfectly with our business goals, and the results speak for themselves. Our social media presence has grown exponentially, and we’ve built a stronger connection with our audience. I highly recommend ADD Agency to any brand looking to elevate their digital presence."</p>
                  </blockquote>
                  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                    <div>
                      <div className="font-display text-base">Peter Renolds</div>
                    </div>
                    <div className="overflow-hidden rounded-full bg-slate-50">
                      <Image alt="" className="object-cover" width="20" height="20" src="https://randomuser.me/api/portraits/men/10.jpg"></Image>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>


      {/* <div className="flex flex-wrap justify-center mt-10"> */}
    

    </>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
  );
}
