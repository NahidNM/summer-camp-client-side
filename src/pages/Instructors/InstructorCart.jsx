

const InstructorCart = (props) => {
    
    const {email, image, name, classNumber
    } = props.instructor;
    
    return (
        <div className="shadow-xl card md:w-96 bg-sky-200">           
        <figure><img className="pt-5 rounded-tr-3xl rounded-bl-3xl w-72" src={image} alt="Shoes" /></figure>
        
        <div className="flex flex-col items-center card-body">
            <h2 className="card-title">Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Class : {classNumber}</p>
            
        </div>
    </div>
    );
};

export default InstructorCart;