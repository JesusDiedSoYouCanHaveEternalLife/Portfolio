import { Link } from "react-router-dom";
import { remove } from "../../datasource/api-references";
function ListReferenceItem({reference, onRemove}) {
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
                <td className="text-center"> {reference.firstname || ''} </td>
                <td className="text-center"> {reference.lastname || ''} </td>
                <td className="text-center"> {reference.email || ''} </td>
                <td className="text-center"> {reference.position || ''} </td>
                <td className="text-center"> {reference.company || ''} </td>
                <td className="text-center">
                    <Link className="btn bg-primary btn-primary btn-sm" to={'/references/edit/' + reference.id}>
                        <i className="fas fa-pencil-alt"></i>
                    </Link>
                </td>
                <td className="text-center">
                    <button
                        className="btn bg-danger btn-danger btn-sm"
                        onClick={() => handleRemove(reference.id)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}
export default ListReferenceItem;
