import { Link, Stack, Typography } from '@mui/material'

 const LinkComponent = () => {
  return (
    <Stack ml={8} bgcolor={"pink"}>
        <Typography variant='h4' fontStyle="oblique" fontWeight={500}>
            <Link href="#" underline='hover'>
                Taraji
            </Link>
        </Typography>
        <Typography color="red" variant='h5' component="h5">
            alehjhkjKLJLK
        </Typography>
        <Link href="#" underline='none' fontSize={120} >
            Taraji
        </Link>  
    </Stack>
  )
}
export default LinkComponent
