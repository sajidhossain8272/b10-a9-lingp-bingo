import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { BiBook, BiHome, BiSpeaker } from "react-icons/bi";
import { TiCloudStorageOutline } from "react-icons/ti";

const Success = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section ref={ref} className='bg-base-100 py-16'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold  mb-8'>Our Success at a Glance</h2>

        <div className='grid grid-cols-2 sm:grid-cols-4 gap-10'>
          <div className='p-6 bg-base-300 rounded-lg shadow-lg '>
            <figure className='flex justify-center'>
              <BiHome className='text-6xl ' />
            </figure>
            <h3 className='text-xl font-semibold '>Users Served </h3>
            <p className='text-4xl font-bold text-green-600'>
              {inView && (
                <CountUp start={0} end={50250} duration={5.5} separator=',' />
              )}+
            </p>
          </div>

          <div className='p-6 bg-base-300 rounded-lg shadow-lg'>
            <figure className='flex justify-center'>
              <BiBook className='text-6xl ' />
            </figure>
            <h3 className='text-xl font-semibold'>Lessons</h3>
            <p className='text-4xl font-bold text-green-600'>
              {inView && (
                <CountUp start={0} end={50} duration={5.5} separator=',' />
              )}+
            </p>
          </div>

          <div className='p-6 bg-base-300 rounded-lg shadow-lg'>
            <figure className='flex justify-center'>
              <BiSpeaker className='text-6xl ' />
            </figure>
            <h3 className='text-xl font-semibold'>Vocabulary</h3>
            <p className='text-4xl font-bold text-green-600'>
              {inView && (
                <CountUp start={0} end={5000} duration={5.5} separator=',' />
              )}+
            </p>
          </div>

          <div className='p-6 bg-base-300 rounded-lg shadow-lg'>
            <figure className='flex justify-center'>
              <TiCloudStorageOutline className='text-6xl ' />
            </figure>
            <h3 className='text-xl font-semibold'>Tutorials</h3>
            <p className='text-4xl font-bold text-green-600'>
              {inView && (
                <CountUp start={0} end={135} duration={5.5} separator=',' />
              )}+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
