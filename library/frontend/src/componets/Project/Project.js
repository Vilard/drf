import React from 'react'
import axios from 'axios'

const baseURL = "http://127.0.0.1:8000/api/project/"

export default function Project() {
    const [project, setPost] = React.useState(null)
  
    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      })
    }, [])

    if (!project) return null
    const projects = project.results
     
    // todos.map((t) => console.log(t.user_creator))
    return (
      <div>
        {projects.map((t) => 
            <div>
                <h1>Projects</h1>
                <h4>{t.ToDo}</h4>
                <h4>{t.url}</h4>
                <h4>{t.project_name}</h4>
                <h4>{t.project_url}</h4>
                <h2>project user creator</h2>
                <h4>url {t.project_user_creator.url}</h4>
                <h4>email {t.project_user_creator.email}</h4>
                <h4>creator {t.project_user_creator.user_name}</h4>
                <h4>first_name {t.project_user_creator.first_name}</h4>
                <h4>last name {t.project_user_creator.last_name}</h4>
            </div>
        )}
        </div>
    );
  }