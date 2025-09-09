
import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({ blog ,handleAddToBookmark , handleMarkAsRead }) => {
  const {title, cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt= {`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                 <div className='flex '>
                   <img className='w-14'  src={author_img} alt="" />
                   <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>

                   </div>
                 </div>
                 <div>
                    <span className='text-2xl'>{reading_time} min</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl '><FaBookmark  ></FaBookmark ></button>
                 </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p className='mt-4'>
                {
                    hashtags.map((hash ,idx)=> <span key={idx}> <a> #{hash}</a> </span>)
                }
            </p>
                  
                  <button onClick={()=>handleMarkAsRead(reading_time) }  className='text-purple-600 font-bold underline'>Mark is read</button>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired ,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead : PropTypes.func
}
export default Blog;