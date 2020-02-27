import React, {useState, useRef, useEffect, useCallback} from 'react';
import './App.css';

// Keeps track of all created functions during the app's life
const functions: Set<any> = new Set()

const App = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const submitButtonRef = useRef()

    const onNameInputChange = useCallback(e => {
        setName(e.target.value)
        console.log("onNameInputChange being called")
    }, [name])

    // const onNameInputChange = e => {
    //     setName(e.target.value)
    //     console.log("onNameInputChange being called")
    // }

    const onEmailInputChange = useCallback(e => {
        setEmail(e.target.value)
        console.log("onEmailInputChange being called")
    }, [email])

    // const onEmailInputChange = e => {
    //     setEmail(e.target.value)
    //     console.log("onEmailInputChange being called")
    // }

    const onAddressInputChange = useCallback(e => {
        setAddress(e.target.value)
        console.log("onAddressInputChange being called")
    }, [address])

    // const onAddressInputChange = e => {
    //     setAddress(e.target.value)
    //     console.log("onAddressInputChange being called")
    // }

    useEffect(() => {
        console.log("useEffect is run")
        if (name === "" || email === "") {
            submitButtonRef.current.setAttribute("disabled", true)
        } else {
            submitButtonRef.current.removeAttribute("disabled")
        }
    }, [name, email])

    functions.add(onNameInputChange)
    functions.add(onEmailInputChange)
    functions.add(onAddressInputChange)

    console.log("rendered")

    return (
        <div className="App">
            <form>
                <p>
                    <label>Name</label>
                    &nbsp;
                    <input
                        value={name}
                        type="text"
                        name="name"
                        onChange={onNameInputChange}
                    />
                </p>
                <p>
                    <label>Email</label>
                    &nbsp;
                    <input
                        value={email}
                        type="text"
                        name="email"
                        onChange={onEmailInputChange}
                    />
                </p>
                <p>
                    <button type="submit" ref={submitButtonRef} onClick={e => { e.preventDefault(); console.log("Submitting...") }}>
                        Submit
                    </button>
                </p>
            </form>
            <p>
                Newly created functions: {functions.size}
            </p>
            <p>
                <label>Address</label>
                &nbsp;
                <input
                    value={address}
                    type="text"
                    name="address"
                    onChange={onAddressInputChange}
                />
            </p>
        </div>
    );
}

export default App;
