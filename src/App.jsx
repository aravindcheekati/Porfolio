import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const [menu, setMenu] = useState(false)

  const renderNavSection = () => {
    return (
        <nav className='bg-white flex flex-row justify-between items-center px-4 lg:px-20 py-2 w-full h-16'>
            <div>
              <img src='./images/logo.png' alt='logo' className='w-24'/>
            </div>
            <div className='hidden lg:block'>
              <ul className='flex gap-6'>
                <li><a href='#' className='font-medium hover:text-blue-500'>Home</a></li>
                <li><a href='#' className='font-medium hover:text-blue-500'>About</a></li>
                <li><a href='#' className='font-medium hover:text-blue-500'>Services</a></li>
                <li><a href='#' className='font-medium hover:text-blue-500'>Portfolio</a></li>
                <li><a href='#' className='font-medium hover:text-blue-500'>Blog</a></li>
                <li><a href='#' className='font-medium hover:text-blue-500'>Contact</a></li>
              </ul>
            </div>
            <div className='space-x-2'>
              <button className='bg-blue-500 px-4 py-2 md:px-6 md:py-3 rounded-full text-white'>
                Let's Talk
                <i className='ri-arrow-right-up-line ml-1'></i>
              </button>
              <button className='bg-blue-500 px-4 py-2 md:px-6 md:py-3 rounded-lg text-white lg:hidden' onClick={()=>setMenu(!menu)}>
                {menu ? <i className='ri-close-large-line text-lg'></i> : <i className='ri-menu-3-line text-lg'></i> }
              </button>
            </div>
          </nav>
    )
  }

  const renderHeaderSection = () => {
    return (
      <header className='w-full h-auto py-4 px-4 lg:px-20 grid lg:grid-cols-2 bg-[url("./images/main-bg.png")] object-cover'>
            <div className='flex flex-col justify-center items-start space-y-5'>
              <span className='px-6 py-2 bg-blue-100 text-blue-500 rounded-full'>👋 Welcome to my portfolio</span>
              <div>
                <h1 className='md:text-8xl font-bold text-[36px]'>I'm Aravind</h1>
                <h2 className='md:text-5xl font-bold text-blue-500 text-[24px]'>Full Stack Web Developer</h2>
              </div>
              <p className='text-slate-500 text-[20px] md:text-lg'>Since 1999, we are working for business, agency or individuals for building digital content based in New York, USA.</p>
              <button className='bg-blue-500 w-16 h-16 rounded-full'><i className='ri-arrow-right-up-line text-2xl text-white'></i></button>
            </div>
            <div>
              <div className='lg:p-10 relative'>
                <img src="./images/profile-image.jpg" alt="profile" className='w-full h-auto rounded-full'/>
                <div className='bg-blue-500 w-40 h-40 rounded-full flex flex-col justify-center items-center gap-2 absolute bottom-0'>
                    <h2 className='text-center text-4xl text-white font-medium'>30+</h2>
                    <p className='text-center text-white font-medium'>Years Of <br />Experience</p>
                </div>
              </div>
            </div>
        </header>
    )
  }

  const renderClientSection = () => {
    return (
      <section className='w-full min-h-screen px-4 py-4 lg:py-10 lg:px-20 bg-slate-100'>
          <div className='text-center py-8 lg:py-10 space-y-2'>
            <h5 className='text-lg lg:text-2xl text-blue-500 font-medium'><i className='ri-arrow-right-double-line mt-1'></i>Clients</h5>
            <h1 className='text-2xl font-bold lg:text-4xl'>Clients I've worked with</h1>
          </div>
          <div className='grid lg:grid-cols-6'>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/1.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/2.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/3.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/4.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/5.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/6.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/7.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/8.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/9.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/10.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/11.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/12.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/13.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/14.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/15.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/16.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/17.png" alt="" />
            </div>
            <div className='flex flex-row items-center justify-center border-r border-b p-6'>
              <img className="w-[180px]" src="./images/18.png" alt="" />
            </div>
          </div>
      </section>
    )
  }

  const renderServicesSection = () => {
    return (
      <section className='w-full min-h-screen px-4 py-4 lg:py-10 lg:px-20 bg-slate-50'>
          <div className='text-center py-8 lg:py-10 space-y-2'>
            <h5 className='text-lg lg:text-2xl text-blue-500 font-medium'><i className='ri-arrow-right-double-line mt-1'></i>MY SERVICES</h5>
            <h1 className='text-2xl font-bold lg:text-4xl'>What I Do</h1>
          </div>
          <div className='grid lg:grid-cols-4 gap-5'>
              <div className='bg-white p-10 space-y-6 rounded'>
                  <div>
                    <img src="./images/pencil.png" alt="" className='w-14 h-auto'/>
                  </div>
                  <h2 className='text-2xl font-medium'>Web Copywriter</h2>
                  <p className='text-lg text-slate-500'>Freelance web copyrighting include adverts, websites, digital media or posts.</p>
              </div>
              <div className='bg-white p-10 space-y-6 rounded'>
                  <div>
                    <img src="./images/contract.png" alt="" className='w-14 h-auto'/>
                  </div>
                  <h2 className='text-2xl font-medium'>Brochure Copywriter</h2>
                  <p className='text-lg text-slate-500'>Freelance web copyrighting include adverts, websites, digital media or posts.</p>
              </div>
              <div className='bg-white p-10 space-y-6 rounded'>
                  <div>
                    <img src="./images/notepad.png" alt="" className='w-14 h-auto'/>
                  </div>
                  <h2 className='text-2xl font-medium'>Digital Copywriting</h2>
                  <p className='text-lg text-slate-500'>Freelance web copyrighting include adverts, websites, digital media or posts.</p>
              </div>
              <div className='bg-white p-10 space-y-6 rounded'>
                  <div>
                    <img src="./images/letter.png" alt="" className='w-14 h-auto'/>
                  </div>
                  <h2 className='text-2xl font-medium'>Email Copywriting</h2>
                  <p className='text-lg text-slate-500'>Freelance web copyrighting include adverts, websites, digital media or posts.</p>
              </div>
              <div className='bg-white p-10 space-y-6 rounded'>
                  <div>
                    <img src="./images/book.png" alt="" className='w-14 h-auto'/>
                  </div>
                  <h2 className='text-2xl font-medium'>Blog Content Writer</h2>
                  <p className='text-lg text-slate-500'>Freelance web copyrighting include adverts, websites, digital media or posts.</p>
              </div>
              <div className='bg-white p-10 space-y-6 rounded'>
                  <div>
                    <img src="./images/planning.png" alt="" className='w-14 h-auto'/>
                  </div>
                  <h2 className='text-2xl font-medium'>Press Release Writer</h2>
                  <p className='text-lg text-slate-500'>Freelance web copyrighting include adverts, websites, digital media or posts.</p>
              </div>
              <div className='bg-white p-10 space-y-6 rounded'>
                  <div>
                    <img src="./images/replay.png" alt="" className='w-14 h-auto'/>
                  </div>
                  <h2 className='text-2xl font-medium'>Video Script writer</h2>
                  <p className='text-lg text-slate-500'>Freelance web copyrighting include adverts, websites, digital media or posts.</p>
              </div>
              <div className='bg-white p-10 space-y-6 rounded'>
                  <div>
                    <img src="./images/pen-and-paper.png" alt="" className='w-14 h-auto'/>
                  </div>
                  <h2 className='text-2xl font-medium'>Content Marketing</h2>
                  <p className='text-lg text-slate-500'>Freelance web copyrighting include adverts, websites, digital media or posts.</p>
              </div>
          </div>
      </section>
    )
  }

  const renderResumeSection = () => {
    return (
      <section className='w-full min-h-screen px-4 py-4 lg:py-10 lg:px-20 bg-slate-100'>
          <div className='text-center py-8 lg:py-10 space-y-2'>
            <h5 className='text-lg lg:text-2xl text-blue-500 font-medium'>^ RESUME ^</h5>
          </div>
          <div>
            <div className='m-auto lg:w-9/12 bg-white rounded-md my-4'>
              <div className='flex flex-col lg:flex-row justify-between lg:items-center p-6'>
                <h2 className='lg:text-2xl text-xl font-semibold'>Web Copywriter</h2>
                <p className='lg:text-xl text-medium text-slate-500 mt-2'>2022 - 2024 ( Present )</p>
              </div>
              <div className='bg-slate-50 p-6 flex flex-col lg:flex-row gap-8'>
                <div className='flex lg:flex-col lg:items-center lg:justify-center'>
                  <img src="./images/17.png" alt="google" className='w-[150px] lg:w-full'/>
                </div>
                <div className='flex flex-col gap-3'>
                  <h2 className='lg:text-2xl text-xl font-semibold'>Google</h2>
                  <p className='text-slate-500 lg:text-lg text-[18px]'>I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
              </div>
            </div>
            <div className='m-auto lg:w-9/12 bg-white rounded-md my-4'>
              <div className='flex flex-col lg:flex-row justify-between lg:items-center p-6'>
                <h2 className='lg:text-2xl text-xl font-semibold'>Blog Content Writer</h2>
                <p className='lg:text-xl text-medium text-slate-500 mt-2'>2019 - 2021</p>
              </div>
              <div className='bg-slate-50 p-6 flex flex-col lg:flex-row gap-8'>
                <div className='flex lg:flex-col lg:items-center lg:justify-center'>
                  <img src="./images/15.png" alt="google" className='w-[150px] lg:w-full'/>
                </div>
                <div className='flex flex-col gap-3'>
                  <h2 className='lg:text-2xl text-xl font-semibold'>Toyota</h2>
                  <p className='text-slate-500 text-lg'>I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
              </div>
            </div>
            <div className='m-auto lg:w-9/12 bg-white rounded-md my-4'>
              <div className='flex flex-col lg:flex-row justify-between lg:items-center p-6'>
                <h2 className='lg:text-2xl text-xl font-semibold'>Digital Copywriter</h2>
                <p className='lg:text-xl text-medium text-slate-500 mt-2'>2017 - 2018</p>
              </div>
              <div className='bg-slate-50 p-6 flex flex-col lg:flex-row gap-8'>
                <div className='flex lg:flex-col lg:items-center lg:justify-center'>
                  <img src="./images/10.png" alt="google" className='w-[150px] lg:w-full'/>
                </div>
                <div className='flex flex-col gap-3'>
                  <h2 className='lg:text-2xl text-xl font-semibold'>Accenture</h2>
                  <p className='text-slate-500 text-lg'>I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
              </div>
            </div>
            <div className='m-auto lg:w-9/12 bg-white rounded-md my-4'>
              <div className='flex flex-col lg:flex-row justify-between lg:items-center p-6'>
                <h2 className='lg:text-2xl text-xl font-semibold'>Brochure Copywriter</h2>
                <p className='lg:text-xl text-medium text-slate-500 mt-2'>2014 - 2016</p>
              </div>
              <div className='bg-slate-50 p-6 flex flex-col lg:flex-row gap-8'>
                <div className='flex lg:flex-col lg:items-center lg:justify-center'>
                  <img src="./images/6.png" alt="google" className='w-[150px] lg:w-full'/>
                </div>
                <div className='flex flex-col gap-3'>
                  <h2 className='lg:text-2xl text-xl font-semibold'>PHILIPS</h2>
                  <p className='text-slate-500 text-lg'>I must explain to you how all this mistaken idea of denouncing pleasure and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                </div>
              </div>
            </div>
          </div>
      </section>
    )
  }

