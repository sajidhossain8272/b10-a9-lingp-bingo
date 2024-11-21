import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import spanishWords from "../../spanishWords";
import { FaPlay } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Lessons = () => {
  const { lessonNo } = useParams();
  const [lessonWords, setLessonWords] = useState([]);
  const [difficulty, setDifficulty] = useState("Unknown");

  useEffect(() => {
    const filteredWords = spanishWords.filter(
      (word) => word.lesson_no === parseInt(lessonNo)
    );
    setLessonWords(filteredWords);

    if (filteredWords.length > 0) {
      setDifficulty(filteredWords[0].difficulty || "Unknown");
    }
  }, [lessonNo]);

  const handleSpeak = (word) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Your browser does not support text-to-speech!");
    }
  };

  const getCardClassByDifficulty = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-300"; 
      case "medium":
        return "bg-blue-300"; 
      case "difficult":
        return "bg-red-300"; 
      default:
        return "bg-gray-200"; 
    }
  };

  return (
    <div className="dark:text-base-200">
      <Helmet>
        <title>Lingo Bingo - Lessons</title>
      </Helmet>
      <Nav />

      <div className='lesson-container pb-20 lato-regular'>
      <div className="flex justify-center pt-4 gap-4">

        <div className="btn bg-black text-white hover:bg-black">
        <h1 className='flex justify-center kosugi-maru-regular'>Lesson {lessonNo}</h1></div>
        <NavLink className="btn kosugi-maru-regular " to="/lets-learn"> Back to Lesson </NavLink></div>


        <ul>
          {lessonWords.length > 0 ? (
            lessonWords.map((word) => (
              <div
                key={word.id}
                className={`p-4 m-4 lg:ml-96 lg:mr-96 grid lg:grid-cols-2 border-2 shadow-xl pb-10 ${getCardClassByDifficulty(
                  difficulty
                )}`}
              >
                <h3 className='text-2xl'>
                  {word.word}{" "}
                  <button
                    onClick={() => handleSpeak(word.word)}
                    className='btn btn-sm'
                  >
                    <FaPlay />
                  </button>
                </h3>
                <p>
                  <strong>Meaning: </strong> {word.meaning} &nbsp;
                  <button
                    onClick={() => handleSpeak(word.meaning)}
                    className='btn btn-sm'
                  >
                    <FaPlay />
                  </button>
                </p>
                <p>
                  <strong>Pronunciation:</strong> {word.pronunciation} &nbsp;
                  <button
                    onClick={() => handleSpeak(word.pronunciation)}
                    className='btn btn-sm'
                  >
                    <FaPlay />
                  </button>
                </p> <br />
                <p>
                  <strong>Parts of Speech:</strong> ({word.part_of_speech})
                </p>

                <button
                  className='btn max-w-xs'
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  {" "}
                  <strong>When to Say</strong>
                </button>
                <dialog
                  id='my_modal_5'
                  className='modal modal-bottom sm:modal-middle dark:text-gray-200'
                >
                  <div className='modal-box'>
                    <h3 className='text-lg font-extrabold dark:text-gray-200'>When to Say!</h3>
                    <h3 className='text-2xl'>
                      {word.word}{" "}
                      <button
                        onClick={() => handleSpeak(word.word)}
                        className='btn btn-sm'
                      >
                        <FaPlay />
                      </button>
                    </h3>

                    <p>
                      <strong>Meaning: </strong> {word.meaning} &nbsp;
                      <button
                        onClick={() => handleSpeak(word.meaning)}
                        className='btn btn-sm'
                      >
                        <FaPlay />
                      </button>
                    </p>

                    <p>
                      <strong>When to Say:</strong> {word.when_to_say} &nbsp;
                      <button
                        onClick={() => handleSpeak(word.when_to_say)}
                        className='btn btn-sm'
                      >
                        <FaPlay />
                      </button>
                    </p>
                    <p>
                      <strong>Example:</strong> {word.example} &nbsp;
                      <button
                        onClick={() => handleSpeak(word.example)}
                        className='btn btn-sm'
                      >
                        <FaPlay />
                      </button>
                    </p>

                    <div className='modal-action '>
                      <form method='dialog'>
                        <button className='btn'>Close</button>
                      </form>
                    </div>
                  </div>
                </dialog>
               
              </div>
            ))
          ) : (
            <p>No words found for this lesson.</p>
          )}
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Lessons;
