import {
    DataGrid,
    GridRowsProp,
    GridColDef
} from '@mui/x-data-grid';
import buildings from "../table";
import {Container} from "@mui/material";
import {ruRU} from "@mui/x-data-grid/locales";


function BuildingsGrid() {
    const rows: GridRowsProp = buildings;

    const columns: GridColDef[] = [
        {field: 'Название', flex: 1},
        {field: 'Тип', flex: 0.5},
        {field: 'Страна', flex: 0.5},
        {field: 'Город', flex: 0.5},
        {field: 'Год'},
        {field: 'Высота'},
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

export default BuildingsGrid;