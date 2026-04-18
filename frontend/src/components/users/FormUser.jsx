import { useNavigate } from "react-router-dom";
function FormUser({ user, handleChange, handleSubmit }) {
    const navigate = useNavigate();
    return (
        <form onSubmit={handleSubmit} className="form" data-bs-theme="dark">
            <input type="hidden" name="id" value={user.id || ""} />
            <div className="form-group">
                <label htmlFor="firstnameTextField">First Name</label>
                <input
                    id="firstnameTextField"
                    name="firstName"
                    className="form-control"
                    placeholder="Enter the first name"
                    value={user.firstName || ""}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastnameTextField">Last Name</label>
                <input
                    id="lastnameTextField"
                    name="lastName"
                    className="form-control"
                    placeholder="Enter the last name"
                    value={user.lastName || ""}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="usernameTextField">Username</label>
                <input
                    id="usernameTextField"
                    name="username"
                    className="form-control"
                    placeholder="Enter the username"
                    value={user.username || ""}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="emailTextField">Email</label>
                <input
                    id="emailTextField"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter the email address"
                    value={user.email || ""}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="passwordTextField">Password</label>
                <input
                    id="passwordTextField"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter the password"
                    value={user.password || ""}
                    onChange={handleChange}
                    required
                />
            </div>
            <br />
            <button className="btn btn-primary" type="submit">
                <i className="fas fa-edit"></i> Submit
            </button>
            &nbsp; &nbsp;
            <button className="btn btn-warning" type="button" onClick={() => navigate(-1)}>
                <i className="fas fa-undo"></i>
                Cancel
            </button>
        </form>
    )
}
export default FormUser;
