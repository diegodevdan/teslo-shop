import React from 'react';
import {AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography} from "@mui/material";
import NextLink from 'next/link'
import {SearchOutlined, ShoppingCartOutlined} from "@mui/icons-material";

const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <NextLink href={'/'}>
                    <Link
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Typography variant={"h6"}>Teslo |</Typography>
                        <Typography sx={{ml: 0.5}}>Shop |</Typography>
                    </Link>
                </NextLink>

                {/*TODO FLEX*/}

                <Box flex={1} />

                <Box
                    sx={{
                        display: {xs: 'none', sm: 'block'}
                    }}
                >
                    <NextLink href={'/category/men'} passHref>
                        <Link>
                            <Button>Man</Button>
                        </Link>
                    </NextLink>

                    <NextLink href={'/category/men'} passHref>
                        <Link>
                            <Button>Woman</Button>
                        </Link>
                    </NextLink>

                    <NextLink href={'/category/men'} passHref>
                        <Link>
                            <Button>Kid</Button>
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={1}/>

                <IconButton>
                    <SearchOutlined/>
                </IconButton>

                <NextLink
                    href={'/cart'}
                    passHref
                >
                    <Link>
                        <IconButton>
                            <Badge
                                badgeContent={2}
                                color={"secondary"}
                            >
                                <ShoppingCartOutlined/>
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button>
                    Menu
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
