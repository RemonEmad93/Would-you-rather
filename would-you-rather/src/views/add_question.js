import React from "react";
import CreateQuestion from "../components/create_question";
import Navbr from '../components/navbr'

class AddQuestion extends React.Component{
    render(){
        return(
            <div>
                <Navbr/>
                <CreateQuestion/>
            </div>
        )
    }
}

export default AddQuestion