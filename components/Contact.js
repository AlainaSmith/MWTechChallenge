import Link from 'next/link'


const Contact = () => {
    return(
        <div>
            <p>
                <label for ="nameField">First Name</label>
                <input id ="nameField" type = "text" required minlength="1" maxlength="15" name = "firstName" /> 
            </p>
            <p>
                <label for ="nameField">Last Name</label>
                <input id ="nameField" type = "text" required minlength="1" maxlength="15" name = "lastName" /> 
            </p>
            <p>
                <label for ="title">Title</label>
                <input id ="title" type = "text" required minlength="1" maxlength="10" name = "title" /> 
            </p>
            <p>
                <label for = "email"> Email: </label>
                <input type = "email" name = "email" />
                </p>
             <p>
                <label for = "message">Message</label>
                <label><textarea required name = "messageText" cols = "20" rows="6"></textarea></label>
             </p>

             <div id='submitButton'>
                 Submit
             </div>
        </div>
    )
}

<style jsx>{`
input:valid{
    border-color:green
}

input:invalid{
    border-color: red;
}

#submitButton{
    position:relative;
    top: 1.5rem;
    left:4.4rem;
    background-color:yellow;
    color:white;
    padding:0.5rem;
    width:45%;
}
`}</style>
export default Contact





