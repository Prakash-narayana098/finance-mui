import './App.css';


function App() {
    
  return (
    <div className="bg-[#f1eeee]  flex items-center justify-center">

    <div className="grid  grid-cols-4  gap-4 m-auto ">

        {/* first card  */}

        <div className="bg-[#f9eee1] row-span-2 rounded-lg p-5 shadow-xl mx-auto">
            <h2 className='text-[33px] leading-8 font-sans font-medium text-left mt-5'>
                Create and schedule content <span className='text-purple-500 italic'>quicker.</span>
            </h2>
            <img src="/assets/illustration-create-post.webp" alt=""  className='mt-6' />
        </div>

        {/* second card */}

        <div className="bg-[#7650dc] col-span-2 text-center flex flex-col items-center justify-center  p-[2.5em] rounded-[10px] shadow-xl">
            <h1 className='text-[45px] text-center text-white leading-tight font-[500]'>Social Media
                <span className='text-[#ffcb6b] font-medium'>10x </span>
                 <span className='italic'>Faster</span> with AI
            </h1>
            <img src="/assets/illustration-five-stars.webp" alt="" className='w-[280px] items-center mt-[18px] mb-[8px]' />
            <p className="text-[18px] text-white font-light">Over 4,000 5-star reviews</p>
        </div>

        {/* third card */}

        <div className="bg-[#dacffc] row-span-3 p-[18px] rounded-[10px] overflow-hidden shadow-xl">
           <h2 className='text-[22px]  font-semibold text-left mt-[11px]'>Schedule to social media.</h2> 
           <img src="https://cendyz.github.io/bento-grid-main/img/illustration-schedule-posts.webp" alt="" className='ml-[30px] w-[300px] h-[268px] my-[18px] object-fill' />
           <p className='text-[16px] text-left m-[0_16px_8px_8px]'>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>

        {/* fourth card */}

        <div className="bg-white row-span-2 p-[18px] rounded-[10px] overflow-hidden shadow-xl">

        <img src="https://cendyz.github.io/bento-grid-main/img/illustration-multiple-platforms.webp" alt="Social media links" className='w-[290px]  ml-[30px]'/>
        <h2 className='text-[24px] font-[500] font-sans leading-tight text-balance mt-[12px] mr-[19px]'>Manage <br /> multiple <br /> accounts and <br />platforms.</h2>

        </div>

        {/* fifth card */}

        <div className="bg-[#ffcb6b] row-span-2 p-[18px_18px_0] relative overflow-hidden rounded-[10px] shadow-xl">
        <h2 className='text-[24px] mr-[24px] leading-tight font-[500] '>Maintain a consistent posting schedule.</h2>
        <img src="https://cendyz.github.io/bento-grid-main/img/illustration-consistent-schedule.webp" alt="Calendar with marks" className='w-[177px] h-[133px]   absolute bottom-[-60px]'/>
        </div>

        {/* sixth card */}

        <div className="bg-[#ffcb6b] row-span-2 rounded-[10px] p-[1em] flex flex-col justify-around shadow-xl">
        <h2 className='text-[24px] font-[500] leading-tight font-sans mr-[28px] pt-3'>Write your content using AI.</h2>
        <img src="https://cendyz.github.io/bento-grid-main/img/illustration-ai-content.webp" alt="Conversation"  className='w-[200px] h-[203px] mt-[27px]'/>
        </div>

        {/* seven card */}

        <div className="bg-white p-[18px] rounded-[10px] shadow-xl">
        <h2 className='text-[53px] font-[500] font-sans'>&gt;56%</h2>
    <p className='text-[16px] m-[8px_0_32px]'>faster audience growth</p>
    <img src="https://cendyz.github.io/bento-grid-main/img/illustration-audience-growth.webp" alt="People profile pictures"  className='w-[160px]'/>
        </div>

        {/* eight card */}

        <div className="bg-[#7650dc] col-span-2 p-[18px] grid grid-cols-2 rounded-[10px] justify-center items-center shadow-xl">
        <img src="https://cendyz.github.io/bento-grid-main/img/illustration-grow-followers.webp" alt="Graph with raising followers" />
        <h2 className='text-[24px] leading-tight text-white font-[500] ml-[10px]'>Grow followers with non-stop content.</h2>
        </div>

    </div>

</div>
)
}

export default App 