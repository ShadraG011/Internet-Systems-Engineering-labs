import Navbar from "../components/Navbar";
import GroupGrid from "./components/GroupGrid";
import {countries, types, years} from "./groupdata";
import {useEffect, useState} from "react";
import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import GroupChart from "./components/GroupChart";

type tSelect = "Страна" | "Год" | "Тип";

function Chart() {
    const [group, setGroup] = useState<tSelect>("Страна");
    const [groupData, setGroupData] = useState(countries);


    const handleChange = (event: SelectChangeEvent) => {
        setGroup(event.target.value as tSelect);
    }


    useEffect(() => {
        if (group === "Страна") setGroupData(countries);
        else if (group === "Год") setGroupData(years)
        else if (group === "Тип") setGroupData(types)
    }, [group])

    return (
        <div>
            <Navbar active="3"/>
            <Box sx={{width: "200px", m: "auto", mb: "14px"}}>
                <FormControl fullWidth>
                    <InputLabel> Группировать по </InputLabel>
                    <Select
                        id="select-group"
                        value={group}
                        label="Группировать по"
                        onChange={handleChange}
                    >
                        <MenuItem value="Страна"> Стране </MenuItem>
                        <MenuItem value="Год"> Году </MenuItem>
                        <MenuItem value="Тип"> Типу </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <GroupChart data={groupData}/>
            <GroupGrid data={groupData}/>
        </div>
    )
}

export default Chart;