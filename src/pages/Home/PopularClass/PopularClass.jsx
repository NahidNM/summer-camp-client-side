import useClass from "../../../Hooks/useClass";
import ClassCard from "../../Class/ClassCard";

const PopularClass = () => {
    const [classes] = useClass();
    // console.log(classes);
    return (
        <div>
            <div className="divider"></div>
            <div className="text-3xl font-semibold text-center divider">Our Popular Classes</div>
            <div className="divider"></div>
            
            <div className="grid gap-5 md:grid-cols-3">
                {/* {
                    classes?.map?.slice(0, 6)((popularClass) => <ClassCard key={popularClass._id}
                    class={popularClass}
                    ></ClassCard> )
                } */}
                {
                classes.filter((classes) => classes.status !== 'Pending').slice(0, 6).map((popularClass) =>
                <ClassCard key={popularClass._id}
                    class={popularClass}
                    ></ClassCard> )
               }
            </div>
        </div>
    );
};

export default PopularClass;