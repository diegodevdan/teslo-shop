import ShopLayout from "../../components/layout/ShopLayout";
import {Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";

const AddressPage = () => {
    return (
        <ShopLayout
            title={'Address'}
            pageDescription={'Confirm destination address'}
        >
            <Typography variant={"h1"}>Address</Typography>

            <Grid
                container
                spacing={2}
                sx={{mt:2}}
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <TextField
                        label={'Name'}
                        variant={"filled"}
                        fullWidth
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <TextField
                        label={'Last name'}
                        variant={"filled"}
                        fullWidth
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <TextField
                        label={'Address'}
                        variant={"filled"}
                        fullWidth
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <TextField
                        label={'Second address'}
                        variant={"filled"}
                        fullWidth
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <TextField
                        label={'Cp'}
                        variant={"filled"}
                        fullWidth
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <TextField
                        label={'City'}
                        variant={"filled"}
                        fullWidth
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <FormControl fullWidth>
                        <InputLabel>Country</InputLabel>
                        <Select
                            variant={"filled"}
                            label={'Country'}
                            value={1}
                        >
                            <MenuItem value={1}>Mexico</MenuItem>
                            <MenuItem value={2}>EU</MenuItem>
                            <MenuItem value={3}>Costa rica</MenuItem>
                            <MenuItem value={4}>Argentina</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                >
                    <TextField
                        label={'Phone'}
                        variant={"filled"}
                        fullWidth
                    />
                </Grid>

            </Grid>

            <Box
                sx={{mt: 5}}
                display={"flex"}
                justifyContent={"center"}
            >
                <Button
                    color={'secondary'}
                    className={'circular-btn'}
                    size={"large"}
                >
                    Check request
                </Button>
            </Box>

        </ShopLayout>
    );
};

export default AddressPage;
