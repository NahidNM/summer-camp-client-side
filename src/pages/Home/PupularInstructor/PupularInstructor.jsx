import useInstructor from "../../../Hooks/useInstructor";
import InstructorCart from "../../Instructors/InstructorCart";

const PupularInstructor = () => {
    
    const [instructors] = useInstructor();
    
    return (
        <div>
           
            <div className="divider"></div>
            <div className="text-3xl font-semibold text-center divider">Our Pupular Instructor </div>
            <div className="divider"></div>
            <div className="grid md:grid-cols-3">
               {/* {
                instructors.filter(instructor => instructor.status == _id).map.slice(0, 6)((popularInstructor) =>
                <InstructorCart
                key={popularInstructor._id}
                instructor={popularInstructor}>
                </InstructorCart>)
               } */}
                {
                    instructors?.map((popularInstructor) => 
                    <InstructorCart
                    key={popularInstructor._id}
                    instructor={popularInstructor}>
                    </InstructorCart> )
                }
                
            </div>
        </div>
    );
};

export default PupularInstructor;