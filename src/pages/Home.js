import React from "react";

const Home = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold">Hi, I'm Erik!</h2>
        <p className="mt-4 text-lg">A passionate developer building awesome web experiences.</p>
        <a href="/projects" className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
