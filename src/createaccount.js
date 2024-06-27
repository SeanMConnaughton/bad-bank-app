import React from "react";
import UserContext from './context.js'

function CreateAccount(){
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if(!field){
            setStatus('Error: ' + label)
            setTimeout(() => setStatus(' '), 3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        console.log(name, email, password);
        if(!validate(name,  'name')) return;
        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;
        ctx.users.push({name, email, password, balance: 100});
        setShow(false);
    }

    function clearForm(){
        setName(' ');
        setStatus(' ');
        setPassword(' ');
        setShow(true);
    }
}

export default CreateAccount;
