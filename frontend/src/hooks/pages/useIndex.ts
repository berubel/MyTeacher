import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex(){
    const [teacherList, setTeacherList] = useState<Teacher[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=> {
        ApiService.get('/teacher/').then((response) =>{
            setTeacherList(response.data)
        })
    }, []);

    return {
        teacherList,
        name,
        setName,
        email,
        setEmail,
    }
}