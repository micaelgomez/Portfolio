import foto from "../img/fotoo.jpg";
import github from "../img/github.png";

const Header = () => {
  function linkedId(e) {}

  return (
    <div className="md:w-1/2 bg-black min-h-screen rounded-md border  border-dorado max-h-10">
      <div className="p-3 m-5 flex justify-around   ">
        <img
          src={foto}
          className="max-w-xs border rounded-full border-dorado  "
        ></img>
        <div className="ml-10">
          <h1 className="text-8xl text-dorado mt-5 ">Hello!</h1>
          <h1 className="text-5xl text-dorado mt-5 ">
            I'm Micael Alessandro Gomez
          </h1>
          <h3 className="text-2xl text-white mt-5 ">
            Full Stack Web Developer
          </h3>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-dorado mt-5 text-center ">About me</h2>
        <p className="text-1xl text-white mt-5 text-center px-3">
          I lived part of my life in Italy and Argentina, which enables me to
          speak both languages ​​without problems. In addition, I manage the
          English language at an intermediate level. <br></br>I trained
          professionally and academically within the pharmaceutical industry. My
          beginnings were as an administrative cadet and later as a Bidding
          Analyst.<br></br> The desire to continue growing led me to study
          programming at{" "}
          <a  className=" text-dorado " target="_blank" href="https://www.soyhenry.com/pm-arg?utm_source=Google&utm_medium=CPC&utm_campaign=HENRY_AW_SEARCH_ARG_GENERICA_P&gclid=Cj0KCQiA8vSOBhCkARIsAGdp6RS7VXRcZKjzQayk6GeR6vvBRBrRaO5KeRGi6kySZchkJVuF30z3g78aAjKXEALw_wcB">
            Henry Bootcamp
          </a>{" "}
         and find a new world that I am passionate about! I
          consider myself a proactive, decisive person and capable of working
          individually and as a team.
        </p>
      </div>

      <div>
        <h2 className="text-3xl text-dorado mt-5 text-center ">Contact me</h2>
        <div className="flex justify-center mt-2  pb">
          <a
            className="mx-2"
            target="_blank"
            href="https://www.linkedin.com/in/micael-alessandro-gomez-fullstack/"
          >
            <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" />
          </a>
          <a
            className="mx-2"
            target="_blank"
            href="https://github.com/micaelgomez"
          >
            <img src={github} />
          </a>
          <a
            className="mx-2"
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&source=mailto&to=mickii.gomez.mg@gmail.com"
          >
            <img src="https://img.icons8.com/color/48/000000/gmail--v1.png" />
          </a>
        </div>
        <div className="pb-2">
          <h2 className="text-3xl text-dorado mt-5 text-center ">My Stack</h2>
          <div className="flex justify-center mt-2 ">
            <img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />
            <img src="https://img.icons8.com/color/48/000000/css3.png" />
            <img src="https://img.icons8.com/color/48/000000/javascript--v2.png" />
            <img src="https://img.icons8.com/officel/40/000000/react.png" />
            <img src="https://img.icons8.com/color/48/000000/redux.png" />
            <img src="https://img.icons8.com/fluency/48/000000/node-js.png" />
            <img src="https://img.icons8.com/color/48/000000/postgreesql.png" />
            <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
