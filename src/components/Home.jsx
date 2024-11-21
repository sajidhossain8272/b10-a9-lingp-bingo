import { useState } from "react";
import Success from "./Success";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import "animate.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 4 ? 1 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 4 : prevSlide - 1));
  };

  return (
    <div className='kosugi-maru-regular '>
      <Helmet>
        <title>Lingo Bingo - Home</title>
      </Helmet>

      <div >
        <div className='carousel w-full star-glow '>
          {/* Slide 1 */}
          <div
            className={`carousel-item relative w-fit lg:h-[720px]  ${
              currentSlide === 1
                ? "block animate__animated animate__fadeIn"
                : "hidden"
            }`}
          >
            <img src='/2.webp' className='w-full ' />
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
              currentSlide === 2
                ? "block animate__animated animate__fadeIn"
                : "hidden"
            }`}
          >
            <img src='/3.webp' className='w-full' />
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
              currentSlide === 3
                ? "block animate__animated animate__fadeIn"
                : "hidden"
            }`}
          >
            <img src='/1.webp' className='w-full' />
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
              currentSlide === 4
                ? "block animate__animated animate__fadeIn"
                : "hidden"
            }`}
          >
            <img src='/2.webp' className='w-full' />
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
        <div className='hero bg-base-200 pt-10 pb-10'>
          <div className='hero-content text-center '>
            <div className='max-w-ld'>
              <h1 className='text-5xl font-bold '>
                Master Spanish Vocabulary with Ease
              </h1>
              <p className='py-6'>
                Start your journey to fluency today! Explore a dynamic and
                interactive platform designed to make learning Spanish
                vocabulary simple, fun, and effective. Whether you&apos;re a
                beginner or aiming to perfect your skills, we&apos;ve got you
                covered.
              </p>
              <NavLink
                to='/signup'
                className='btn bg-green-500 text-base-200 text-2xl'
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:flex lg:pl-60 lg:pr-60 lg:pt-20 shadow-lg lg:pb-10 gap-4 '>
        <div className='hero bg-base-300 border-2 rounded-xl '>
          <div className='hero-content text-center'>
            <div className='max-w-md'>
              <figure className='pt-20 pb-10 flex justify-center'>
                <img width={200} src='/target.png' alt='' />
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
        <div className='hero bg-base-300 border-2 rounded-xl'>
          <div className='hero-content text-center'>
            <div className='max-w-md'>
              <figure className='pt-20 pb-10 flex justify-center'>
                <img width={200} src='/how.png' alt='' />
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

      <section>
        <div>
          <div className='container mx-auto text-center'>
            <h2 className='lg:text-3xl font-bold mb-8'>What we offer</h2>
            <div className='flex justify-center min-w-screen'>
              <div className='p-6 bg-base-300 rounded-lg shadow-lg'>
                <div className='flex justify-center'>
                  <img width={200} src='/shrug.png' alt='' />
                </div>
                <h3 className='lg:text-xl font-semibold'>
                  We offer 10+ Lessons and Hundreds of word with text to speech
                  features for your learning enhancement and a curated list of
                  Tutorial videos to learn spanish vocabulary
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto text-center pt-4 '>
          <h2 className='lg:text-3xl font-bold mb-8   '>Learning Pathway</h2>
          <ul className='timeline timeline-vertical'>
            <li>
              <div className='timeline-start timeline-box '>Spanish Word</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-end timeline-box'>English Meaning</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-start timeline-box'>Pronunciation</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-end timeline-box'>When to Say!</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className='timeline-start timeline-box'>
                Explainer Videos <FaYoutube />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div>
        <section className='bg-base-100 py-16'>
          <div className='container mx-auto text-center '>
            <NavLink
              to='/lets-learn'
              className='btn text-xl font-semibold hover:text-black mb-8 text-base-200 bg-green-500'
            >
              <HiOutlineArrowRightStartOnRectangle />
              Lets Learn
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
