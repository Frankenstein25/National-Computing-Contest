import './css/coding.css';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-spellcheck";
import "ace-builds/src-noconflict/ext-searchbox";
import "ace-builds/src-noconflict/ext-beautify";
import {Dropdown,Form} from 'react-bootstrap';
import {useState} from 'react';


const Coding = () => {

    const [language, setLanguage] = useState('python');
    const [question, setQuestion] = useState('q1');
    
    return ( 
           
        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="col-12 col-md-6">
                    <div className="container left-side">
                        <div className="score-div d-flex mb-3">
                            <table className="score">
                                <tr>
                                    <td>Score : {400} </td>
                                </tr>
                            </table>
                            <select id="dropdown-basic" class="ml-auto que-no" value={question} onChange={e => setQuestion(e.target.value)}>
                                    <option class="bg-light opt" value="q1">Q.1</option>
                                    <option class="bg-light opt" value="q2">Q.2</option>
                                    <option class="bg-light opt" value="q3">Q.3</option>
                                    <option class="bg-light opt" value="q4">Q.4</option>
                                    <option class="bg-light opt" value="q5">Q.5</option>
                                    <option class="bg-light opt" value="q6">Q.6</option>
                                    
                                </select>
                        </div>
                        
                        <div className="card que-card">
                            <div className="card-header text-center align-items-center">
                                <h5>Problem Statement</h5>
                            </div>
                            <div className="card-body que-body" id="scroll">
                                
                                <div className="question mb-5">
                                    Ashley loves primes!
                                    She gives you T testcases.<br />
                                    In each testcase you are given two space separated integers L and R. You have to print the number of
                                    primes in range L to R(both included).<br />
                                    Ashley loves primes!<br />
                                    She gives you T testcases.<br />
                                    In each testcase you are given two space separated integers L and R. You have to print the number of
                                    primes in range L to R(both included).<br />
                                    Ashley loves primes!<br />
                                    She gives you T testcases.<br />
                                    In each testcase you are given two space separated integers L and R. You have to print the number of
                                    primes in range L to R(both included).<br />
                                </div>
                                <div className="mb-3">
                                    INPUT FORMAT
                                    <br />
                                    First line contains a single integer T, the number of testcases.<br />
                                    Next T lines consists of 2 space separated integers, L and R.<br />
                                </div>
                                <div className="mb-3">
                                    CONSTRAINTS<br />
                                    1 = T = 10^5<br />
                                    1 = L = R = 10^6<br />
                                </div>
                    
                                <div className="mb-3">
                                    OUTPUT FORMAT<br />
                                    For each testcase print a single required integer.<br />
                                </div>
                    
                                <div className="mb-3">
                                    SAMPLE INPUT<br />
                                    1
                                    2 4<br/>
                                </div>
                    
                                <div className="mb-3">
                                    SAMPLE OUTPUT<br />
                                    2<br />
                                </div>
                    
                                <div className="mb-3">
                                    EXPLANATION<br />
                                    Numbers in range [2, 4] are 2, 3, 4. Out of these 2 and 3 are prime numbers so answer is 2.<br />
                                </div>
                            </div>
                        </div>
                        
                        <div className="check d-flex align-items-left mt-4 mb-4">
                            <label><input type="checkbox" for="input" name="input" /><span className="ml-2">Custom Input</span></label>
                        </div>

                        <span className="cust-inp" style={{color:"white"}}>
                            <h6>Custom Input</h6>
                        </span>

                        <div className="custom-input mt-3">
                        <textarea className="card custom-area"></textarea>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-6">
                <div className="wrapper-container right-side ml-3">
                    <div className="lang d-flex"> 
                            
                                <select id="dropdown-basic" value={language} onChange={e => setLanguage(e.target.value)}>
                                    <option class="bg-light opt" value="c">C</option>
                                    <option class="bg-light opt" value="cpp">C++</option>
                                    <option class="bg-light opt" value="python">Python</option>
                                </select>

                            <Form className="d-flex file-bod ml-auto mr-3">
                                <Form.Group className="file">
                                    <Form.File id="file-input" name="file-input" hidden/>
                                    <label for="file-input" class="inp">Choose File</label>
                                </Form.Group>
                            </Form>
                    </div>
                    
                    <div className="code-editor">
                        <AceEditor mode="python" theme="monokai" 
                         className="editor"  placeholder="Type your code here" showPrintMargin={false}
                         showGutter={true}
                         onChange={(value, stat) => {
                            console.log("onChange", value, stat);
                        }}
                         setOptions={{
                            enableSnippets: true,
                            showLineNumbers: true, 
                            tabSize: 4,
                            }}></AceEditor>
                    </div>

                    <div className="buttons d-flex mt-4 mb-4">
                        <button className="btn btn-info cbt">Clear</button>
                        <button className="btn btn-info bt">Load Buffer</button>
                        <button className="btn btn-info bt">Run Code</button>
                        <button className="btn btn-info bt">Submit</button>
                    </div>
                    
                    <span className="console-txt" style={{color:"white"}}>
                            <h6>Console</h6>
                    </span>

                    <div className="console" style={{color:"white"}}>
                        <textarea className="card custom-area" readOnly id="scroll-con">Warning !</textarea>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>

        
     );
     
}
 
export default Coding;