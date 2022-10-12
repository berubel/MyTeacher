import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { FormatterService } from "../../services/FormatterService";
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
                                    {FormatterService.monetaryValue(teacher.value)}
                                </Value>
                                <Description>{FormatterService.limitText(teacher.description, 200)}</Description>
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
