"use client";

import React from 'react'
import useUserStore from '@/Utils/store';
import { useFormik } from 'formik';
import { createpostSchema } from '@/Utils/createpostSchema';
const FormCreatePost = () => {
  const { newPost, setNewPost } = useUserStore();
  const formik = useFormik({
    initialValues: {
      title: '',
      userId: '',
      content: ''
    },
    validationSchema: createpostSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      setNewPost(values)
    },
  });
  return (
    <div className='container mx-auto px-8 ' onSubmit={formik.handleSubmit}>
      <h1 className='text-3xl font-bold py-6'>Form</h1>
      <form className='w-1/2 '>
        <h1 className='text-textColor font-medium py-2'>Create a post</h1>
        <div className='flex flex-col space-y-2 '>
          <label className='' htmlFor="title">title of the post</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.title}

            id="title"
            label="title "
            name="title"
            required
            className=' rounded-lg border border-borderColor py-2 px-4 outline-none ' type="text" placeholder='Type Here' />
          <span className="w-full h-6 text-red-700 text-sm " type="invalid">
            {formik.touched.title && formik.errors.title
              ? formik.errors.title
              : null}
          </span>
        </div>
        <div className='flex flex-col space-y-2 '>
          <label className='' htmlFor="userId">User Id</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.userId}
            onBlur={formik.handleBlur}

            id="userId"
            label="userId "
            name="userId"
            required
            className=' rounded-lg border border-borderColor py-2 px-4 outline-none ' type="text" placeholder='Type Here' />
            <span className="w-full h-6 text-red-700 text-sm " type="invalid">
            {formik.touched.userId && formik.errors.userId
              ? formik.errors.userId
              : null}
          </span>
        </div>
        <div className='flex flex-col space-y-2 '>
          <label className='' htmlFor="content">Post Content</label>
          <textarea
            onChange={formik.handleChange}
            value={formik.values.content}
            onBlur={formik.handleBlur}

            id="content"
            label="content "
            name="content"
            required

            className=' rounded-lg border border-borderColor py-2 px-4 outline-none  h-44' />
            <span className="w-full h-6 text-red-700 text-sm " type="invalid">
            {formik.touched.content && formik.errors.content
              ? formik.errors.content
              : null}
          </span>
        </div>
        <button type='submit' className=' bg-btnBlue px-2 font-bold text-white  h-[36px] rounded-lg w-full'>Share Post</button>
      </form>
    </div>
  )
}

export default FormCreatePost
