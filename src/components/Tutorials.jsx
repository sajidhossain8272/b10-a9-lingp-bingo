import Footer from "./Footer";
import Nav from "./Nav";
import { Helmet } from "react-helmet-async";

const Tutorials = () => {
  return (
    <div className="lato-regular">
      <Helmet>
        <title>Lingo Bingo - Tutorial</title>
      </Helmet>
      <Nav />
      <section>
        <h1 className='text-3xl flex justify-center pb-8 pt-8 font-bold'>
          Spanish Vocabulary Tutorial
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pl-8 pr-8'>
          <div className='relative w-full pb-[56.25%]'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src='https://www.youtube.com/embed/lJw40ENfr2w?si=KpHJnuQrdhfQxNbL'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='relative w-full pb-[56.25%]'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src='https://www.youtube.com/embed/SOst-FOziZY?si=phGH-hBg1Y82ckht'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='relative w-full pb-[56.25%]'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src='https://www.youtube.com/embed/lRq3DFY0Cms?si=UyB41-VfV6YmfN-A'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='relative w-full pb-[56.25%]'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src='https://www.youtube.com/embed/tncUIdgt6L8?si=TKeidHcAxczGyAct'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='relative w-full pb-[56.25%]'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src='https://www.youtube.com/embed/ss75sGcpg3k?si=ksOcD8KjklDbVPyj'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
          <div className='relative w-full pb-[56.25%]'>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src='https://www.youtube.com/embed/6XzBAHRhh0w?si=2Cc2Nl8MGR5p-zFO'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className='flex justify-center pb-10 pt-10'>
          <button className='btn bg-green-300 font-bold dark:text-base-200 '>
            {" "}
            Learn Vocabularies{" "}
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tutorials;
