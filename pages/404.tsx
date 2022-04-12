import React from 'react';
import ShopLayout from "../components/layout/ShopLayout";
import {Box, Typography} from "@mui/material";

const Custom404 = () => {
    return (
        <ShopLayout
            title={'Page not found'}
            pageDescription={'Nothing here'}
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
                <Typography
                    variant={"h1"}
                    component={"h1"}
                    fontSize={80}
                    fontWeight={200}
                >
                    404 |
                </Typography>

                <Typography
                    marginLeft={2}
                >
                    No article here
                </Typography>

            </Box>

        </ShopLayout>
    );
};

export default Custom404;
