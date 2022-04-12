import type {NextPage} from 'next'
import ShopLayout from "../components/layout/ShopLayout";
import {Typography} from "@mui/material";
import {initialData} from "../database/products";
import ProductList from "../components/products/ProductList";


const Home: NextPage = () => {
    return (
        <>
            <ShopLayout
                title={'Teslo-shop - HOME'}
                pageDescription={"Find the best product"}
            >
                <Typography
                    variant={"h1"}
                    component={"h1"}
                >
                    Store
                </Typography>

                <Typography
                    variant={"h2"}
                    sx={{mb: 1}}
                >
                    All products
                </Typography>

                <ProductList
                    products={initialData.products as any}
                />
            </ShopLayout>
        </>
    )
}

export default Home
