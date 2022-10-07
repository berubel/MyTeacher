import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import {
    Description,
    EmptyList,
    Informations,
    ListItem,
    Name,
    Photo,
    StyledList,
    Value,
} from "./List.style";

interface ListProps {
    teachers: Teacher[];
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.teachers.length > 0 ? (
                <StyledList>
                    {props.teachers.map((teacher) => (
                        <ListItem key={teacher.id}>
                            <Photo src={teacher.photo}></Photo>
                            <Informations>
                                <Name>{teacher.name}</Name>
                                <Value>
                                    {teacher.value.toLocaleString("en-US", {
                                        minimumFractionDigits: 2,
                                        style: "currency",
                                        currency: "USD",
                                    })}
                                </Value>
                                <Description>{teacher.description}</Description>
                                <Button sx={{ width: "70%" }}>Book Class</Button>
                            </Informations>
                        </ListItem>
                    ))}
                </StyledList>
            ) : (
                <EmptyList>No items found</EmptyList>
            )}
        </div>
    );
};

export default List;
