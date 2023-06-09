import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const ClassCard = (props) => {
    // console.log(props.class)
    const {name, image, instructor, price, available_seats, _id}=props.class;
    const {user} = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    const [, refetch]= useCart();
    
    const handleAddToCart = item =>{
        console.log(item);
        if(user && user.email){
            const addClass = {classAddId: _id, name, image, instructor, price, available_seats, email: user.email}
            fetch('http://localhost:5000/addClasses',{
                method:'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addClass)
            })
            .then(res => res.json())
            .then(data =>{
                if(data.insertedId){
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on the cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login then add to class',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    
    return (
        <div className="shadow-xl card md:w-96 bg-sky-200">           
        <figure><img className="pt-5 rounded-lg" src={image} alt="Shoes" /></figure>
        <p className="absolute right-0 px-4 mt-4 mr-4 text-white rounded-md bg-slate-900">${price}</p>
        <div className="flex flex-col items-center card-body">
            <h2 className="card-title">{name}</h2>
            <p>Instructor : {instructor}</p>
            <p>Seats : {available_seats}</p>
            
             <button onClick={()=>handleAddToCart(props.class)}   className="pt-4 border-0 border-b-4 border-orange-400 btn btn-outline bg-slate-100 card-actions">Add to class</button>
            
        </div>
    </div>
    );
};

export default ClassCard;