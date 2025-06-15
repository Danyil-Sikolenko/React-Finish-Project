import Button from "@mui/material/Button";


function CustomButton ({
    variant="contained",
    sx = {},
    color = 'primary',
    onClick = () => {},
    children
}) {
    return(
        <Button variant={variant} onClick={onClick} color={color} sx={sx}>{children}</Button>
    )
}

export default CustomButton