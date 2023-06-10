import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        
<div className="text-center">
<div className="grid-cols-2 p-3 space-y-10 bg-gray-700 md:grid md:-mt-6 lg:grid-cols-4">
    <div className="w-1/2 md:ml-24 md:mt-9 md:w-3/4">
        <h1 className="text-xl font-medium text-orange-400">Company</h1> <br />
        <p className="text-base text-gray-300/80 hover:text-yellow-300 cursor-none">Bhaduria <br /> Dinajpur,
            PB 535022 <br /> Bangladesh </p> <br />
        <p className="text-base cursor-pointer text-gray-200/80 hover:text-yellow-300"> <strong
                className="font-normal tracking-wide text-orange-400">Phone:</strong> +8801860002876 </p>
        <p className="text-base cursor-pointer text-gray-200/80 hover:text-yellow-300"> <strong
                className="font-normal tracking-wide text-orange-400">Email:</strong> mdnahidhasan@gmail.com </p>
    </div>
    <div className="leading-9 md:w-2/4 md:order-3 md:ml-24">
        <h1 className="text-orange-400 text-xl font-medium tracking-[0.030rem]"> Useful Links </h1>
        <ul className="mt-2 text-gray-300/80">
            <li> <i className="text-orange-400 fa fa-chevron-right"></i> <a href="#" className="hover:text-yellow-300">
                    Home</a> </li>
            <li> <i className="text-orange-400 fa fa-chevron-right"></i> <a href="#" className="hover:text-yellow-300">
                    About Us</a> </li>
            <li> <i className="text-orange-400 fa fa-chevron-right"></i> <a href="#" className="hover:text-yellow-300">
                    Services</a> </li>
            <li> <i className="text-orange-400 fa fa-chevron-right"></i> <a href="#" className="hover:text-yellow-300">
                    Terms of service</a> </li>
            <li> <i className="text-orange-400 fa fa-chevron-right"></i> <a href="#" className="hover:text-yellow-300">
                    Privacy policy</a> </li>
        </ul>
    </div>
    <div className="leading-9 md:w-3/4 md:order-4">
        <h1 className="text-orange-400 text-xl font-medium tracking-[0.030rem]"> Our Services </h1>
        <ul className="mt-2 text-gray-300/80">
            <li> <i className="text-orange-400 fa fa-chevron-right"></i> <a href="#" className="hover:text-yellow-300"> Criket sports </a> </li>
            <li> <i className="text-orange-400 fa fa-chevron-right"></i> <a href="#" className="hover:text-yellow-300"> Football Sports</a> </li>
            <li> <i className="text-orange-400 fa fa-chevron-right"></i> <a href="#" className="hover:text-yellow-300">
                    Class Management</a> </li>
           
            <li> <i className="text-orange-400 fa fa-chevron-right"></i> <a href="#" className="hover:text-yellow-300">
                    Graphic Design</a> </li>
        </ul>
    </div>
    <div className="md:order-2 lg:order-last">
        <h1 className="text-orange-400 text-xl font-medium tracking-[0.030rem]"> Join Our Classes </h1> <br />
        <p className="w-3/5 mb-5 leading-7 text-gray-300/80 md:w-3/4"> Join 25,000+ others and never miss out on new
            tips,tutorials, and more. </p> <input type="email" placeholder="Enter E-mail Here"
            className="px-2 py-1 placeholder-gray-400 border-orange-600 outline-none rounded-tl-xl focus: focus:border md:w-1/2 lg:w-3/5" />
        <button className="p-1 text-white -translate-x-1 bg-orange-400 rounded-br-xl hover:bg-orange-500"> Subscribe
        </button>
    </div>
</div>
<div className="flex flex-col p-3 pt-5 space-y-8 text-center bg-gray-900 md:flex-row md:justify-between md:space-y-0">
    <div
        className="flex mx-3 justify-between space-x-20 md:flex-row text-gray-200 md:space-x-28 md:ml-20 lg:ml-24 lg:space-x-[13rem] xl:space-x-72 xl:ml-24">
        <p>@ Copyright <strong>Company.</strong>All Rights Reserved</p>
       
    </div>
    <div
        className="text-white pb-4 text-center text-xl space-x-2 md:w-2/4 md:pb-0 md:pl-2 md:space-x-1 lg:pl-[171px] lg:space-x-2 xl:pl-44">
        <a href="#"
            className="w-8 h-8 hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
              <FaTwitter></FaTwitter>
              </a> <a href="#"
            className="w-8 h-8  hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
              <FaInstagram></FaInstagram>
              </a> <a href="#"
            className="w-8 h-8  hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
              <FaFacebook></FaFacebook>
             </a> <a href="#"
            className="w-8 h-8  hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
              <FaGoogle></FaGoogle>
              </a> <a href="#"
            className="w-8 h-8  hover:text-orange-500 inline-block rounded-full pt-[3px] hover:bg-gray-200">
              <FaLinkedin></FaLinkedin>
              </a> </div>
</div>
</div>
 
    );
};

export default Footer;