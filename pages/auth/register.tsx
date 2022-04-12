import NextLink from "next/link";
import AuthLayout from "../../components/layout/AuthLayout";
import {Box, Button, Grid, Link, TextField, Typography} from "@mui/material";

const RegisterPage = () => {
    return (
        <AuthLayout title={'Login'}>
            <Box
                sx={{
                    padding: '10px 20px',
                    width: 350
                }}
            >
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography
                            variant={"h1"}
                            component={"h1"}
                        >Create account
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            label={'Full Name'}
                            variant={"filled"}
                            fullWidth
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            label={'Email'}
                            variant={"filled"}
                            fullWidth
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            label={'Password'}
                            variant={"filled"}
                            fullWidth
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                    >
                        <Button
                            color={'secondary'}
                            className={'circular-btn'}
                            size={'large'}
                            fullWidth
                        >
                            Sign in
                        </Button>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        display={"flex"}
                        justifyContent={"end"}
                    >
                        <NextLink href={'/auth/login'}>
                            <Link underline={"always"}>
                                You already have have account?
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    );
};

export default RegisterPage;
