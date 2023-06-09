import useInstructor from "../../Hooks/useInstructor";
import InstructorCart from "./InstructorCart";


const Instructors = () => {
    const [instructors] = useInstructor();
    // console.log( instructors);
    return (
        <div className="py-24">
            <h1 className="my-2 text-3xl font-semibold text-center">All Instructors</h1>
            <div className="grid gap-10 md:grid-cols-3">
            {
                    instructors.map((instructor) => <InstructorCart
                    key={instructor._id}
                    instructor={instructor}>
                    </InstructorCart>
                        
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;