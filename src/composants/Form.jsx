import {useState} from "react"

export const Form = () => {
    const [form, setForm] = useState({titre : "" , content : ""})

    function soumettre(e){
        const { name , value } = e.target ;
        setForm({...form , [name]: value});
    }
    function handleSubmit(e){
        const {titre, content} = form ;
        if(titre.length > 0 && content.length > 0){
            setForm({titre : "" , content : ""})
        }else {
            alert("veuillez compléter les deux champs ")
        }
    }

    return <div className="col-4">
        <h2>Créer un Article</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" name="titre" value={form.titre} onChange={soumettre} />
            <textarea  id="" cols="30" rows="10"  className="form-control my-3" name="content" onChange={soumettre} value={form.content}></textarea>
            <input type="submit" className="btn btn-outline-dark" />
        </form>
    </div>
}