import './css/quehub.css';
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {ProgressBar} from 'react-bootstrap';
import axiosInstance from '../axios';


const Questions = () => {
    const history = useHistory();
    const [ques, setQues] = useState([]);
    // const [ques, setQues] = useState([
    //     {id:0, qno:1, submit:Math.floor(Math.random()*100)},
    //     {id:1, qno:2, submit:Math.floor(Math.random()*100)},
    //     {id:2, qno:3, submit:Math.floor(Math.random()*100)},
    //     {id:3, qno:4, submit:Math.floor(Math.random()*100)},
    //     {id:4, qno:5, submit:Math.floor(Math.random()*100)},
    //     {id:5, qno:6, submit:Math.floor(Math.random()*100)}
    // ]);
    useEffect(() => {
        axiosInstance.get('questionhub/').then((res) => {
            const allQuestions = res.data;
            setQues([
                { id: allQuestions[0].pk, qno: 1, submit: allQuestions[0].total_attempts, progress: 100 * parseInt(allQuestions[0].correct_attempts) / parseInt(allQuestions[0].total_attempts) },
                { id: allQuestions[0].pk, qno: 2, submit: allQuestions[0].total_attempts, progress: 100 * parseInt(allQuestions[0].correct_attempts) / parseInt(allQuestions[0].total_attempts) },
                { id: allQuestions[0].pk, qno: 3, submit: allQuestions[0].total_attempts, progress: 100 * parseInt(allQuestions[0].correct_attempts) / parseInt(allQuestions[0].total_attempts) },
                { id: allQuestions[0].pk, qno: 4, submit: allQuestions[0].total_attempts, progress: 100 * parseInt(allQuestions[0].correct_attempts) / parseInt(allQuestions[0].total_attempts) },
                { id: allQuestions[0].pk, qno: 5, submit: allQuestions[0].total_attempts, progress: 100 * parseInt(allQuestions[0].correct_attempts) / parseInt(allQuestions[0].total_attempts) },
                { id: allQuestions[0].pk, qno: 6, submit: allQuestions[0].total_attempts, progress: 100 * parseInt(allQuestions[0].correct_attempts) / parseInt(allQuestions[0].total_attempts) },
            ]);
            console.log(res.data);
        });
    }, [setQues]);

    const handleCoding = (e) => {
        history.push('/coding/' + e.target.id)
    }

    return ( 
        <div className="row">
            <div className="col-8 col-sm-12">
                <Table borderless className="tab-head">
                    <thead>
                        <tr className="head">
                        <th></th>
                        <th>Q.No</th>
                        <th className="submission">Submissions</th>
                        <th>Accuracy</th>
                        <th>Attempt</th>
                        <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {ques.map((ques) => (
                            <tr key={ques.id} className="elements">
                                <td></td>
                                <td>{ques.qno}</td>
                                <td className="submission">{ques.submit}</td>
                                <td>
                                    <div>
                                    <ProgressBar animated now={ques.progress} className="progress" label={`${Number(ques.progress)}%`}  />
                                    </div>
                                </td>
                                <td>
                                    <button id={ques.id} className="btn atmpt-btn" onClick={handleCoding}>View</button>
                                </td>
                                <td></td>
                            
                            </tr>
                        ))} 
                        
                    </tbody>
                </Table>
            
            </div> 
        </div>
     );
}
 
export default Questions;