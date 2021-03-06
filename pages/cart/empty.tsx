import NextLink from "next/link";
import ShopLayout from "../../components/layout/ShopLayout";
import {Box, Link, Typography} from "@mui/material";
import React from "react";
import {RemoveShoppingCartOutlined} from "@mui/icons-material";


const EmptyPage = () => {
    return (
        <ShopLayout
            title={'Empty cart'}
            pageDescription={'No articles here'}
        >
            <Box
                sx={{
                    flexDirection: {xs: 'column', sm: 'row'}
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={'calc(100vh - 200px)'}
            >
                <RemoveShoppingCartOutlined sx={{fontSize: 100}}/>
                <Box>
                    <Typography>You cart is empty</Typography>
                    <NextLink href={'/'} passHref >
                        <Link typography={'h4'} color={'secondary'}>Return</Link>
                    </NextLink>
                </Box>
            </Box>

        </ShopLayout>
    );
};

export default EmptyPage;
