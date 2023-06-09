import useClass from "../../../Hooks/useClass";
import ClassCard from "../../Class/ClassCard";

const PopularClass = () => {
    const [classes] = useClass();
    // console.log(classes);
    return (
        <div>
            <div className="divider"></div>
            <div className="text-3xl font-semibold text-center divider">Our Popular Class</div>
            <div className="divider"></div>
            
            <div className="grid md:grid-cols-3">
                {
                    classes?.map((popularClass) => <ClassCard key={popularClass._id}
                    class={popularClass}
                    ></ClassCard> )
                }
            </div>
        </div>
    );
};

export default PopularClass;