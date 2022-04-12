import React from 'react';
import ShopLayout from "../../components/layout/ShopLayout";
import {Box, Button, Card, CardContent, Divider, Grid, Link, Typography} from "@mui/material";
import CartList from "../../components/cart/CartList";
import OrderSummary from "../../components/cart/OrderSummary";
import NextLink from "next/link";

const SummaryPage = () => {
    return (
        <ShopLayout
            title={'Order resumen'}
            pageDescription={'Order resume'}
        >
            <Typography
                variant={"h1"}
                component={"h1"}
            > Order Resume </Typography>

            <Grid container>
                <Grid
                    item
                    xs={12}
                    sm={7}
                >
                    <CartList />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={5}
                >
                    <Card className={'summary-card'}>
                        <CardContent>
                            <Typography variant={"h2"}>Resume (3 products)</Typography>
                            <Divider sx={{my: 1}}/>

                            <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                            >
                                <NextLink href={'/checkout/address'} passHref>
                                    <Link underline={"always"}>
                                        Edit
                                    </Link>
                                </NextLink>
                            </Box>

                            <Typography variant={'subtitle1'}>Delivery address</Typography>
                            <Typography>Diego herrera</Typography>
                            <Typography>guadalupe escobedo 205</Typography>
                            <Typography>alma obrera 98090</Typography>
                            <Typography>Mexico</Typography>
                            <Typography>492 238 11 86</Typography>
                            <Divider sx={{my: 1}}/>

                            <Box
                                display={"flex"}
                                justifyContent={"end"}
                            >
                                <NextLink href={'/cart'} passHref>
                                    <Link underline={"always"}>
                                        Edit
                                    </Link>
                                </NextLink>
                            </Box>


                            <OrderSummary />

                            <Box sx={{mt: 3}}>
                                <Button
                                    color={'secondary'}
                                    className={'circular-btn'}
                                    fullWidth
                                >
                                    Confirm order
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default SummaryPage;
