import { useState } from "react";
import { Teacher } from "../../@types/teacher";

export function useIndex(){
    const [teacherList, setLitTeacher] = useState<Teacher[]>([
        {
          id: 1,
          name: "Gabriele das Virgens",
          photo: 'https://github.com/berubel.png',
          description: 'Beauty Lessons',
          value: 500,
        },
        {
          id: 2,
          name: "Gabriele das Virgens",
          photo: 'https://github.com/berubel.png',
          description: 'Beauty Lessons',
          value: 500,
        },
        {
          id: 3,
          name: "Gabriele das Virgens",
          photo: 'https://github.com/berubel.png',
          description: 'Beauty Lessons',
          value: 500,
        },
        {
          id: 4,
          name: "Gabriele das Virgens",
          photo: 'https://github.com/berubel.png',
          description: 'Beauty Lessons',
          value: 500,
        }
    ]);

    return {
        teacherList
    }
}