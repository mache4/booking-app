import type { NextPage } from 'next';

const Navbar: NextPage = () => {
    return (
        <div className="navbar flex justify-between items-center border-b py-4 px-8 bg-blue-500">
            <h1 className="text-3xl w-1/4 italic text-white font-semibold">L9 Booking</h1>
            <div className="flex w-3/4 justify-end items-center">
                <div className="relative w-60 mr-4">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-100 dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-gray-500 outline-none" placeholder="Search" required />
                </div>
                <button className="login transition bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border rounded mr-4">Login</button>
                <button className="signin transition bg-white hover:bg-blue-50 text-blue-700 font-semibold py-2 px-4 border rounded">Signin</button>
            </div>
        </div>
    );
}

export default Navbar;