import Proyect from "./Proyect";
import data from "../data";

function Proyects() {
  return (
    <div className="md:w-1/2 h-screen overflow-y-scroll ">
      <div className="">
        <h2 className="text-5xl text-dorado mt-5 text-center   ">Projects</h2>
      </div>
      <div className="flex flex-col items-center ">
        {data &&
          data.map((proy) => (
            <Proyect
              title={proy.titulo}
              img={proy.img}
              descripcion={proy.descripcion}
              page={proy.page}
              code={proy.code}
            />
          ))}
      </div>
    </div>
  );
}

export default Proyects;
