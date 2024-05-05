import * as Yup from 'yup';

export const createpostSchema = Yup.object().shape({
    title: Yup.string().required('Enter A Valid title')
        .min(5, 'Too Short!')
        .max(20, 'Too Long!'),
    userId: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter A Valid User Id'),
    content: Yup.string()
        .min(10, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Enter A Valid Post Content'),

});