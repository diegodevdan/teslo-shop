import NextLink from "next/link";
import AuthLayout from "../../components/layout/AuthLayout";
import {Box, Button, Grid, Link, TextField, Typography} from "@mui/material";

const LoginPage = () => {
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
                        >Login
                        </Typography>
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
                        <NextLink href={'/auth/register'}>
                            <Link underline={"always"}>
                                You don't have account?
                            </Link>
                        </NextLink>
                    </Grid>
                </Grid>
            </Box>
        </AuthLayout>
    );
};

export default LoginPage;