const renderWorkSection = () => {
  return (
    <section className='w-full min-h-screen px-4 py-4 lg:py-10 lg:px-20 bg-slate-50'>
        <div className='grid lg:grid-cols-2 gap-10'>
          <div>
             <img src="./images/ps_04.jpg" alt="" className='w-full rounded-t-lg'/>
             <div className='mt-2'>
              <h2 className='lg:text-2xl text-lg font-semibold'>Document Manager Application</h2>
              <p className='lg:text-lg text-sm text-slate-500'>Web Development</p>
             </div>
          </div>
          <div>
             <img src="./images/ps_03.jpg" alt="" className='w-full rounded-t-lg'/>
             <div className='mt-2'>
              <h2 className='lg:text-2xl text-lg font-semibold'>Digital Marketing</h2>
              <p className='lg:text-lg text-sm text-slate-500'>Web Development</p>
             </div>
          </div>
          <div>
             <img src="./images/ps_01.jpg" alt="" className='w-full rounded-t-lg'/>
             <div className='mt-2'>
              <h2 className='lg:text-2xl text-lg font-semibold'>Creative Portfolio</h2>
              <p className='lg:text-lg text-sm text-slate-500'>Web Development</p>
             </div>
          </div>
          <div>
             <img src="./images/ps_05.jpg" alt="" className='w-full rounded-t-lg'/>
             <div className='mt-2'>
              <h2 className='lg:text-2xl text-lg font-semibold'>Mobile App Development</h2>
              <p className='lg:text-lg text-sm text-slate-500'>Web Development</p>
             </div>
          </div>
        </div>
    </section>
  )
}

