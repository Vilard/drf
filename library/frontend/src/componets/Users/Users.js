import React from 'react'
import axios from 'axios'
const baseURL = "http://127.0.0.1:8000/api/users/"

export default function users() {
    const [users, setPost] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        })
    }, [])

    if (!users) return null

    // console.log(users)  
    // users.map((t) => console.log(t))
    return (
        <div>
            {users.map((t) =>
                <div>
                    <h1>users</h1>
                    <h4>id {t.id}</h4>
                    <h4>email {t.email}</h4>
                    <h4>name {t.user_name}</h4>
                    <h4>first_name {t.first_name}</h4>
                    <h4>last name {t.last_name}</h4>
                </div>
            )}
        </div>
    );
}