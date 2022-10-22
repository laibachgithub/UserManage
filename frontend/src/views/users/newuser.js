import react, { useState } from "react"
function NewUser() {

    const [user, setUser] = useState({
        uName: "",
        uEmail: "",
        uContact: 0,
        uAge: 0
    })
    const handleChange = (e) => {
    
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = (e) => {
e.preventDefault()
        console.log("user", user)

    }
    return (
        <div>

            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="uName" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter name" />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name="uEmail" onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Cell Number</label>
                    <input type="number" class="form-control" onChange={handleChange} name="uContact" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter cell no." />
                </div>

                <div class="form-group">
                    <label for="exampleInputEmail1">Age</label>
                    <input type="number" class="form-control" onChange={handleChange} name="uAge" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter age" />
                </div>

                <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
            </form>
        </div>

    )
}
export default NewUser;