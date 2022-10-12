import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex(){
    const [teacherList, setTeacherList] = useState<Teacher[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [message, setMessage] = useState('');

    useEffect(()=> {
        ApiService.get('/teacher/').then((response) =>{
            setTeacherList(response.data)
        })
    }, []);

    function bookClass(){
        if(selectedTeacher !== null){
            if(validateClassData()){
                ApiService.post('teacher/' + selectedTeacher.id + '/classes', {
                    name, 
                    email
                }).then(() => {
                    setSelectedTeacher(null);
                    setMessage('Registered sucessfully!')
                }).catch((error) =>{
                    setMessage(error.response?.data.message);
                })
            } else {
                setMessage('Fill in the fields correctly.');
            }
        }
    }

    function validateClassData(){
        return name.length > 0 && email.length > 0;
    }

    return {
        teacherList,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        bookClass,
        message,
        setMessage
    }
}