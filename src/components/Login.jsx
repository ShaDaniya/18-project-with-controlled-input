import { useState } from 'react';

function Login () {
    // const [username, setUserName] = useState("")
    // const [password, setPassword] = useState("")
    //yиже вариант оптимизации, что не вызывать useState несколько раз
    const [data, setData] = useState({username: '', password: ''})

    function handleFormSubmit(event) {
        event.preventDefault()
        // console.log(event.target.username.value);
        // console.log(event.target.password.value);
        // console.log({username: event.target.username.value, password: event.target.password.value});

        // const userData = {username: event.target.username.value, password: event.target.password.value}
        console.log(data);
        alert( JSON.stringify(data))
    }

    function handleInputChange(e, name) {
        setData({...data, [name]: e.target.value}) }
    }

    return (
        <>
        <h1>Login form</h1>
        <form onSubmit={handleFormSubmit}>
            <label>Username:
                <input type="text" value={data.username} onChange={(e) => handleInputChange(e, 'username')}/>
            </label>
            <label>Password:
                <input type="password" value={data.password} onChange={(e) => shandleInputChange(e, 'password')}/>
            </label>
            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login