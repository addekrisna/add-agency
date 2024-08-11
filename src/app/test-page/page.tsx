import Head from 'next/head';

export default function Teams() {
  return (
    <>
      <Head>
        <title>Home Agency</title>
      </Head>

      <header>
        {/* Navigation Bar Here */}
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gray-900 text-white text-center p-20">
          <h1 className="text-4xl font-bold">Crafting Digital Experience</h1>
          <p className="text-xl mt-4">Like any digital agency, we are only as good as the results we deliver of our recent work.</p>
          <button className="mt-10 bg-red-500 text-white px-8 py-2 rounded">Get Started</button>
        </section>

        {/* Stats Section */}
        <section className="flex justify-around text-center p-10 bg-white">
          <div><h2 className="text-3xl font-bold">25,600</h2><p>Hours Worked</p></div>
          <div><h2 className="text-3xl font-bold">76,500</h2><p>Facebook Likes</p></div>
          <div><h2 className="text-3xl font-bold">9,5348 68</h2><p>Twitter Followers</p></div>
        </section>

        {/* Services Section */}
        <section className="text-center p-20 bg-gray-100">
          <h2 className="text-3xl font-bold">Creative Design & Advertising</h2>
          <p>We bring trusted solutions for your business</p>
        </section>

        {/* What We Do Section */}
        <section className="p-20 bg-white">
          <div className="grid grid-cols-2 gap-10">
            <div><h3 className="font-bold text-lg">Design</h3>{/* List of services */}</div>
            <div><h3 className="font-bold text-lg">Advertising</h3>{/* List of services */}</div>
          </div>
        </section>

        {/* Latest Works Section */}
        <section className="bg-gray-100 p-20">
          <h2 className="text-3xl font-bold">Latest Works</h2>
          {/* Gallery Here */}
        </section>

        {/* Our Crew Section */}
        <section className="bg-white p-20 text-center">
          <h2 className="text-3xl font-bold">Our Crew</h2>
          <div className="flex justify-around">{/* Crew members */}</div>
        </section>

        {/* Pricing Section */}
        <section className="p-20 bg-red-500 text-white">
          <h2 className="text-3xl font-bold">Pricing & Plan</h2>
          {/* Pricing Cards */}
        </section>

        {/* Testimonials Section */}
        <section className="p-20 bg-gray-100">
          <h2 className="text-3xl font-bold">Trusted By Clients</h2>
          {/* Testimonials */}
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center p-6">
          <p>© 2024 Home Agency. All rights reserved.</p>
        </footer>
      </main>
    </>
    );
}