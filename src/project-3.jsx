import './App.css';


function  App() {
    
  return ( 
            <>
            <div className='grid gap-4 md: grid-cols-2 sm:grid-cols-1'>
              <div className='product-list'>
                <p className='text-black font-semibold'>Desserts</p>
                <div className='grid gap-4 sm: grid-flow-col-1 md:grid-cols-3'>
                  <div className=''>
                    <img src="images/1.jpg" className='rounded-lg h-52 w-52' alt="" />
                    <div className=''><button className="text-black bg-white rounded-full border-red-500 ">Add to Cart</button></div>
                

 
                    <div className='text-left'>
                        <p>waffle</p>
                        <p>waffle with Berries</p>
                        <p className='text-red-400'>$6.50</p>
                    </div>
                    </div>


                 

                </div>
              

              </div>
              <div className='cart-list'>
                <div className=''>
                  

                </div>
  
              </div>
            </div>
            
            </>




  );


};

export default App