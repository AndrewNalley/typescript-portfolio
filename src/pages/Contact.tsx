import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    // displays success message when submission is successful
    const toastifySuccess = () => {
        toast('Form sent!', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    const onSubmit = async (data: any) => {
        const { name, email, subject, message } = data;

        try {
            const templateParams = {
                name,
                email,
                subject,
                message
            };
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_PUBLIC_KEY
            );
            reset();
            toastifySuccess();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='container'>
            <p className='heading-center'>Send me a message!</p>
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='row formRow'>
                    <div className='col-6'>
                        <input
                            type='text'
                            name='name'
                            {...register('name', {
                                required: { value: true, message: 'Please enter your name' },
                                maxLength: {
                                    value: 30,
                                    message: 'Please use 30 characters or less'
                                }
                            })}
                            className='form-control formInput'
                            placeholder='Name'
                        ></input>
                        {errors.name && <span className='errorMessage'>{errors?.text?.message?.toString()}</span>}
                    </div>
                    <div className='col-6'>
                        <input
                            type='email'
                            name='email'
                            {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                            className='form-control formInput'
                            placeholder='Email address'
                        ></input>
                        {errors.email && (
                            <span className='errorMessage'>Please enter a valid email address</span>
                        )}
                    </div>
                </div>
                <div className='row formRow'>
                    <div className='col'>
                        <input
                            type='text'
                            name='subject'
                            {...register('subject', {
                                required: { value: true, message: 'Please enter a subject' },
                                maxLength: {
                                    value: 75,
                                    message: 'Subject cannot exceed 75 characters'
                                }
                            })}
                            className='form-control formInput'
                            placeholder='Subject'
                        ></input>
                        {errors.subject && (
                            <span className='errorMessage'>{errors?.text?.message?.toString()}</span>
                        )}
                    </div>
                </div>
                <div className='row formRow'>
                    <div className='col'>
                        <textarea
                            rows={3}
                            name='message'
                            {...register('message', {
                                required: true
                            })}
                            className='form-control formInput'
                            placeholder='Message'
                        ></textarea>
                        {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                </div>
                <button className='submit-btn' type='submit'>
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Contact;