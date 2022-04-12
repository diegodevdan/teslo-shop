import React from 'react';
import {Grid, Typography} from "@mui/material";

const OrderSummary = () => {
    return (
        <Grid container>
            <Grid
                item
                xs={6}
            >
                <Typography># Products</Typography>
            </Grid>

            <Grid
                item
                xs={6}
                display={"flex"}
                justifyContent={"end"}
            >
                <Typography>3 items</Typography>
            </Grid>

            <Grid
                item
                xs={6}
            >
                <Typography>Subtotal</Typography>
            </Grid>

            <Grid
                item
                xs={6}
                display={"flex"}
                justifyContent={"end"}
            >
                <Typography>$156.34</Typography>
            </Grid>

            <Grid
                item
                xs={6}
            >
                <Typography>TAX</Typography>
            </Grid>

            <Grid
                item
                xs={6}
                display={"flex"}
                justifyContent={"end"}
            >
                <Typography>$45.98</Typography>
            </Grid>

            <Grid
                item
                xs={6}
                sx={{mt: 2}}
            >
                <Typography variant={"subtitle1"}>Total: </Typography>
            </Grid>

            <Grid
                item
                xs={6}
                sx={{mt: 2}}
                display={"flex"}
                justifyContent={"end"}
            >
                <Typography variant={"subtitle1"}>$1 chillion de dolares</Typography>
            </Grid>

        </Grid>
    );
};

export default OrderSummary;
