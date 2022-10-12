import { useState } from "react";
import { Teacher } from "../../@types/teacher";

export function useIndex(){
    const [teacherList, setLitTeacher] = useState<Teacher[]>([]);

    return {
        teacherList
    }
}