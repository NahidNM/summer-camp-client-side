import sponsor1 from './../../../../public/Addition/sponsor/sponsor1.jpg'
import sponsor2 from './../../../../public/Addition/sponsor/sponsor2.jpg'
import sponsor3 from './../../../../public/Addition/sponsor/sponsor3.jpg'
import sponsor4 from './../../../../public/Addition/sponsor/sponsor4.png'

const Sponser = () => {
    return (
        <div data-aos="fade-right" data-aos-delay="500">
            <div className="divider"></div>
            <div className="text-3xl font-semibold text-center divider">OUR SPONSOR</div>
            <div className="divider"></div>
             <div className="grid grid-cols-2 gap-8 mx-auto mt-8 md:grid-cols-4 group">

<div>
    <img className='transition rounded-lg hover:animate-pulse group-hover:scale-100' src={sponsor1} alt="" />
</div>
<div>
    <img  className='rounded-lg hover:animate-pulse group-hover:scale-100' src={sponsor2} alt="" />
</div>
<div>
    <img className='rounded-lg hover:animate-pulse group-hover:scale-100' src={sponsor3} alt="" />
</div>
<div>
    <img  className='rounded-lg hover:animate-pulse group-hover:scale-100 ' src={sponsor4} alt="" />
</div>
</div>
        </div>
    );
};

export default Sponser;