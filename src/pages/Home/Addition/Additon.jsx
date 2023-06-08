import img1 from '../../../../public/Addition/mesi.jpg'
import img2 from '../../../../public/Addition/shakib.jpeg'
import img3 from '../../../../public/Addition/Lin Dan.jpeg'

const Additon = () => {
  return (
    <div className='pt-5 bg-yellow-200'>
        <h1 className='text-center md:text-3xl '>Best Sports Players</h1>
        <div className="grid md:grid-cols-3 md:p-10">
      <div className="shadow-xl card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src={img1}
            alt="Lionel Messi"
            className="rounded-full w-52 h-52"
          />
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title">Lionel Messi</h2>
          <p>Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who most recently played as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.</p>
          
        </div>
      </div>
      <div className="shadow-xl card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src={img2}
            alt="Shakib Al Hasan"
            className="rounded-full w-52 h-52"
          />
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title">Shakib Al Hasan</h2>
          <p>Shakib Al Hasan is a Bangladeshi cricketer and current captain of the Bangladesh national cricket team in Tests and T20Is. According to International Cricket Council, he is currently ranked no. 1 all-rounder in ODI and T20I cricket and is widely considered to be one of the greatest all-rounders of all time</p>
          
        </div>
      </div>
      <div className="shadow-xl card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src={img3}
            alt="Lin Dan"
            className="rounded-full w-52 h-52"
          />
        </figure>
        <div className="items-center text-center card-body">
          <h2 className="card-title">Lin Dan</h2>
          <p>Lin Dan is a Chinese former professional badminton player. He is a two-time Olympic champion, five-time World champion, as well as a six-time All England champion.</p>
         
        </div>
      </div>
    </div>
    </div>
  );
};

export default Additon;
