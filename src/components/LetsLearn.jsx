import Footer from "./Footer";
import Nav from "./Nav";
import spanishWords from "../../spanishWords";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const LetsLearn = () => {
  const lessons = [...new Set(spanishWords.map((word) => word.lesson_no))];

  const getDifficultyForLesson = (lessonNo) => {
    const lessonWords = spanishWords.filter(
      (word) => word.lesson_no === lessonNo
    );
    return lessonWords.length > 0 ? lessonWords[0].difficulty : "Unknown";
  };

  const getCardClassByDifficulty = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-200"; 
      case "medium":
        return "bg-blue-200";
      case "difficult":
        return "bg-red-200"; 
      default:
        return "bg-gray-200"; 
    }
  };

  return (
    <div>
      <Helmet>
        <title>Lingo Bingo - Let&apos;s Learn</title>
      </Helmet>
      <Nav />

      <div className="container mx-auto pt-10 pb-8 lato-regular">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          Let&apos;s Learn: Explore Spanish Lessons by Difficulty
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 pl-4 pr-4">
          {lessons.map((lessonNo) => {
            const difficulty = getDifficultyForLesson(lessonNo);
            return (
              <div
                key={lessonNo}
                className={`card text-primary-content w-full sm:w-80 md:w-96 mx-auto ${getCardClassByDifficulty(difficulty)}`}
              >
                <div className="card-body">
                  <h2 className="card-title text-black ">Lesson {lessonNo}</h2>
                  <p className="text-black">Difficulty: {difficulty}</p>
                  <div className="card-actions justify-end">
                    <NavLink to={`/lesson/${lessonNo}`} className="btn ">
                    <span className="kosugi-maru-regular">  Learn </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h1 className="flex justify-center text-3xl pt-10 pb-4 font-bold">Video Tutorials:<span className="font-medium pl-1">Explore helpful videos to learn vocabulary</span></h1>
      <div className="flex justify-center pb-10">
        <NavLink className="btn bg-green-500 " to="/tutorial">
          {" "}
        <span className="kosugi-maru-regular text-base-200 font-extrabold hover:text-white ">View More </span>  
        </NavLink>{" "}
      </div>

      <div className="flex pl-48 pr-48 gap-4">
        <div className="relative w-full pb-[56.25%] ">
          <iframe
            className="absolute top-0 left-0 w-full h-1/2 "
            src="https://www.youtube.com/embed/lJw40ENfr2w?si=KpHJnuQrdhfQxNbL"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-1/2"
            src="https://www.youtube.com/embed/SOst-FOziZY?si=phGH-hBg1Y82ckht"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LetsLearn;
