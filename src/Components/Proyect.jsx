

function Proyect({title,img,descripcion,page,code}) {
  return (
    <div className="flex flex-col items-center mb-4"  >
      <div className=" md:w-3/4 mt-5  rounded-md bg-white drop-shadow-lg flex flex-col items-center">
       <div className= {`bg-${img}  h-72 bg-center bg-cover w-full`}>

       </div>
        <h3 className="text-3xl font-medium text-center mt-3">{title}</h3>
        <p className="p-5 text-center">
         {descripcion}
        </p>
        <div className="flex  mb-4 ">
          <div className="mx-5 p-3 bg-negro rounded-md text-white cursor-pointer hover:bg-dorado ">
            Go to page
          </div>
          <div className="mx-5 p-3 bg-negro rounded-md text-white cursor-pointer hover:bg-dorado ">
            Explore code
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyect;
