import { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import the generated Tailwind CSS file

const MyForm = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        annualIncome: '',
        dateOfBirth: '',
        address: '',
        married: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, e.g., send it to an API
        console.log('Form Data:', formData);
    };

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode)
    }

    return (
        <div className="container mx-auto p-8 max-w-xl">

            <form onSubmit={handleSubmit} className={`${darkMode ? 'bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4' : 'bg-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-4'}`}>
                <label
                    className={`${darkMode ? 'block text-gray-200 text-sm font-bold mb-2' : 'block text-gray-700 text-sm font-bold mb-2'}`}>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${darkMode ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}`}
                        required
                    />
                </label>

                <label className={`${darkMode ? 'block text-gray-200 text-sm font-bold mb-2' : 'block text-gray-700 text-sm font-bold mb-2'}`}>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${darkMode ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}`} required
                    />
                </label>

                <label className={`${darkMode ? 'block text-gray-200 text-sm font-bold mb-2' : 'block text-gray-700 text-sm font-bold mb-2'}`}>
                    Phone Number:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className={`${darkMode ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}`} required
                    />
                </label>

                <label className={`${darkMode ? 'block text-gray-200 text-sm font-bold mb-2' : 'block text-gray-700 text-sm font-bold mb-2'}`}>
                    Annual Income:
                    <input
                        type="number"
                        name="annualIncome"
                        value={formData.annualIncome}
                        onChange={handleChange}
                        className={`${darkMode ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}`} required
                    />
                </label>

                <label className={`${darkMode ? 'block text-gray-200 text-sm font-bold mb-2' : 'block text-gray-700 text-sm font-bold mb-2'}`}>
                    Date of Birth:
                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className={`${darkMode ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}`} required
                    />
                </label>

                <label className={`${darkMode ? 'block text-gray-200 text-sm font-bold mb-2' : 'block text-gray-700 text-sm font-bold mb-2'}`}>
                    Address:
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className={`${darkMode ? 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 bg-gray-700 leading-tight focus:outline-none focus:shadow-outline' : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'}`} required
                    />
                </label>

                <label className={`${darkMode ? 'block text-gray-200 text-sm font-bold mb-2' : 'block text-gray-700 text-sm font-bold mb-2'}`}>
                    Married:
                    <input
                        type="checkbox"
                        name="married"
                        checked={formData.married}
                        onChange={handleChange}
                        className={`${darkMode ? 'ml-3 leading-tight accent-gray-200' : "ml-3 leading-tight accent-gray-200"}`}
                    />
                </label>
                <div className='grid grid-cols-4 justify-between'>
                    <button
                        type="submit"
                        className={`${darkMode ? 'bg-gray-400 hover:bg-gray-600 text-gray-900 hover:text-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' : "bg-blue-600 hover:bg-blue-800 text-gray-300 hover:text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"} col-start-1`}
                    >
                        Submit
                    </button>

                    <button
                        className={`${darkMode ? 'bg-gray-400 hover:bg-gray-600 text-gray-900 hover:text-gray-300 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' : "bg-blue-600 hover:bg-blue-800 text-gray-300 hover:text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"} col-end-5`}
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </div>
            </form>
        </div >
    );
};

export default MyForm;
