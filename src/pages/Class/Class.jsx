import { Helmet } from 'react-helmet-async';
import useClass from '../../Hooks/useClass';
import ClassCard from './ClassCard';

const Class = () => {
    const [classes] = useClass();
    // console.log(classes)
  
    return (
        <div className="mb-10 md:pt-20">
            <Helmet>
        <title>Sumner Sports camp | Classes</title>
      </Helmet>
            <div className='grid gap-10 pt-20 md:grid-cols-3 '>
            {
                    classes.map((item) => <ClassCard
                        key={item._id}
                        class={item}>
                       
                    </ClassCard>
                        
                    )
                }
            </div>
        </div>
    );
};

export default Class;