import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditQuiz = () => {
    const navigate = useNavigate();
    let params = useParams();

    const headers = {
        'Authorization': 'Bearer ',
        'My-Custom-Header': 'foobar'
    };

    const getData =
        async () => {
            try {
                const headers = {
                    'Authorization': 'Bearer ',
                    'My-Custom-Header': 'foobar'
                };
                axios.get(`https://digivalserver.vercel.app/api/userdata/${params.editId}`, { headers }).then((response) => {

                    formik.setValues(response.data)

                    console.log(response);

                }, (error) => {
                    console.log(error);
                });

            } catch (error) {
                console.log('error')
            }
        }

    useEffect(() => {

        getData()

    }, [])

    const formik = useFormik({
        initialValues: {
            quizname: "",
            question: "",
            choice:[]

            

        },
        onSubmit: async (values) => {

            try {
                // delete values._id;
                const payload = {

                    "quizname": values.quizname,
                    "question": values.question,
                     "choice": [values.choice[0],values.choice[1],values.choice[2]]
                };
                await axios.put(`https://digivalserver.vercel.app/api/userdata/${params.editId}`, payload, { headers })
                alert('Question Updated')
                navigate("/")
            } catch (error) {
                console.log(error)
            }
        }
    });




    return (
        <>
            <div className="container-fluid">
            <br/>
                <h3 style={{ color: "green" }}>EDIT QUIZ</h3>

                <div className="card shadow mb-4">
                    <div className="card-body"></div>
                    <form onSubmit={formik.handleSubmit}>

                        <div className='row' >
                            <div className='col-lg-6' >
                                <label style={{ color: "blue" }}>
                                    QUIZ NAME
                                </label>
                                <input
                                    name="quizname"
                                    type="text"
                                    className='form-control'
                                    value={formik.values.quizname}
                                    onChange={formik.handleChange}
                                />
                            </div>

                            <br />
                            <div className='col-lg-6'>
                                <label style={{ color: "blue" }}>
                                    QUESTION
                                </label>
                                <input
                                    name="question"
                                    className='form-control'
                                    type="text"
                                    value={formik.values.question}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <br />
                
                        <div className='row'>
                            <div className='col-lg-4'>
                                <label style={{ color: "blue" }}>
                                    CHOICE 1
                                </label>
                                <input
                                    name="choice[0]"
                                    className='form-control'
                                    type="text"
                                    value={formik.values.choice ? formik.values.choice[0] : "---"}
                                    onChange={formik.handleChange}
                                />

                            </div>
                            <div className='col-lg-4'>
                                <label style={{ color: "blue" }}>
                                    CHOICE 2
                                </label>
                                <input
                                    name="choice[1]"
                                    className='form-control'
                                    type="text"
                                    value={formik.values.choice ? formik.values.choice[1] : "---"}
                                    onChange={formik.handleChange}
                                />

                            </div>
                            <div className='col-lg-4'>
                                <label style={{ color: "blue" }}>
                                    CHOICE 3
                                </label>
                                <input
                                    name="choice[2]"
                                    className='form-control'
                                    type="text"
                                    value={formik.values.choice ? formik.values.choice[2] : "---"}

                                    onChange={formik.handleChange}
                                />

                            </div>
                        </div>
                        <button type="submit" className="btn btn-info mt-4" style={{ marginBottom: "10px" }}>
                            Update
                        </button>

                    </form>




                </div>
            </div>
        </>



    )
}

export default EditQuiz