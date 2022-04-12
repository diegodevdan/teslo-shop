import NextLink from "next/link";
import ShopLayout from "../../components/layout/ShopLayout";
import {Chip, Grid, Link, Typography} from "@mui/material";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 100},
    {field: 'fullName', headerName: 'Full Name', width: 300},
    {
        field:'paid',
        headerName: 'Paid out',
        description: 'Show information',
        width: 200,
        renderCell: (params:GridValueGetterParams) => {
            return (
                params.row.paid
                ? <Chip color={"success"} label={'Paid out'} variant={'outlined'}/>
                : <Chip color={"error"} label={'No paid out'} variant={'outlined'}/>
            )
        }
    },
    {
        field:'order',
        headerName: 'See order',
        width: 200,
        sortable: false,
        renderCell: (params:GridValueGetterParams) => {
            return (
                <NextLink
                    href={`/orders/${params.row.id}`}
                    passHref
                >
                    <Link underline={"always"}>
                        See order
                    </Link>
                </NextLink>
            )
        }
    }
];

const rows = [
    {id: 1, paid: true, fullName: 'Diego Herrera'},
    {id: 2, paid: false, fullName: 'El dan'},
    {id: 3, paid: true, fullName: 'NOrvan no c'},
    {id: 4, paid: true, fullName: 'FIerro pariente'},
    {id: 5, paid: false, fullName: 'Elver galarga'},
    {id: 6, paid: true, fullName: 'YO k c'},
]

const HistoryPage = () => {
    return (
        <ShopLayout
            title={'Order history'}
            pageDescription={'Client order history'}
        >
            <Typography
                variant={"h1"}
                component={"h1"}
            >
                Order history
            </Typography>


            <Grid container>
                <Grid
                    item
                    sx={{
                        height:650,
                        width: '100%'
                    }}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default HistoryPage;
