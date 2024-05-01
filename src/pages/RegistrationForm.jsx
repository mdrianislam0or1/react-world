import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userEmail", email);
        navigate('/movies');
    };

    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto mt-8 px-4 py-8 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-4">Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                        />
                    </div>
                    <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md focus:outline-none">Register</button>
                </form>
            </div>
        </>
    );
}

export default RegistrationForm;
