import useInstructor from "../../../Hooks/useInstructor";
import InstructorCart from "../../Instructors/InstructorCart";

const PupularInstructor = () => {
    
    const [instructors] = useInstructor();
    
    return (
        <div data-aos="fade-up" data-aos-delay="500">
           
            <div className="divider"></div>
            <div className="text-3xl font-semibold text-center divider">Our Pupular Instructor </div>
            <div className="divider"></div>
            <div className="grid gap-5 md:grid-cols-3">
               {/* {
                instructors.filter(instructor => instructor.status == _id).map.slice(0, 6)((popularInstructor) =>
                <InstructorCart
                key={popularInstructor._id}
                instructor={popularInstructor}>
                </InstructorCart>)
               } */}
                {
                    instructors?.slice(0, 6). map((popularInstructor) => 
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