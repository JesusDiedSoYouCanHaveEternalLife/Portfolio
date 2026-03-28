import { useNavigate } from "react-router-dom";
function FormReference({ reference, handleChange, handleSubmit }) {
    const navigate = useNavigate();
    return (
        <form onSubmit={handleSubmit} className="form" data-bs-theme="dark">
            <input type="hidden" name="id" value={reference.id || ""} />
            <div className="form-group">
                <label htmlFor="firstnameTextField">First Name</label>
                <input
                    id="firstnameTextField"
                    name="firstname"
                    className="form-control"
                    placeholder="Enter the first name"
                    value={reference.firstname || ""}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastnameTextField">Last Name</label>
                <input
                    id="lastnameTextField"
                    name="lastname"
                    className="form-control"
                    placeholder="Enter the last name"
                    value={reference.lastname || ""}
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
                    value={reference.email || ""}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="positionTextField">Position</label>
                <input
                    id="positionTextField"
                    name="position"
                    className="form-control"
                    placeholder="Enter the position"
                    value={reference.position || ""}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="companyTextField">Company</label>
                <input
                    id="companyTextField"
                    name="company"
                    className="form-control"
                    placeholder="Enter the company"
                    value={reference.company || ""}
                    onChange={handleChange}
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
export default FormReference;
