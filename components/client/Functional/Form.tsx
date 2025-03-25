'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const ContactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormInputs = z.infer<typeof ContactSchema>;

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormInputs>({ resolver: zodResolver(ContactSchema) });

    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        setSuccess(false);
        setError(null);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to send message');
            setSuccess(true);
            reset();
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        }
    };

    return (
        <div className="max-w-sm w-[80%] mx-auto p-2 bg-transparent border-t-2 border-x-2 border-x-white/20 border-t-white/50 border-b-4 border-b-gray-900 shadow-2xl shadow-violet-700/90 rounded-lg -translate-y-6 z-50 ">
            <h2 className="mb-4 lg:opacity-0 text-gray-500"><strong className='inline-block uppercase pt-4 font-extrabold gradient-text'> Contact</strong> me</h2>
            {success && <p className="text-green-900/50">Message sent successfully!</p>}
            {error && <p className="text-red-900/80">{error}</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 z-50">
                <div>
                    <label className="block font-medium text-gray-300">Your Name</label>
                    <input {...register('name')} className="w-full border-2 p-1 bg-white/90 rounded" />
                    {errors.name && <p className="text-red-900/80 text-xs">{errors.name.message}</p>}
                </div>
                <div>
                    <label className="block font-medium text-gray-300">How can I contact you ?</label>
                    <input {...register('email')} placeholder="Your Email" className="w-full border-2 p-1 bg-white/90   rounded" />
                    {errors.email && <p className="text-red-900/80 text-xs ">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="block font-medium text-gray-300">Message</label>
                    <textarea {...register('message')} placeholder='....' className="w-full h-[12vh] border-2 p-1 bg-white/90  rounded"></textarea>
                    {errors.message && <p className="text-red-900/80 text-xs">{errors.message.message}</p>}
                </div>
                <button disabled={isSubmitting} className="border-2 w-full p-2 text-white rounded bg-gradient-to-r from-[#ff8c00] to-[#8a2be2] opacity-80 uppercase font-extrabold hover:opacity-100">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;