import {useState, useEffect} from 'react'


import Input from '../form/Input'
import styles from './ProjectForm.module.css'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({handleSubmit, btnText, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
            fetch("http://localhost:5000/categories", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    }, [])

    const submit  = (e) => {
        e.preventDefault()
        // console.log(project)
        handleSubmit(project)
    }

    function handleOnchange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

       function handleCategory(e) {
        setProject({ 
            ...project,
             category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }, 
    })

    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type="text"
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto"
            handleOnchange={handleOnchange}
            value={project.name ? project.name : ''}
            />

           
            <Input type="number"
            text="Orçamento do projeto"
            name="budget"
            placeholder="Insira o orçamento total"
            handleOnchange={handleOnchange}
            value={project.budget ? project.budget : ''}
            />

            
           <Select name="category_id"
            text="Selecione a categoria" 
            options={categories}
           handleOnchange={handleCategory}
           value={project.category ? project.category.id : ''} />

            <SubmitButton text={btnText} />
        </form>
    )
}
export default ProjectForm