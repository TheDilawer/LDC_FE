"use client";
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [error, setError] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all fields.');
            return;
        }

        // Submit form data
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form.');
            }

            const data = await response.json();
            setFeedback(data.message);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            {feedback && <p>{feedback}</p>}
            <label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
