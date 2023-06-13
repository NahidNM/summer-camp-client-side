import { Helmet } from "react-helmet-async";
import useEnroll from "../../../Hooks/useEnroll";
import SectionTitle from "../../../component/SectionTitle";
import useAuth from "../../../Hooks/useAuth";

const PayHistory = () => {
    
    const {user} = useAuth()
    
    const [enrollClasses] = useEnroll()
    
    const enrollClass = enrollClasses.filter(enrollClass => enrollClass.email===user.email)
    // console.log(enrollClass)
    return (
        <div className="w-full">
            <Helmet>
                <title>Summer Sports | Payment History</title>
            </Helmet>
            <SectionTitle title="All Enroll Class"></SectionTitle>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center bg-orange-100 rounded-lg ">
                <h3 className="text-3xl">Total : {enrollClass.length}</h3> 
            </div>   
            <div className="w-full overflow-x-auto bg-orange-300 rounded-lg">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Class</th>
                            <th>TransactionId</th>
                    
                                                      
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            enrollClass.map((item, index) => <tr
                                key={item._id}
                            >
                                <td className="">
                                    {index + 1}
                                </td>
                                <td>
                                    {item.instructor}
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td className="">
                                    
                                    {item.name}
                                </td>
                                <td className="">{item.transactionId}</td>
                                
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PayHistory;