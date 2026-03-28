import { useState } from "react";
import { create } from "../../datasource/api-projects";
import { useNavigate } from "react-router-dom";
import ProjectModel from "../../datasource/projectModel";
import FormProject from "./FormProject";
import Layout from "../Layout";

function AddProject({page}) {
    const navigate = useNavigate();
    const [project, setProject] = useState(new ProjectModel());
    const [errorMsg, setErrorMsg] = useState('')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + project);

        create(project)
            .then((res) => {
                if (res.success) {
                    alert(res.message + " - id: " + res.data.id);
                    navigate("/projects/list");
                }
                else{
                    alert(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    }

    return (
        <Layout page={page}>
            <main className="custom-page">
                <div className="heading">
                    <h2 className="heading-back">Projects</h2>
                    <h2 className="heading-txt"><span className="txt-white">Add</span> Project Item</h2>
                </div>
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <p className="flash"><span>{errorMsg}</span></p>
                        <FormProject 
                            project={project}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </main>
            </Layout>
    )
}

export default AddProject;