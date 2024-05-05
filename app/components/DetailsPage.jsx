import React from 'react'
import { BiLike, BiDislike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useQuery } from 'react-query';
import Comments from './Comments';

const fetchComments = async (postId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return response.json();
};
const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
};
const fetchUserPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/2/albums');
    return response.json();
};
const DetailsPage = () => {
    const { data: postsData, isLoading: isPostsLoading } = useQuery('posts', fetchPosts);
    const { data: postsuser, isLoading: isPostsuserLoading } = useQuery('postsuser', fetchUserPosts);
    if (isPostsLoading && isPostsuserLoading) return <div className=' h-[32vh] flex justify-center items-center'>Loading...</div>;
    return (
        <div className='container mx-auto  py-12 flex flex-col lg:flex-row gap-9'>
            <div className='grid grid-cols-1'>
                {
                    postsData?.map((post) => {
                        return (
                            <div className='flex-1  pr-20 py-8 px-4' key={post.id}>
                                <div className='space-y-8'>
                                    <div className='flex space-x-3'>
                                        <div className='h-12 w-12 bg-borderColor rounded-lg'></div>
                                        <div className='flex flex-col'>
                                            <span className=' text-lg font-bold'>Youssef Helmy</span>
                                            <span className='text-textColor'>@Youssef Helmy</span>

                                        </div>

                                    </div>
                                    <p className=' w-[450px]  border-borderColor py-4 border-b-[3px]'>
                                        {post.title}
                                    </p>
                                    <div className='space-y-3'>

                                        <p className='bg-borderColor rounded-xl px-8 py-12 text-md font-bold'>{post.body}</p>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center space-x-16'>
                                                <BiDislike className='text-4xl text-textColor' />
                                                <BiLike className='text-4xl text-textColor' />
                                            </div>
                                            <div className='flex space-x-12'>
                                                <div className='flex items-center space-x-4 text-textColor'>
                                                    <FaRegComment className='text-4xl' />
                                                    <span className='text-xl'>
                                                        <CommentsCount postId={post.id} />
                                                    </span>
                                                </div>
                                                <div className='flex items-center space-x-4 text-textColor'>
                                                    <FaRegHeart className='text-4xl' />
                                                    <span className='text-xl'>36</span>
                                                </div>
                                                <div>
                                                    <CiShare2 className='text-4xl' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Comments postId={post.id} />
                                </div>




                            </div>
                        )
                    })
                }
            </div>
          
            <div className='w-5/6 py-8 space-y-12 '>
                <div className=' relative'>
                    <input type="text" name="" id="" placeholder='Search' className='px-12 py-4 w-full rounded-lg border placeholder:text-xl border-borderColor outline-none' />
                    <IoSearch className='text-3xl absolute left-2 top-[50%] translate-y-[-50%] text-textColor' />
                </div>

                <div className='space-y-8 border border-borderColor rounded-lg px-8 pt-10 pb-20'>
                    <h1 className='text-xl font-bold '>Related posts</h1>
                    <div className='pb-8'>
                        <div className='flex space-x-3'>
                            <div className='h-12 w-12 bg-borderColor rounded-lg'></div>
                            <div className='flex flex-col'>
                                <span className=' text-lg font-bold'>Youssef Helmy</span>
                                <span className='text-textColor'>@Youssef Helmy</span>

                            </div>

                        </div>
                        <p className=' w-full  border-borderColor py-4 border-b-[3px]'>
                            It s finally arrived! Catch our latest AI version, and the revaluation begins!
                        </p>
                    </div>
                    <div className='space-y-16 '>
                        {
                            postsuser?.map((post) => {
                                return (
                                    <div key={post.id}>
                                        <div className='flex space-x-3'>
                                            <div className='h-12 w-12 bg-borderColor rounded-lg'></div>
                                            <div className='flex flex-col'>
                                                <span className=' text-lg font-bold'>Youssef Helmy</span>
                                                <span className='text-textColor'>@Youssef Helmy</span>

                                            </div>

                                        </div>
                                        <p className='   py-4 '>
                                            {post.title}
                                        </p>
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>
            </div>
        </div>
    )
}
const CommentsCount = ({ postId }) => {
    const { data: commentsData, isLoading: isCommentsLoading } = useQuery(['comments', postId], () => fetchComments(postId));

    if (isCommentsLoading) return <div>Loading comments...</div>;

    return commentsData.length
};
export default DetailsPage

