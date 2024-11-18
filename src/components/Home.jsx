import { useState } from "react";
import Success from "./Success";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1); // Track the current slide

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 4 : prevSlide - 1));
  };

  return (
    <div>
      <div>
        <div className='carousel w-full'>
          {/* Slide 1 */}
          <div
            className={`carousel-item relative w-fit lg:h-[720px] ${
              currentSlide === 1 ? "block" : "hidden"
            }`}
          >
            <img src='/Slider1.webp' className='w-full' />
            <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
              <button onClick={handlePrevSlide} className='btn btn-circle'>
                ❮
              </button>
              <button onClick={handleNextSlide} className='btn btn-circle'>
                ❯
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div
            className={`carousel-item relative w-fit lg:h-[720px] ${
              currentSlide === 2 ? "block" : "hidden"
            }`}
          >
            <img src='/Slider2.webp' className='w-full' />
            <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
              <button onClick={handlePrevSlide} className='btn btn-circle'>
                ❮
              </button>
              <button onClick={handleNextSlide} className='btn btn-circle'>
                ❯
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div
            className={`carousel-item relative w-full lg:h-[720px] ${
              currentSlide === 3 ? "block" : "hidden"
            }`}
          >
            <img src='/Slider3.webp' className='w-full' />
            <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
              <button onClick={handlePrevSlide} className='btn btn-circle'>
                ❮
              </button>
              <button onClick={handleNextSlide} className='btn btn-circle'>
                ❯
              </button>
            </div>
          </div>

          {/* Slide 4 */}
          <div
            className={`carousel-item relative w-full lg:h-[720px] ${
              currentSlide === 4 ? "block" : "hidden"
            }`}
          >
            <img src='/Slider1.webp' className='w-full' />
            <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
              <button onClick={handlePrevSlide} className='btn btn-circle'>
                ❮
              </button>
              <button onClick={handleNextSlide} className='btn btn-circle'>
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='hero bg-base-200 pt-40 pb-20'>
          <div className='hero-content text-center'>
            <div className='max-w-ld'>
              <h1 className='text-5xl font-bold'>
                Master Spanish Vocabulary with Ease
              </h1>
              <p className='py-6'>
                Start your journey to fluency today! Explore a dynamic and
                interactive platform designed to make learning Spanish
                vocabulary simple, fun, and effective. Whether you&apos;re a
                beginner or aiming to perfect your skills, we&apos;ve got you
                covered.
              </p>
              <button className='btn btn-primary'>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:flex lg:pl-20 lg:pr-20 lg:pt-10 shadow-lg lg:pb-10 gap-4'>
        <div className='hero bg-base-300 border-2  rounded-xl '>
          <div className='hero-content text-center'>
            <div className='max-w-md'>
              <figure className='pt-20 pb-10'>
                <img src='/target.png' alt='' />
              </figure>
              <h1 className='text-5xl font-bold'>Our Mission</h1>
              <p className='py-6'>
                Our mission is to inspire and empower individuals to enrich
                their language skills through accessible, engaging, and
                effective vocabulary-building tools. We are dedicated to
                fostering a love for learning and helping users achieve their
                linguistic goals.
              </p>
            </div>
          </div>
        </div>
        <div className='hero bg-base-300 border-2  rounded-xl '>
          <div className='hero-content text-center'>
            <div className='max-w-md'>
              <figure className='pt-20 pb-10'>
                <img src='/how.png' alt='' />
              </figure>
              <h1 className='text-5xl font-bold'>
                How to Learn Spanish Vocabulary
              </h1>
              <p className='py-6'>
                Discover an intuitive and enjoyable way to learn Spanish
                vocabulary! Our platform offers interactive words, flashcards,
                pronunciation guides, and real-life usage examples to help you
                build your vocabulary efficiently. Dive into tailored lessons
                and practice exercises designed for all proficiency levels, from
                beginners to advanced learners.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Success />
      
    </div>
  );
};

export default Home;
