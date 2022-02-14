import { useState } from 'react'

const Login = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(countinc => countinc + 1)
    }

    return { counter, increment }
}
export default Login