import { Helmet } from 'react-helmet-async';
import useClass from '../../Hooks/useClass';
import ClassCard from './ClassCard';
import SectionTitle from '../../component/SectionTitle';

const Class = () => {
    const [classes] = useClass();
    // console.log(classes)
  
    return (
        <div className="mb-10 md:pt-20">
            <Helmet>
        <title>Sumner Sports camp | Classes</title>
      </Helmet>
      <SectionTitle title="All Sports Class "></SectionTitle>
            <div className='grid gap-5 md:grid-cols-3 '>
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