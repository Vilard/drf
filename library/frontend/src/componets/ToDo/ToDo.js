import React,
{
    // useEffect
}
    from 'react'
import axios from 'axios'
// import useToDo from './useTodo'

const baseURL = "http://127.0.0.1:8000/api/ToDo/"

export default function ToDo() {

    const [todo, setPost] = React.useState(null)

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
        console.log(1)
      })
    }, [])

    if (!todo) return null
    
    const todos = todo.results
    // console.log(useToDo())
    // const todos = useToDo()

    // todos.map((t) => console.log(t.user_creator))
    // console.log(useToDo())

    return (
        <div>
            {todos.map((t) =>
                <div>
                    <h1>todo</h1>
                    <h4>{t.ToDo}</h4>
                    <h4>{t.url}</h4>
                    <h2>user</h2>
                    <h4>url {t.user_creator.url}</h4>
                    <h4>email {t.user_creator.email}</h4>
                    <h4>creator {t.user_creator.user_name}</h4>
                    <h4>first_name {t.user_creator.first_name}</h4>
                    <h4>last name {t.user_creator.last_name}</h4>
                </div>
            )}
        </div>
    );
}