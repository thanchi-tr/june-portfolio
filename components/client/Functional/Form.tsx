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
        <div className="max-w-sm mx-auto p-6 bg-white/85 shadow-md rounded-lg -translate-y-6 z-50 ">
            <h2 className="text-2xl font-bold mb-4 lg:opacity-0 uppercase"> Contact me</h2>
            {success && <p className="text-green-900/50">Message sent successfully!</p>}
            {error && <p className="text-red-900/80">{error}</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 z-50">
                <div>
                    <label className="block font-bold">Your Name</label>
                    <input {...register('name')} className="w-full bg-black/20 p-1 border rounded" />
                    {errors.name && <p className="text-red-900/80 text-xs">{errors.name.message}</p>}
                </div>
                <div>
                    <label className="block font-bold">How can I contact you ?</label>
                    <input {...register('email')} placeholder="Your Email" className="w-full bg-black/20 p-1 border rounded" />
                    {errors.email && <p className="text-red-900/80 text-xs">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="block font-bold">Message</label>
                    <textarea {...register('message')} placeholder='....' className="w-full h-[12vh] bg-black/20 p-1 border rounded"></textarea>
                    {errors.message && <p className="text-red-900/80 text-xs">{errors.message.message}</p>}
                </div>
                <button disabled={isSubmitting} className="bg-black text-white px-4 py-2 rounded">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;