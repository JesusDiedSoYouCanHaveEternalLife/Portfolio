import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { list } from '../../datasource/api-references';
import ListReferenceItem from './ListReferenceItem';
import Layout from "../Layout";
import { isAuthenticated } from "../auth/auth-helper";

function ListReference({page}) {
    let [referenceList, setReferenceList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    const loadReferences = () => {
        list()
            .then((res) => {
                if (res.success) {
                    setReferenceList(res.data);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    };
    const handleRemove = (id) => {
        loadReferences();
    };
    useEffect(() => {
        loadReferences();
    }, []);
    return (
        <Layout page={page}>
            <main className="custom-page">
                <div className="heading">
                    <h2 className="heading-back">References</h2>
                    <h2 className="heading-txt"><span className="txt-white">Reference</span> List</h2>
                </div>
                <div className="">
                    <div className="text-end">
                        {isAuthenticated() && (
                            <Link to="/references/add" className="btn btn-primary align-self-end" role="button">
                                <i className="fas fa-plus-circle"></i>
                                Add a new Item
                            </Link>
                        )}
                    </div>
                    <br />
                    <div className="table-responsive">
                        {isLoading && <div>Loading...</div>}
                        {!isLoading && console.log("Reference List: ", referenceList)}
                        {!isLoading && referenceList.length === 0 && <div>No references found.</div>}
                        {!isLoading && referenceList.length > 0 &&
                            <table className="table table-bordered table-striped table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">First Name</th>
                                        <th className="text-center">Last Name</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">Position</th>
                                        <th className="text-center">Company</th>
                                        {isAuthenticated() && (
                                            <th className="text-center" colSpan="2">Actions</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {referenceList.map(reference =>
                                        <ListReferenceItem
                                            key={reference.id}
                                            reference={reference}
                                            onRemove={handleRemove}
                                        />
                                    )}
                                </tbody>
                            </table>}
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default ListReference;
