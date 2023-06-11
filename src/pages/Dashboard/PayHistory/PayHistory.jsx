import { Helmet } from "react-helmet-async";
import useEnroll from "../../../Hooks/useEnroll";
import SectionTitle from "../../../component/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";

const PayHistory = () => {
    const [enrollClasses] = useEnroll()
    console.log(enrollClasses)
    return (
        <div className="w-full">
            <Helmet>
                <title>Summer Sports | Payment History</title>
            </Helmet>
            <SectionTitle title="All Enroll Class"></SectionTitle>
        
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center bg-orange-200 rounded-lg ">
                <h3 className="text-3xl">Total Enroll: {enrollClasses.length}</h3> 
            </div>
            <div className="w-full overflow-x-auto bg-orange-300 rounded-lg">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>TransactionId</th>
                    
                            <th>Action</th>                          
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            enrollClasses.map((item, index) => <tr
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
                                <td className="">{item.transactionId}</td>
                                <td className="gap-3">
                                    <button className="text-white bg-red-600 btn btn-ghost"><FaTrashAlt></FaTrashAlt></button>
                                    
                                </td>
                               
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PayHistory;