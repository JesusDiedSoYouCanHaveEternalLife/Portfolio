import { useState, useEffect } from "react";
import { update, getOne } from "../../datasource/api-services";
import { useNavigate, useParams } from "react-router-dom";
import ServicesModel from "../../datasource/servicesModel";
import FormService from "./FormService";
import Layout from "../Layout";
function EditService({page}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [service, setService] = useState(new ServicesModel());
    const [errorMsg, setErrorMsg] = useState('')
    useEffect(() => {
        getOne(id)
            .then((res) => {
                if (res.success) {
                    setService(new ServicesModel(
                        res.data.id,
                        res.data.title,
                        res.data.description
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
        setService((formData) => ({ ...formData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + service);
        update(service, id)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
                    navigate("/services/list");
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
                    <h2 className="heading-back">Services</h2>
                    <h2 className="heading-txt"><span className="txt-white">Edit</span> Service</h2>
                </div>
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <p className="flash"><span>{errorMsg}</span></p>
                        <FormService
                            service={service}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default EditService;
