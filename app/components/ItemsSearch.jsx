import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ItemsSearch = () => {
    const [inputSearch, setInputSearch] = useState("");
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState([]);
    const [isPostsLoading,setIsPostsLoading] = useState(true)
    useEffect(() => {
       const getPosts = async () => {
            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPosts(data);
                setSearch(data);
                setIsPostsLoading(false)
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        getPosts();
    }, []);

    useEffect(() => {
        const filteredPosts = posts.filter(post => {
            return post.title.toLowerCase().includes(inputSearch.toLowerCase());
        });
        setSearch(filteredPosts);
    }, [inputSearch, posts]);
    if (isPostsLoading ) return <div className=' h-[32vh] flex justify-center items-center'>Loading...</div>;

    return (
        <div className='container mx-auto px-8  py-12 '>
            <div className='w-3/5 space-y-8'>
                <div>
                    <input 
                        onChange={(e) => setInputSearch(e.target.value)} 
                        type="text" 
                        placeholder='Typing...' 
                        className='px-4 py-4 w-full rounded-lg border placeholder:text-xl border-borderColor outline-none' 
                    />
                </div>
                {search.map(post => (
                    <div className='shadow-xl rounded-xl pl-14 pt-12 pb-20' key={post.id}>
                        <div className='flex space-x-3'>
                            <div className='h-12 w-12 bg-borderColor rounded-lg'></div>
                            <div className='flex flex-col'>
                                <span className=' text-lg font-bold'>Youssef Helmy</span>
                                <span className='text-textColor'>@Youssef Helmy</span>
                            </div>
                        </div>
                        <p className='w-[450px] py-4'>{post.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemsSearch;
