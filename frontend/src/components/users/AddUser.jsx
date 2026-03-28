import { useState } from "react";
import { create } from "../../datasource/api-users";
import { useNavigate } from "react-router-dom";
import UsersModel from "../../datasource/usersModel";
import FormUser from "./FormUser";
import Layout from "../Layout";
function AddUser({page}) {
    const navigate = useNavigate();
    const [user, setUser] = useState(new UsersModel());
    const [errorMsg, setErrorMsg] = useState('')
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((formData) => ({ ...formData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + user);
        create(user)
            .then((res) => {
                if (res.success) {
                    alert(res.message + " - id: " + res.data.id);
                    navigate("/users/list");
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
                    <h2 className="heading-back">Users</h2>
                    <h2 className="heading-txt"><span className="txt-white">Add</span> User Item</h2>
                </div>
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <p className="flash"><span>{errorMsg}</span></p>
                        <FormUser
                            user={user}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default AddUser;
