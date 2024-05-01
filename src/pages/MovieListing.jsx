/* eslint-disable react/prop-types */
import { useState } from 'react';

const MovieListing = ({ movies, onMovieSelect, onToggleFavorite, favorites, userEmail, onLogin, onLogout }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    };

    const handleMovieClick = (movie) => {
        onMovieSelect(movie);
    };

    const handleFavoriteClick = (movie) => {
        onToggleFavorite(movie);
    };

    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Movie Listing</h2>
            <input
                type="text"
                placeholder="Search by title, cast, or category"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-purple-500"
            />
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies
                    .filter(movie =>
                        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        movie.cast.some(actor => actor.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        movie.category.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map(movie => (
                        <li key={movie.id} className="bg-gray-100 rounded-md overflow-hidden shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{movie.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">Cast: {movie.cast.join(', ')}</p>
                                <p className="text-sm text-gray-600 mb-2">Category: {movie.category}</p>
                               <div className=''>
                               <button
                                    className={`text-sm px-2 py-1 rounded-md focus:outline-none ${isFavorite(movie.id) ? 'bg-pink-500 text-white' : 'bg-purple-500 text-white'}`}
                                    onClick={() => handleFavoriteClick(movie)}
                                >
                                    {isFavorite(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                                </button>
                               </div>
                                <div className='p-2'>
                                <button
                                    className="text-sm px-3 py-1 ml-2 rounded-md focus:outline-none bg-gray-400 text-white"
                                    onClick={() => handleMovieClick(movie)}
                                >
                                    View Details
                                </button>
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>
            <div className="mt-4">
                {!userEmail ?
                    <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-md focus:outline-none" onClick={() => onLogin('user@example.com')}>Login</button>
                    :
                    <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md focus:outline-none" onClick={onLogout}>Logout</button>
                }
            </div>
        </div>
    );
};

export default MovieListing;
