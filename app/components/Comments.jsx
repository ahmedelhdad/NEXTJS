'use clietn'
import { IoArrowUndoSharp } from "react-icons/io5";
import { useQuery } from 'react-query';
import useUserStore from '@/Utils/store';

const fetchComments = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1/comments`);
    return response.json();
};
const Comments = () => {
    const {comment,setComment} = useUserStore((state) => state);
    const { data: commentsData, isLoading: isCommentsLoading } = useQuery('comments', () => fetchComments(),{
        onSuccess: (commentsData) => setComment(commentsData),
    })

    if (isCommentsLoading) return <div>Loading comments...</div>;
    return comment.map(comment => (
        <div className='p-12 space-y-4 border border-borderColor rounded-xl' key={comment.id}>
            <div className='flex items-center justify-between '>
                <div className='flex items-center space-x-4'>
                    <div className='w-16 h-16 rounded-full bg-red-600'></div>
                    <h1 className='text-xl font-bold'>{comment.email}</h1>
                    <div className=' text-textColor text-md font-medium'>2 Weeks age</div>
                </div>
                <div className='flex items-center space-x-4 text-btnBlue'>
                    <IoArrowUndoSharp className='text-3xl' />
                    <div className=' text-xl font-bold'>Reply</div>
                </div>
            </div>
            <p className='text-textColor text-md font-medium'>
                {comment.body}
            </p>
        </div>
    ));
};


export default Comments