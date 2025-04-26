import {Container} from "@mui/material";
import {DataGrid, GridColDef, GridRowsProp} from "@mui/x-data-grid";
import {ruRU} from "@mui/x-data-grid/locales";
import {tGroup} from "../groupdata";


type GroupProps = {
    data: tGroup;
};


function GroupGrid({data}: GroupProps) {
    const rows: GridRowsProp = data;

    const columns: GridColDef[] = [

        {field: 'Группа', flex: 1},
        {field: 'Минимальная высота', flex: 0.5},
        {field: 'Максимальная высота', flex: 0.5},
        {field: 'Средняя высота', flex: 0.5}
    ];

    return (
        <Container maxWidth="lg" sx={{height: '800px', mt: '20px'}}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                showToolbar={true}
                slotProps={{
                    pagination: {
                        rowsPerPageOptions: [25, 50, 100],
                    }
                }}
            />
        </Container>
    );
}

export default GroupGrid;