import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function Addquiz() {
    const params = useParams();

    const [data, setData] = useState({ quizname: "",question:""});
    const [add, setAdd] = useState({ option: "" });
    const [choice,setChoice]= useState({choice1:"",choice2:"",choice3:""});
    const [ques,setQues]=useState("");
    const [opts1,setOpts1]=useState("");
    const [opts2,setOpts2]=useState("");
    const [opts3,setOpts3]=useState("");


    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const onOptionChange = e => {
        setAdd(e.target.value)
        setData({ ...data, ["option"]: e.target.value });
    }

    const handleOption = ({currentTarget: input}) => {
        setChoice({ ...choice, [input.name]: input.value });  
    }

    const handleAddOption =()=>{
            setOpts1(choice.choice1)
            setOpts2(choice.choice2)
            setOpts3(choice.choice3)
            setData({...data,["choice"]:[choice.choice1,choice.choice2,choice.choice3]})
            console.log(choice)
    }       

    const handleAddQuestion= () => {    
            setQues(data.question)
          
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://digivalserver.vercel.app/api/userdata";
            await axios.post(url, data);
            window.alert("Quiz Created Successfully")
            window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                console.log(error)
            }
        }

    };
    return (

        <div className="container-fluid">
            <br/>
                    <h3 style={{color:"green"}}>ADD QUIZ </h3>
            
            <div className="d-sm-flex align-items-center justify-content-between mb-4">

            </div>

            <div className="card shadow mb-4">

                <div className="card-body">

                    <form onSubmit={handleSubmit}>
                        <>
                        

                            <div className="row mb-3">
                                
                                    <label for="inputEmail3" className="col-sm-2 col-form-label" style={{ color: "#54b2e8" }}>QUIZ NAME</label>
                                
                                <div className="col-sm-2">
                                    <input type="text" name='quizname' className='input'
                                        onChange={handleChange}
                                        value={data.quizname} />
                                </div>
                            </div>

                            <div className="row mb-3">
                              
                             <label for="inputEmail3" className="col-sm-2 col-form-label" size="150" style={{ color: "#54b2e8" }}>QUESTION</label>
                                
                                <div className="col-lg-2">

                                    <input type="text" name='question' className='input'
                                        onChange={handleChange}
                                        value={data.question} />
                                </div>
                                <div className='col-sm-2'>
                                <button type="button" className="btn btn-outline-info" onClick={handleAddQuestion}>Add Question</button>
                                </div>

                            </div>
                            <div className="row mb-3">
                                    <label for="inputEmail3" className="col-sm-2 col-form-label" style={{ color: "#54b2e8" }}>OPTION</label>

                                   

                                <div className='col-sm-2'>
                                <input type="text" name='choice1' className='input'
                                        placeholder='choice1'
                                        onChange={handleOption}
                                        value={choice.choice1}
                                         />
                                </div>
                                <div className='col-sm-2'>
                                <input type="text" name='choice2' className='input'
                                        placeholder='choice2'
                                        onChange={handleOption}
                                        value={choice.choice2}
                                         />
                                </div>
                                <div className='col-sm-2'>
                                <input type="text" name='choice3' className='input'
                                        placeholder='choice3'
                                        onChange={handleOption}
                                        value={choice.choice3}
                                         />
                                </div>

                                <div className='col-sm-2'>
                                <button type="button" className="btn btn-outline-info" onClick={handleAddOption}>Add Options</button>
                                </div>
                               

                            <div className='row mb-3'>
                                <div className='col-sm-2'>

                                </div>
                                <div className="col-sm-2">
                                    <input type="radio" checked={choice === 'choice1'} value={choice.choice1} onChange={onOptionChange}/> {choice.choice1}
                                  
                                </div>
                                <div className='col-sm-2'>
                                <input type="radio" checked={choice === 'choice2'} value={choice.choice2}onChange={onOptionChange}/> {choice.choice2}
                                </div>
                                <div className='col-sm-2'>
                                <input type="radio" checked={choice === 'choice3'} value={choice.choice3} onChange={onOptionChange} />{choice.choice3}
                                </div>
                                </div>

                            </div>

                            <br />
                            
                            <div className='row mb-3'>
                            <h5>{ques}</h5>
                            <h6><span>{opts1}</span> <span>{opts2}</span> <span>{opts3}</span></h6>
                            </div>
                            
                            <div className='row mb-3'>
                                <div className='col-lg-11 text-center text-center'>
                                    <button type="submit" className="btn btn-outline-info">SAVE</button>
                                </div>
                            </div>
                        </>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default Addquiz