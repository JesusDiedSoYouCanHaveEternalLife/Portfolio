import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { list } from '../../datasource/api-users';
import ListUserItem from './ListUserItem';
import Layout from "../Layout";
import { isAuthenticated } from "../auth/auth-helper";

function ListUser({page}) {
    let [userList, setUserList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    const loadUsers = () => {
        list()
            .then((res) => {
                if (res.success) {
                    setUserList(res.data);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    };
    const handleRemove = (id) => {
        loadUsers();
    };
    useEffect(() => {
        loadUsers();
    }, []);
    return (
        <Layout page={page}>
            <main className="custom-page">
                <div className="heading">
                    <h2 className="heading-back">Users</h2>
                    <h2 className="heading-txt"><span className="txt-white">User</span> List</h2>
                </div>
                <div className="">
                    <div className="text-end">
                        <Link to="/users/add" className="btn btn-primary align-self-end" role="button">
                            <i className="fas fa-plus-circle"></i>
                            Add a new Item
                        </Link>
                    </div>
                    <br />
                    <div className="table-responsive">
                        {isLoading && <div>Loading...</div>}
                        {!isLoading && console.log("User List: ", userList)}
                        {!isLoading && userList.length === 0 && <div>No users found.</div>}
                        {!isLoading && userList.length > 0 &&
                            <table className="table table-bordered table-striped table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">First Name</th>
                                        <th className="text-center">Last Name</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">Created</th>
                                        <th className="text-center">Updated</th>
                                        {isAuthenticated() && (
                                            <th className="text-center" colSpan="2">Actions</th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList.map(user =>
                                        <ListUserItem
                                            key={user.id}
                                            user={user}
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
export default ListUser;
