import useAuth from "../../../Hooks/useAuth";


const Instructor = () => {
    const {user} = useAuth()
    return (
        <div className="w-full">
       <h1 className="text-3xl font-semibold text-center text-green-800 underline">Hi, {user.displayName}</h1>
            
        </div>
    );
};

export default Instructor;