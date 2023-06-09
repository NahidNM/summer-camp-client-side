import useClass from "../../../Hooks/useClass";
import ClassCard from "../../Class/ClassCard";

const PopularClass = () => {
    const [classes] = useClass();
    // console.log(classes);
    return (
        <div>
            <h1 className="text-center">-----------------------Our Popular Class--------------------</h1>
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