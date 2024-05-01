import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const UserProfile = () => {
    const [userEmail, setUserEmail] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const storedEmail = localStorage.getItem('userEmail');
        if (storedEmail) {
            setUserEmail(storedEmail);
        }
        const storedFavoriteMovies = JSON.parse(localStorage.getItem(`favorites-${storedEmail}`)) || [];
        setFavoriteMovies(storedFavoriteMovies);
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredFavoriteMovies = favoriteMovies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.cast.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
        movie.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="px-4 py-5 sm:px-6">
                        <h2 className="text-lg font-semibold leading-6 text-gray-900">User Profile</h2>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Email: {userEmail}</p>
                        <input
                            type="text"
                            placeholder="Search by title, cast, or category"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div className="border-t border-gray-200">
                        <h1 className='text-center'>My Favorite Movies</h1>
                        <ul className="divide-y divide-gray-200">
                            {filteredFavoriteMovies.map(movie => (
                                <li key={movie.id} className="px-4 py-4 sm:px-6">
                                    <div className="flex items-center">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">{movie.title}</p>
                                            <p className="mt-1 text-sm text-gray-500">{movie.cast.join(', ')}</p>
                                            <p className="mt-1 text-sm text-gray-500">{movie.category}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
