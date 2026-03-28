import { Link } from "react-router-dom";
import { remove } from "../../datasource/api-users";
function ListUserItem({user, onRemove}) {
    const handleRemove = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            remove(id)
                .then(res => {
                    if (res && res.success) {
                        onRemove();
                    }
                    else {
                        alert(res.message);
                    }
                }).catch(err => {
                    alert(err.message);
                    console.log(err)
                });
        };
    };
    return (
        <>
            <tr>
                <td className="text-center"> {user.firstname || ''} </td>
                <td className="text-center"> {user.lastname || ''} </td>
                <td className="text-center"> {user.email || ''} </td>
                <td className="text-center"> {user.created ? new Date(user.created).toLocaleDateString() : ''} </td>
                <td className="text-center"> {user.updated ? new Date(user.updated).toLocaleDateString() : ''} </td>
                <td className="text-center">
                    <Link className="btn bg-primary btn-primary btn-sm" to={'/users/edit/' + user.id}>
                        <i className="fas fa-pencil-alt"></i>
                    </Link>
                </td>
                <td className="text-center">
                    <button
                        className="btn bg-danger btn-danger btn-sm"
                        onClick={() => handleRemove(user.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}
export default ListUserItem;
