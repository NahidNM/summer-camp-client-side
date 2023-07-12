import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import contract from './../../../../public/Addition/contact.gif'

const Section2 = () => {
    
    const form = useRef();
    const [isSending, setIsSending] = useState(false)
    
    const sendEmail = (e) => {
        e.preventDefault();
    setIsSending(true)

        emailjs.sendForm('service_d93f1px', 'template_3r3k4zs', form.current, 'Jjpwm5-wVtkApMDEb')
          .then((result) => {
              console.log(result.text);
              setIsSending(false)
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Massege Send Success',
                showConfirmButton: false,
                timer: 1500
              })
          }, (error) => {
              console.log(error.text);
              setIsSending(false)
              Swal("Email not send")
          });
      };
      console.log(import.meta.env.VITE_PUBLIC_KEY);
    
    return (
        <div className='my-10'>
          <div className="divider"></div>
            <div className="text-3xl font-semibold text-center divider">Send Massage</div>
            <div className="divider"></div>
            <div className='min-h-screen mt-10 hero'>
            <div className='grid grid-cols-1 gap-4 mx-0 md:mx-24 hero-content md:grid-cols-2'>
                <div className='ml-5 md:ml-0'>
                    <h1 data-aos="fade-up" data-aos-delay="500" className='text-5xl font-bold text-transparent mb-9 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Contract With Me</h1>
                    <img data-aos="zoom-in" data-aos-delay="800" className='w-72 h-72 lg:w-96 lg:h-96' src={contract} alt="" />
                </div>
                <div data-aos="fade-down" data-aos-delay="1000"    className='ml-5 w-80 mb-80 card md:ml-0 md:mb-0 lg:w-96 h-[60%] md:h-full shadow-2xl bg-gradient-to-r from-pink-900 via-indigo-800 to-purple-800'>
   <form ref={form} onSubmit={sendEmail}>
        <div className='card-body'>
            <div className='form-control'>
                <label>Name</label>
      <input 
      required
       type="text"
        name="user_name"
        placeholder='Name'
        className='input-bordered input'
         />    
            </div>
            
            <div className='form-control'>
            <label>Email</label>
      <input required 
      type="email" 
      name="user_email"
      placeholder='Email'
      className='input-bordered input'
       /> 
            </div>
            
            <div className='form-control'>
            <label>Message</label>
      <textarea required name="message" type="text" placeholder='Message' className='h-28 textarea textarea-bordered' />
            </div>
            <input type="submit" value={isSending ? "Sending..." : "Send"} disabled={isSending}  className='p-4 ml-2 font-semibold rounded cursor-pointer bg-gradient-to-r from-pink-700 to-indigo-600-xl hover: scale-[1.1] mt-3 transition'/>
            </div>            
    </form>
                </div>
                
            </div>

           </div>
        </div>
    );
};

export default Section2;