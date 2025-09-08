
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
  const {title, cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    return (
        <div>
            <img src={cover} alt= {`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                 <div className='flex'>
                   <img className='w-14'  src={author_img} alt="" />
                   <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    <p>{posted_date}</p>

                   </div>
                 </div>
                 <div>
                    <span>{reading_time} min read</span>
                    <button></button>
                 </div>
            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash ,idx)=> <span key={idx}> <a> #{hash}</a> </span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired 
}
export default Blog;