const renderTestimonialSection = () => {
  return (
    <section className='w-full h-auto px-4 py-4 lg:py-10 lg:px-20 bg-slate-100 bg-[url("./images/map-transparent.png")] object-cover'>
      <div className='text-center py-8 lg:py-10 space-y-2'>
          <h5 className='text-lg lg:text-xl text-blue-500 font-medium'><i className='ri-arrow-right-double-line mt-1'></i>TESTIMONIALS</h5>
          <h1 className='text-2xl font-bold lg:text-4xl lg:text-4xl'>What My Clients Say</h1>
      </div>
      <div className='grid lg:grid-cols-3 gap-8'>
         <div className='bg-white p-10 rounded-lg space-y-8'>
             <div className='flex flex-row justify-start items-center gap-3'>
                <h2 className='text-xl font-semibold'>Great Advice</h2>
                <div>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  </div>
              </div>
              <p className='text-lg text-slate-500'>The standard chunk of lorem Ipsum used since the some music reproduced below for those interested.</p>
              <div>
                <h2 className='lg:text-2xl text-xl font-semibold'>Mel Gibson</h2>  
                <p className='text-md text-slate-500'>clients</p>
              </div> 
         </div>
         <div className='bg-white p-10 rounded-lg space-y-8'>
             <div className='flex flex-row justify-start items-center gap-3'>
                <h2 className='text-xl font-semibold'>Design Quality</h2>
                <div>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  </div>
              </div>
              <p className='text-lg text-slate-500'>The standard chunk of lorem Ipsum used since the some music reproduced below for those interested.</p>
              <div>
                <h2 className='lg:text-2xl text-xl font-semibold'>Tom Hanks</h2>  
                <p className='text-md text-slate-500'>Jakson S</p>
              </div> 
         </div>
         <div className='bg-white p-10 rounded-lg space-y-8'>
             <div className='flex flex-row justify-start items-center gap-3'>
                <h2 className='text-xl font-semibold'>Great Solution</h2>
                <div>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  <i class="ri-star-fill text-yellow-500"></i>
                  </div>
              </div>
              <p className='text-lg text-slate-500'>The standard chunk of lorem Ipsum used since the some music reproduced below for those interested.</p>
              <div>
                <h2 className='lg:text-2xl text-xl font-semibold'>Jonny Depp</h2>  
                <p className='text-md text-slate-500'>Ceo</p>
              </div> 
         </div>
      </div>
    </section>
  )
}

