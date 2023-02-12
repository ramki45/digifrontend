import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useState } from 'react';

function Quiz() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {

        getProjects()

    }, [])


    let getProjects = async () => {
        try {
            const headers = {
                'Authorization': 'Bearer ',
                'My-Custom-Header': 'foobar'
            };
            axios.get('https://digivalserver.vercel.app/api/userdata', { headers }).then((response) => {
                setProjectList(response.data);
                console.log(response.data)

            }, (error) => {
                console.log(error);
            });

        } catch (error) {
            console.log('error')
        }
    }


    const handleDelete = (e) => {
        const delId = e.currentTarget.dataset.id;

        try {
            const headers = {
                'Authorization': 'Bearer ',
                'My-Custom-Header': 'foobar'
            };
            axios.delete(`https://digivalserver.vercel.app/api/userdata/${delId}`, { headers }).then((response) => {
                alert('quiz deleted')
                getProjects();

            }, (error) => {
                console.log(error);
            });

        } catch (error) {
            console.log('error')
        }
    };


    const handleView = (e) => {

        const viewId = e.currentTarget.dataset.id;
        console.log(viewId)
        window.location = `/quiz/view/${viewId}`;

    }

    const handleEdit = (e) => {

        const editId = e.currentTarget.dataset.id;
        console.log(editId)
        window.location = `/quiz/edit/${editId}`;

    }

    return (
     

                <>

                    <div className="container-fluid">
                        <br/>
                    <h3 style={{color:"green"}}>QUIZ APP</h3>
                    <div className="d-sm-flex align-items-center justify-content-end mb-4">
                    <Link to='/addquiz' className="d-flex   btn btn-outline-primary"> Add Quiz </Link>
            </div>
                        <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr className='table table-info'>
                                                <th className='text-green' >QUIZ NAME
                                                </th>
                                                <th className='text-green'>QUESTIONS</th>
                                                <th className='text-green'>ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {projectList.map((row) => (
                                                <tr>
                                                    <td  data-name={row.name} > 
                                                    <Link  style={{textDecoration:"none"}} data-id={row._id} onClick={handleView} >
                                                    {row.quizname}
                                                    </Link>
                                                    </td>
                                                    <td>{row.question}</td>
                                                    <td>
                                                        {/* <button className="btn btn-outline-info" data-id={row._id} onClick={handleEdit}>View</button> */}
                                                        <button className="btn btn-outline-info" data-id={row._id} onClick={handleEdit}>Edit</button>
                                                        <button className="btn btn-outline-info" style={{ marginLeft: '9px' }} data-id={row._id} onClick={handleDelete}>Delete</button>
                                                    </td>

                                                </tr>
                                            ))}


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
      
    )
}

export default Quiz