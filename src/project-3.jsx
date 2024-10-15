import './App.css';


function  App() {
    
  return ( 
            <>
            <h1 className='font-bold text-black text-left'>Desserts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gpa-4'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
           
              <div className='p-4 flex flex-col place-content-center items-end'>
                <img src="./images/1.jpg" className='h-[150px] w-[550px] rounded-lg' alt="" />
                <button className='bg-white  border-red-300 text-black text-sm rounded-3xl absolute mx-9'>Add to Cart</button>
                <div className='text-black text-left py-8 px-8'>
                  <p className='text-slate-500 text-xs'>Waffle</p>
                  <p className='text-sm'>Waffle with berries</p>
                  <p className='text-red-600'>$6.50</p>
              </div>
              </div>
              <div className='p-4 flex flex-col place-content-center items-end'>
                <img src="./images/2.jpg" className='h-[150px] w-[550px] rounded-lg' alt="" />
                <button className='bg-white  border-red-300 text-black text-sm rounded-3xl absolute mx-9'>Add to Cart</button>
                <div className='text-black text-left py-8 px-8'>
                  <p className='text-slate-500 text-xs'>Waffle</p>
                  <p className='text-sm'>Waffle with berries</p>
                  <p className='text-red-600'>$6.50</p>
              </div>
              </div>
              <div className='p-4 flex flex-col place-content-center items-end'>
                <img src="./images/3.jpg" className='h-[150px] w-[550px] rounded-lg' alt="" />
                <button className='bg-white  border-red-300 text-black text-sm rounded-3xl absolute mx-9'>Add to Cart</button>
                <div className='text-black text-left py-8 px-8'>
                  <p className='text-slate-500 text-xs'>Waffle</p>
                  <p className='text-sm'>Waffle with berries</p>
                  <p className='text-red-600'>$6.50</p>
              </div>
              </div>
              <div className='p-4 flex flex-col place-content-center items-end'>
                <img src="./images/4.jpg" className='h-[150px] w-[550px] rounded-lg' alt="" />
                <button className='bg-white  border-red-300 text-black text-sm rounded-3xl absolute mx-9'>Add to Cart</button>
                <div className='text-black text-left py-8 px-8'>
                  <p className='text-slate-500 text-xs'>Waffle</p>
                  <p className='text-sm'>Waffle with berries</p>
                  <p className='text-red-600'>$6.50</p>
              </div>
              </div>
              <div className='p-4 flex flex-col place-content-center items-end'>
                <img src="./images/5.jpg" className='h-[150px] w-[550px] rounded-lg' alt="" />
                <button className='bg-white  border-red-300 text-black text-sm rounded-3xl absolute mx-9'>Add to Cart</button>
                <div className='text-black text-left py-8 px-8'>
                  <p className='text-slate-500 text-xs'>Waffle</p>
                  <p className='text-sm'>Waffle with berries</p>
                  <p className='text-red-600'>$6.50</p>
              </div>
              </div>
              <div className='p-4 flex flex-col place-content-center items-end'>
                <img src="./images/6.jpg" className='h-[150px] w-[550px] rounded-lg' alt="" />
                <button className='bg-white  border-red-300 text-black text-sm rounded-3xl absolute mx-9'>Add to Cart</button>
                <div className='text-black text-left py-8 px-8'>
                  <p className='text-slate-500 text-xs'>Waffle</p>
                  <p className='text-sm'>Waffle with berries</p>
                  <p className='text-red-600'>$6.50</p>
              </div>
              </div>
              <div className='p-4 flex flex-col place-content-center items-end'>
                <img src="./images/7.jpg" className='h-[150px] w-[550px] rounded-lg' alt="" />
                <button className='bg-white  border-red-300 text-black text-sm rounded-3xl absolute mx-9'>Add to Cart</button>
                <div className='text-black text-left py-8 px-8'>
                  <p className='text-slate-500 text-xs'>Waffle</p>
                  <p className='text-sm'>Waffle with berries</p>
                  <p className='text-red-600'>$6.50</p>
              </div>
              </div>
              <div className='p-4 flex flex-col place-content-center items-end'>
                <img src="./images/8.jpg" className='h-[150px] w-[550px] rounded-lg' alt="" />
                <button className='bg-white  border-red-300 text-black text-sm rounded-3xl absolute mx-9'>Add to Cart</button>
                <div className='text-black text-left py-8 px-8'>
                  <p className='text-slate-500 text-xs'>Waffle</p>
                  <p className='text-sm'>Waffle with berries</p>
                  <p className='text-red-600'>$6.50</p>
              </div>
              </div>
              <div className='p-4 flex flex-col place-content-center items-end'>
                <img src="./images/9.jpg" className='h-[150px] w-[550px] rounded-lg' alt="" />
                <button className='bg-white  border-red-300 text-black text-sm rounded-3xl absolute mx-9'>Add to Cart</button>
                <div className='text-black text-left py-8 px-8'>
                  <p className='text-slate-500 text-xs'>Waffle</p>
                  <p className='text-sm'>Waffle with berries</p>
                  <p className='text-red-600'>$6.50</p>
              </div>
              </div>


            </div>
            <div className='text-red-800 row-span-2 bg-white m-6 rounded-lg'>
             <p className='font-bold text-lg'>Your Cart (0)</p>
              <button className='bg-white border-red-500'>Add to cart</button>
            </div>
            </div>
            </>




  );


};

export default App