const renderAboutSection = () => {
  return (
    <section  className='w-full min-h-screen px-4 py-4 lg:py-10 lg:px-20 bg-slate-50 flex items-center'>
        <div className='grid lg:grid-cols-3 gap-20 py-4'>
          <div className='lg:col-span-1 order-last lg:order-first'>
            <img src="./images/org-writer.jpg" alt=""className='rounded-full' />
          </div>
          <div className='lg:col-span-2 space-y-6 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='text-2xl font-bold lg:text-4xl lg:text-4xl'>Who I Am</h1>
            <p className='text-md text-slate-500 lg:text-xl text-center lg:text-left'>I'm William Isaac, a Freelance English Creative Copywriter, Content Writer and Communications Consultant based in New York, USA. By better copying, I create value for the companies. I have spent more than 25 + years at various copywriting agencies, advertising, public relations and digital agencies, and most recently as a freelance copywriter for brands and businesses, honing my creative writing skills.</p>
            <button className='bg-blue-500 w-16 h-16 rounded-full'><i className='ri-arrow-right-up-line text-2xl text-white'></i></button>
          </div>
        </div>
    </section>
  )
}

const renderFaqSection = () => {
  return (
    <section className='w-full min-h-screen px-4 py-4 lg:py-10 lg:px-20 bg-white'>
      <div className='text-center py-8 lg:py-10 space-y-2'>
          <h5 className='text-lg lg:text-xl text-blue-500 font-medium'><i className='ri-arrow-right-double-line mt-1'></i>FAQ</h5>
          <h1 className='text-2xl font-bold lg:text-4xl lg:text-4xl'>Your Question and Answer</h1>
      </div>
      <div className='lg:w-9/12 m-auto p-6 border-b'>
        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <h1 className='lg:text-xl text-[18px] w-10/12 font-semibold'>How do I get a quotation for my project?</h1>
            <button><i class="ri-subtract-line text-2xl"></i></button>
          </div>
          <p className='lg:text-lg text-[16px] text-slate-500'>10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.</p>
        </div>
      </div>
      <div className='lg:w-9/12 m-auto p-6 border-b'>
        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <h1 className='lg:text-xl text-[18px] w-10/12 font-semibold'>How many landing pages I can work with your product?</h1>
            <button><i class="ri-subtract-line text-2xl"></i></button>
          </div>
          <p className='lg:text-lg text-[16px] text-slate-500'>10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.</p>
        </div>
      </div>
      <div className='lg:w-9/12 m-auto p-6 border-b'>
        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <h1 className='lg:text-xl text-[18px] w-10/12 font-semibold'>Can I use your product for my client?</h1>
            <button><i class="ri-subtract-line text-2xl"></i></button>
          </div>
          <p className='lg:text-lg text-[16px] text-slate-500'>10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.</p>
        </div>
      </div>
      <div className='lg:w-9/12 m-auto p-6 border-b'>
        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <h1 className='lg:text-xl text-[18px] w-10/12 font-semibold'>Will Growth Products slow down my website?</h1>
            <button><i class="ri-subtract-line text-2xl"></i></button>
          </div>
          <p className='lg:text-lg text-[16px] text-slate-500'>10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.</p>
        </div>
      </div>
      <div className='lg:w-9/12 m-auto p-6 border-b'>
        <div className='space-y-4'>
          <div className='flex justify-between items-center'>
            <h1 className='lg:text-xl text-[18px] w-10/12 font-semibold'>Can I use your product for my client?</h1>
            <button><i class="ri-subtract-line text-2xl"></i></button>
          </div>
          <p className='lg:text-lg text-[16px] text-slate-500'>10+ years later and I’ve learned that in order to succeed in this business, I need to be your business partner and problem solver. Which is the same as saying through shrinking from toil and pain these cases.</p>
        </div>
      </div>
    </section>
  )
}

