import { useState } from "react";
import { create } from "../../datasource/api-references";
import { useNavigate } from "react-router-dom";
import ReferencesModel from "../../datasource/referencesModel";
import FormReference from "./FormReference";
import Layout from "../Layout";
function AddReference({page}) {
    const navigate = useNavigate();
    const [reference, setReference] = useState(new ReferencesModel());
    const [errorMsg, setErrorMsg] = useState('')
    const handleChange = (event) => {
        const { name, value } = event.target;
        setReference((formData) => ({ ...formData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + reference);
        create(reference)
            .then((res) => {
                if (res.success) {
                    alert(res.message + " - id: " + res.data.id);
                    navigate("/references/list");
                }
                else {
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
                    <h2 className="heading-back">References</h2>
                    <h2 className="heading-txt"><span className="txt-white">Add</span> Reference Item</h2>
                </div>
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <p className="flash"><span>{errorMsg}</span></p>
                        <FormReference
                            reference={reference}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default AddReference;
