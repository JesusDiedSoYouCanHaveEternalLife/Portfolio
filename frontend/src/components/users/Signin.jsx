import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { signin } from "../../datasource/api-users";
import { authenticate } from "../../components/auth/auth-helper";
import Layout from "../Layout";


function Signin({page}) {
    const { state } = useLocation();
    const { from } = state || { from: { pathname: "/projects/list" } };

    let navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('')
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        signin(user)
            .then((res) => {
                if (res && res.success) {
                    authenticate(res.token, () => {
                        navigate(from, { replace: true });
                    });
                } else {
                    setErrorMsg(res.message);
                }
            })
            .catch(err => {
                setErrorMsg(err.message);
                console.log(err);
            });
    };
    return (
        <Layout page={page}>
            <main className="custom-page">
                <div className="heading">
                    <h2 className="heading-back">Sign In</h2>
                    <h2 className="heading-txt"><span className="txt-white">Sign</span> In</h2>
                </div>
                <div className="row">
                    <div className="offset-md-3 col-md-6">
                        <p className="flash"><span>{errorMsg}</span></p>
                        <form onSubmit={handleSubmit} className="form">
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={user.email || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <br />

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    value={user.password || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <br />

                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>

                            &nbsp; &nbsp;

                            <Link to="/users/register" style={{ textDecoration: 'none' }}>
                                Sign-up
                            </Link>
                        </form>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default Signin;
