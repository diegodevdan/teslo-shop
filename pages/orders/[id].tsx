import React from 'react';
import ShopLayout from "../../components/layout/ShopLayout";
import {Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography} from "@mui/material";
import CartList from "../../components/cart/CartList";
import OrderSummary from "../../components/cart/OrderSummary";
import NextLink from "next/link";
import {CreditCardOffOutlined, CreditScoreOutlined} from "@mui/icons-material";

const OrderPage = () => {
    return (
        <ShopLayout
            title={'Order resumen id123'}
            pageDescription={'Order resume'}
        >
            <Typography
                variant={"h1"}
                component={"h1"}
            > Order: id123</Typography>

            {/*<Chip*/}
            {/*    sx={{my: 2}}*/}
            {/*    label={'pay pendient'}*/}
            {/*    variant={"outlined"}*/}
            {/*    color={"error"}*/}
            {/*    icon={<CreditCardOffOutlined />}*/}
            {/*/>*/}

            <Chip
                sx={{my: 2}}
                label={'Padded order'}
                variant={"outlined"}
                color={"success"}
                icon={<CreditScoreOutlined />}
            />

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
                                <h1>Pay</h1>
                                <Chip
                                    sx={{my: 2}}
                                    label={'Padded order'}
                                    variant={"outlined"}
                                    color={"success"}
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default OrderPage;