const renderUpdateSection = () => {
  return(
    <section className='w-full h-auto px-4 py-4 lg:py-10 lg:px-20 bg-slate-50'>
      <div className='text-center py-8 lg:py-10 space-y-2'>
          <h5 className='text-lg lg:text-xl text-blue-500 font-medium'><i className='ri-arrow-right-double-line mt-1'></i>UPDATES</h5>
          <h1 className='text-2xl font-bold lg:text-4xl lg:text-4xl'>Latest News & Blogs</h1>
      </div>
      <div className='grid lg:grid-cols-3 gap-10'>
        <div className='bg-white shadow rounded-t'>
          <img src="./images/post_01.jpg" alt="post" className='w-full rounded-t'/>
          <div className='p-6 space-y-4'>
            <h2 className='text-xl font-semibold'>Do you want to become a professional ?</h2>
            <div>
              <p>By Flixta | May 2, 2024</p>
            </div>
          </div>
        </div>
        <div className='bg-white shadow rounded-t'>
          <img src="./images/post_02.jpg" alt="post" className='w-full rounded-t'/>
          <div className='p-6 space-y-4'>
            <h2 className='text-xl font-semibold'>If you are new there then this ?</h2>
            <div>
              <p>By Flixta | May 2, 2024</p>
            </div>
          </div>
        </div>
        <div className='bg-white shadow rounded-t'>
          <img src="./images/post_03.jpg" alt="post" className='w-full rounded-t'/>
          <div className='p-6 space-y-4'>
            <h2 className='text-xl font-semibold'>How do you improve coding skills ?</h2>
            <div>
              <p>By Flixta | May 2, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const renderContactSection = () => {
  return (
    <section className='w-full h-auto px-4 py-4 lg:py-10 lg:px-20 lg:bg-[url("./images/map-transparent.png")] bg-slate-100 object-cover'>
        <div className='grid lg:grid-cols-2 gap-12 py-6'>
          <div className='space-y-8'>
            <div className='space-y-2'>
              <h5 className='text-xl text-blue-500 font-medium'><i className='ri-arrow-right-double-line mt-1'></i>STAY CONNECTED</h5>
              <h2 className='lg:text-4xl font-bold text-2xl'>Let’s Work Together!</h2>
            </div>
            <div className='space-y-8'>
              <div className='flex flex-row justift-start items-center gap-8'>
                <div className='lg:w-16 lg:h-16 w-14 h-14 w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center'><i class="ri-phone-line text-2xl text-white"></i></div>
                <div>
                  <p className='text-slate-500'>Phone</p>
                  <p className='lg:text-xl text-[15px] lg:font-medium'>+123-4669-1234</p>
                </div>
              </div>
              <div className='flex flex-row justift-start items-center gap-8'>
                <div className='lg:w-16 lg:h-16 w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center'><i class="ri-mail-line text-2xl text-white"></i></div>
                <div>
                  <p className='text-slate-500'>Email</p>
                  <p className='lg:text-xl text-[15px] lg:font-medium'>hello@flixta.com</p>
                </div>
              </div>
              <div className='flex flex-row justift-start items-center gap-8'>
                <div className='lg:w-16 lg:h-16 w-14 h-14 bg-blue-500 rounded-full flex justify-center items-center'><i class="ri-map-pin-line text-2xl text-white"></i></div>
                <div>
                  <p className='text-slate-500'>Address</p>
                  <p className='lg:text-xl text-[15px] lg:font-medium'>2096 New Market, New Road <br /> North Carolina, USA</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form action="" className='bg-white rounded-lg shadow grid grid-cols-2 w-full p-8 gap-4'>
                  <input type="text" className='col-span-2 lg:col-span-1 border p-3 rounded' placeholder='Full Name'/>
                  <input type="text" className='col-span-2 lg:col-span-1 border p-3 rounded' placeholder='Email'/>
                  <input type="text" className='col-span-2 lg:col-span-1 border p-3 rounded' placeholder='Your Phone'/>
                  <select type="text" className='col-span-2 lg:col-span-1 border p-3 rounded'>
                    <option>Web Development</option>
                    <option>App Development</option>
                  </select>
                  <textarea className='col-span-2 border p-4 rounded' rows="4" placeholder='Write Your Message'></textarea>
                  <div>
                    <button className='bg-blue-500 w-[180px] px-6 py-4 text-white rounded-full'>SEND MESSAGE</button>
                  </div>
            </form>
          </div>
        </div>
    </section>
  )
}

const renderFooterSection = () => {
  return (
    <section className='px-4 py-12 bg-slate-50'>
        <div className='space-y-6 flex flex-col items-center'>
          <div><img src="./images/logo.png" alt="" className='w-[100px]'/></div>
          <ul className='flex flex-wrap flex-row justify-center gap-x-5 gap-y-2'>
            <li><a href="#" className='text-[18px] text-slate-500'>Home</a></li>
            <li><a href="#" className='text-[18px] text-slate-500'>About</a></li>
            <li><a href="#" className='text-[18px] text-slate-500'>Services</a></li>
            <li><a href="#" className='text-[18px] text-slate-500'>Portfolio</a></li>
            <li><a href="#" className='text-[18px] text-slate-500'>Blog</a></li>
            <li><a href="#" className='text-[18px] text-slate-500'>Contact</a></li>
          </ul>
          <p className='text-slate-500' ><i className="ri-copyright-line"></i> 2024 Aravind Cheekati</p>
        </div>
    </section>
  )
}

const renderMenuSection = () => {
  return (
    <section className='py-4 px-4 w-full h-auto fixed bg-white'>
        <ul>
          <li className='py-4 border-b text-[13px] font-medium'><a href="#">Home</a></li>
          <li className='py-4 border-b text-[13px] font-medium'><a href="#">About</a></li>
          <li className='py-4 border-b text-[13px] font-medium'><a href="#">Services</a></li>
          <li className='py-4 border-b text-[13px] font-medium'><a href="#">Portfolio</a></li>
          <li className='py-4 border-b text-[13px] font-medium'><a href="#">Blog</a></li>
          <li className='py-4 border-b text-[13px] font-medium'><a href="#">Contact</a></li>
        </ul>
    </section>
  )
}

  return (
      <div>
        {renderNavSection()}
        {menu && renderMenuSection()}
        {renderHeaderSection()}
        {renderClientSection()}
        {renderServicesSection()}
        {renderResumeSection()}
        {renderWorkSection()}
        {renderTestimonialSection()}
        {renderAboutSection()}
        {renderFaqSection()}
        {renderUpdateSection()}
        {renderContactSection()}
        {renderFooterSection()}
      </div>        
  )
}

export default App