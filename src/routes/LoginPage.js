import React from 'react'
import Login from '../components/Login'

function LoginPage() {

    const { increment, counter } = Login()

    return (
        <div className='flex justify-center items-center h-screen bg-red-200'>
            <div className='flex flex-col items-center'>
                <button
                    onClick={(increment)}
                    className="p-2 rounded-xl w-96
                bg-gray-400 border-2 border-gray-700
                hover:opacity-70 transition duration-200
                text-xl font-semibold ">
                    Press Me !
                </button>
                {counter}
            </div>
        </div>
    )
}

export default LoginPage