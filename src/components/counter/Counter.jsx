import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // increment count
    const handleIncrement = () => {
        setCount(count + 1)
    }

    // decrement count
    const handleDecrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    // reset
    const handleReset = () => {
        setCount(0)
    }
    return (
        <div className="min-h-screen bg-black flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">My Counter App</h1>
                <p className="text-xl text-gray-600 mb-6">Count: {count}</p>

                <div className="flex space-x-4">
                    {/* increment button */}
                    <button onClick={handleIncrement} className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">Increase (+)</button>

                    {/* decrement button */}
                    <button onClick={handleDecrement} className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">Decrease (-)</button>

                    {/* reset button */}
                    <button onClick={handleReset} className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition">Reset</button>


                </div>
            </div>

        </div>
    );
};

export default Counter;