import { useState } from "react";
import { Form } from "react-bootstrap";

const MyForm = () => {
    const [myName, setMyName] = useState("");
    const [myDescription, setMyDescription] = useState("");
    const [myCountry, setMyCountry] = useState("");
    const [myAccept, setMyAccept] = useState(false);
    const [myGender, setMyGender] = useState("");

    const sendState = () => {
        console.log(myName);
        console.log(myDescription);
        console.log(myCountry);
        console.log(myAccept);
        console.log(myGender);
    }

    const myInputElement = (placeHolder) => {
        return <div>
            <Form.Control
                type="text"
                value={myName} onChange={(e) => setMyName(e.target.value)} placeholder={placeHolder}
            />
        </div>
    }

    return(
        <>
            {
                myInputElement("Ingresar Usario")
            }
            <div>
                <textarea value={myDescription} onChange={(e) => setMyDescription(e.target.value)}></textarea>
            </div>
            <div>
                <Form.Select value={myCountry} onChange={(e) => setMyCountry(e.target.value)}>
                    <option value="PE">Peru</option>
                    <option value="ARG">Argentina</option>
                    <option value="UY">Uruguay</option>
                </Form.Select>
            </div>

            <div>
                Acepta Terminos
                <input type="checkbox" checked={myAccept} onChange={(e) => setMyAccept(e.target.checked)}/>
            </div>

            Hombre
            <input type="radio" name="gender" value="H" checked={myGender == "H"} onChange={(e) => setMyGender(e.target.value)}/>

            Mujer
            <input type="radio" name="gender" value="M" checked={myGender == "M"} onChange={(e) => setMyGender(e.target.value)}/>
            
            N/A
            <input type="radio" name="gender" value="NA" checked={myGender == "NA"} onChange={(e) => setMyGender(e.target.value)}/>

            <div>
                                            <button onClick={sendState}>Enviar con estados</button>
                                        </div>

            {
                /*myAccept && <div>
                                <button onClick={sendState}>Enviar con estados</button>
                            </div>*/
            }


        </>
    )
}

export default MyForm;