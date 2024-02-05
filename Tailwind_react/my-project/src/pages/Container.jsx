import { Outlet, Link } from "react-router-dom";

const Container = () => {
  return (
    <>
      <div className="imag w-screen h-screen flex justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center items-center p-6 font-serif font-bold ">
            CREATIVE DESIGN
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              nostrum id iusto. Commodi incidunt illum quo quia nesciunt
              excepturi mollitia error quas, nulla saepe animi odit quibusdam
              nihil explicabo ducimus?
            </p>
             <br/>
             <div className="flex justify-center align-middle ">
      <h4 className="divy">
        <Link to="llearn">Learn More</Link>
      </h4>
       <h4 className="purchas ">
        <Link to="pur">Purchase it</Link>
      </h4> 
    </div>
          </div>

            
        </div>
        <br/>
        
      </div>
      
      <Outlet />
    </>
  );
};
export default Container;
