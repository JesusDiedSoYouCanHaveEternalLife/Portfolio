import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { list } from '../../datasource/api-services';
import ListServiceItem from './ListServiceItem';
import Layout from "../Layout";
function ListService({page}) {
    let [serviceList, setServiceList] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    const loadServices = () => {
        list()
            .then((res) => {
                if (res.success) {
                    setServiceList(res.data);
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.log(err);
            })
    };
    const handleRemove = (id) => {
        loadServices();
    };
    useEffect(() => {
        loadServices();
    }, []);
    return (
        <Layout page={page}>
            <main className="custom-page">
                <div className="heading">
                    <h2 className="heading-back">Services</h2>
                    <h2 className="heading-txt"><span className="txt-white">Service</span> List</h2>
                </div>
                <div className="">
                    <div className="text-end">
                        <Link to="/services/add" className="btn btn-primary align-self-end" role="button">
                            <i className="fas fa-plus-circle"></i>
                            Add a new Item
                        </Link>
                    </div>
                    <br />
                    <div className="table-responsive">
                        {isLoading && <div>Loading...</div>}
                        {!isLoading && console.log("Service List: ", serviceList)}
                        {!isLoading && serviceList.length === 0 && <div>No services found.</div>}
                        {!isLoading && serviceList.length > 0 &&
                            <table className="table table-bordered table-striped table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">Title</th>
                                        <th className="text-center">Description</th>
                                        <th className="text-center" colSpan="2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {serviceList.map(service =>
                                        <ListServiceItem
                                            key={service.id}
                                            service={service}
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
export default ListService;
