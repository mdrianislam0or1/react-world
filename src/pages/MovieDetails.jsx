/* eslint-disable react/prop-types */

const MovieDetails = ({ movie }) => {
    return (
        <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Movie Details</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="text-gray-600">Title:</p>
                    <p className="font-semibold">{movie.title}</p>
                </div>
                <div>
                    <p className="text-gray-600">Category:</p>
                    <p className="font-semibold">{movie.category}</p>
                </div>
                <div>
                    <p className="text-gray-600">Cast:</p>
                    <p className="font-semibold">{movie.cast.join(', ')}</p>
                </div>
                <div>
                    <p className="text-gray-600">Release Date:</p>
                    <p className="font-semibold">{movie.releaseDate}</p>
                </div>
                <div>
                    <p className="text-gray-600">Budget:</p>
                    <p className="font-semibold">{movie.budget}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
