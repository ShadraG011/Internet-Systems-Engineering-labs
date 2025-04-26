import {BarChart} from '@mui/x-charts/BarChart';
import Container from '@mui/material/Container';
import {tGroup} from "../groupdata";
import {axisClasses, LineChart} from "@mui/x-charts";
import React, {useEffect, useMemo, useState} from "react";
import SettingChart from "./SettingChart";

type GroupProps = {
    data: tGroup;
};


function GroupChart({data}: GroupProps) {
    const chartSetting = {
        yAxis: [
            {
                label: 'Высота(м)',
            },
        ],
        height: 500,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translate(-10px, 0)',
            },
        },

    };

    const [series, setSeries] = React.useState({
        'Максимальная высота': true,
        'Средняя высота': false,
        'Минимальная высота': false,
    });

    const [value, setValue] = useState<string>("value");

    const [isBar, setIsBar] = useState(true);

    let seriesY = Object.entries(series)
        .filter(item => item[1])
        .map(item => {
            return {"dataKey": item[0], "label": item[0]}
        });

    useEffect(() => {
        seriesY.length > 1 ? setValue("") : setValue("value");
    }, [seriesY])

    return (
        <Container maxWidth="lg">
            {isBar && <BarChart
                dataset={data}
                xAxis={[{scaleType: 'band', dataKey: 'Группа'}]}
                series={[
                    {dataKey: 'Минимальная высота', label: 'Минимальная высота'},
                    {dataKey: 'Средняя высота', label: 'Средняя высота'},
                    {dataKey: 'Максимальная высота', label: 'Максимальная высота'},
                ]}
                series={seriesY}
                slotProps={{
                    legend: {
                        position: {vertical: 'bottom', horizontal: 'center'},
                        padding: 0,
                    },
                }}
                barLabel={value}
                {...chartSetting}
            />}
            {!isBar && <LineChart
                dataset={data}
                xAxis={[{scaleType: 'band', dataKey: 'Группа'}]}
                series={seriesY}
                slotProps={{
                    legend: {
                        position: {vertical: 'bottom', horizontal: 'center'},
                        padding: 0,
                    },
                }}
                {...chartSetting}
            />}
            <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
        </Container>
    )
}


export default GroupChart;