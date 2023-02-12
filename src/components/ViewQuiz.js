import React from 'react'
import { useState,useEffect } from 'react';
import {  useParams } from 'react-router-dom';

import axios from "axios";

function ViewQuiz() {
  const [projectList, setProjectList] = useState([]);
  let params = useParams()
  

  const getData=async()=>{
    try {
      const headers = {
          'Authorization': 'Bearer ',
          'My-Custom-Header': 'foobar'
      };
      axios.get(`https://digivalserver.vercel.app/api/userdata/${params.viewId}`, { headers }).then((response) => {
          setProjectList(response.data);
          console.log(response.data)

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
  return (
    <div className="container-fluid">
        <br/>
                    <h3 style={{color:"green"}}>VIEW QUIZ</h3>

            
            <div className="d-sm-flex align-items-center justify-content-between mb-4">

            </div>

            <div className="card shadow mb-4">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr className='table table-info'>
                                                <th className='text-black' >QUIZ NAME
                                                </th>
                                                <th className='text-green'>QUESTIONS</th>
                                                <th className='text-black'>CHOICE 1</th>
                                                <th className='text-black'>CHOICE 2</th>
                                                <th className='text-black'>CHOICE 3</th>

                                            </tr>
                                        </thead>
                                        <tbody>

                                        
                                                <tr>
                                                    <td> {projectList.quizname}</td>
                                                    <td>{projectList.question}</td>
                                                    <td>{projectList.choice ? projectList.choice[0]: "---"}</td>
                                                    <td>{projectList.choice ? projectList.choice[1]: "---"}</td>
                                                    <td>{projectList.choice ? projectList.choice[2]: "---"}</td>
                                                </tr>
                                             
                           


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

        </div>
  )
}

export default ViewQuiz