import { useState } from "react";
import { create } from "../../datasource/api-services";
import { useNavigate } from "react-router-dom";
import ServicesModel from "../../datasource/servicesModel";
import FormService from "./FormService";
import Layout from "../Layout";
function AddService({page}) {
    const navigate = useNavigate();
    const [service, setService] = useState(new ServicesModel());
    const [errorMsg, setErrorMsg] = useState('')
    const handleChange = (event) => {
        const { name, value } = event.target;
        setService((formData) => ({ ...formData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + service);
        create(service)
            .then((res) => {
                if (res.success) {
                    alert(res.message + " - id: " + res.data.id);
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
                    <h2 className="heading-txt"><span className="txt-white">Add</span> Service Item</h2>
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
export default AddService;
