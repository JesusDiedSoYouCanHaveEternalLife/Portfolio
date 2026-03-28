import { useState, useEffect } from "react";
import { update, getOne } from "../../datasource/api-references";
import { useNavigate, useParams } from "react-router-dom";
import ReferencesModel from "../../datasource/referencesModel";
import FormReference from "./FormReference";
import Layout from "../Layout";
function EditReference({page}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [reference, setReference] = useState(new ReferencesModel());
    const [errorMsg, setErrorMsg] = useState('')
    useEffect(() => {
        getOne(id)
            .then((res) => {
                if (res.success) {
                    setReference(new ReferencesModel(
                        res.data.id,
                        res.data.firstname,
                        res.data.lastname,
                        res.data.email,
                        res.data.position,
                        res.data.company
                    ));
                }
                else {
                    alert(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    }, [id, navigate]);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setReference((formData) => ({ ...formData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + reference);
        update(reference, id)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
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
                    <h2 className="heading-txt"><span className="txt-white">Edit</span> Reference</h2>
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
export default EditReference;
