import {FC} from "react";
import {ISize} from "../../interfaces";
import {Box, Button} from "@mui/material";

interface Props {
    selectedSize?: ISize,
    sizes: ISize []
}

const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
    console.log(selectedSize)
    return (
        <Box>
            {
                sizes.map(size => (
                    <Button
                        key={size}
                        size={'small'}
                        color={selectedSize === selectedSize ? "primary" : "info"}
                    >
                        {size}
                    </Button>
                ))
            }
        </Box>
    );
};

export default SizeSelector;
