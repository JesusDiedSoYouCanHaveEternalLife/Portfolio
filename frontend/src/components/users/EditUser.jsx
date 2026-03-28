import { useState, useEffect } from "react";
import { update, getOne } from "../../datasource/api-users";
import { useNavigate, useParams } from "react-router-dom";
import UsersModel from "../../datasource/usersModel";
import FormUser from "./FormUser";
import Layout from "../Layout";
function EditUser({page}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState(new UsersModel());
    const [errorMsg, setErrorMsg] = useState('')
    useEffect(() => {
        getOne(id)
            .then((res) => {
                if (res.success) {
                    setUser(new UsersModel(
                        res.data.id,
                        res.data.firstname,
                        res.data.lastname,
                        res.data.email,
                        res.data.password,
                        res.data.created,
                        res.data.updated
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
        setUser((formData) => ({ ...formData, [name]: value }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting:" + user);
        update(user, id)
            .then((res) => {
                if (res.success) {
                    alert(res.message);
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
                    <h2 className="heading-txt"><span className="txt-white">Edit</span> User</h2>
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
export default EditUser;
