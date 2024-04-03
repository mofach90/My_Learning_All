import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    createTheme,
} from "@mui/material";
import { lime, purple } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});
const LearningMui = () => {
  //   const [value, setValue] = useState<String[]>([]);
  //   console.log({ value });
  //   const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const value = event.target.value;
  //     console.log("Value inside: ", value);

  //     setValue(typeof value === "string" ? value.split(",") : value);
  //   };

  //   const [checked, setChecked] = useState(false);
  //   console.log({ checked });

  //   const handelCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setChecked(event.target.checked);
  //   };

  //   const [format, setFormat] = useState<String>("");
  //   console.log("format: ", format);
  //   const HandleOnChange = (
  //     e: React.MouseEvent<HTMLElement>,
  //     format: String
  //   ) => {
  //     setFormat(format);
  //   };
  //   const [ratingValue, setRatingValue] = useState<number | null>(0);
  //   const handleRating = (
  //     event: React.SyntheticEvent,
  //     ratingValue: number | null
  //   ) => {
  //     setRatingValue(ratingValue);
  //   };
  //   console.log({ ratingValue });

  //   type Skill = {
  //     id: number;
  //     label: string;
  //   };
  //   const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];
  //   const [skillName, setSkillName] = useState<Skill | null>(null);
  //   useEffect(() => console.log({ skillName }), [skillName]);
  //   const skillOption = skills.map((skill, index) => ({
  //     id: index + 1,
  //     label: skill,
  //   }));
  //   console.log({ skillOption });

  //   const handleSkillName = (
  //     event: SyntheticEvent<Element, Event>,
  //     skillName: Skill | null
  //   ) => {
  //     setSkillName(skillName);
  //   };

  return (
    <Box style={{ backgroundColor: "" }} width={"100%"}>
      <Typography fontSize={"2rem"}>
        ***************************************************
      </Typography>
      {/* <Typography variant="h1" color="warning.light">h1 </Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h5" color="secondary.light">h5 color="secondary.light"</Typography>
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <Typography variant="body1" color="primary.light">
        Body 1 color="primary.light" paragraph paragraph paragraph paragraph paragraph paragraph
        paragraph paragraph paragraph paragraph paragraph paragraph paragraph
        paragraph paragraph paragraph paragraph paragraph paragraph paragraph
        paragraph paragraph paragraph paragraph paragraph paragraph{" "}
      </Typography> */}
      {/* <Button variant="text" sx={{ ml: 3 }} >
        Text Button
      </Button>
      <Button variant="text" sx={{ ml: 3 }} href="https://www.google.com">
        go to google
      </Button>
      <Button variant="contained" size="small" sx={{ml:3}}>
        contained
      </Button>
      <Button variant="contained" size="medium" sx={{ml:3}}>
        contained
      </Button>
      <Button variant="contained" size="large" sx={{ml:3}}>
        contained
      </Button>
      <Button variant="contained" size="large" sx={{ml:3}} startIcon={<WindowIcon />}>
        contained
      </Button>
      <Button color="success" variant="contained" size="small" sx={{margin:1}} endIcon={<WindowIcon />}>
        contained
      </Button>
      <Button color="warning" variant="contained" size="small" sx={{margin:1}} endIcon={<WindowIcon />}>
        contained
      </Button>
      <IconButton aria-label="delete" size="large" color="warning" sx={{backgroundColor:"blue", ":hover":{backgroundColor:"green"}}}><WindowIcon/></IconButton> */}
      {/* <ButtonGroup variant="text" orientation="vertical" color="warning">
      <Button color="secondary">Bonjour</Button>
      <Button>bonsoire</Button>
      <Button>Bonapresmidi</Button>
   </ButtonGroup>
   <ButtonGroup variant="text" orientation="horizontal" color="success">
      <Button color="secondary">Bonjour</Button>
      <Button startIcon={<WindowIcon/>}>bonsoire</Button>
      <Button>Bonapresmidi</Button>
      <IconButton color="warning"><WindowIcon/></IconButton>
   </ButtonGroup> */}
      {/* <ToggleButtonGroup
        color="success"
        value={format}
        onChange={HandleOnChange}
        aria-label="group button"
        exclusive
      >
        <ToggleButton value={"Bold"} aria-label="Bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value={"Italic"} aria-label="Italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value={"taraji"} aria-label="Taraji">
          <FormatUnderlineIcon />
        </ToggleButton>
      </ToggleButtonGroup> */}
      {/* <TextField
        label="Password"
        helperText={!value ? "Required Field" : "Setup your Pass"}
        type="Password"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        required
        error={!value}
        variant="outlined"
        sx={{ margin: 3 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" variant="outlined">
              <IconButton>
                <VisibilityIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      /> */}
      {/* <Box width={250}>
        <TextField onChange={handelChange} value={value} InputProps={{
            startAdornment: <InputAdornment position="start"><FlagIcon/></InputAdornment>
        }} SelectProps={{multiple:true}} fullWidth select label="Select Country" sx={{ margin: 6 }}>
          <MenuItem value="Senegal">Senegal</MenuItem>
          <MenuItem value="Egypte">Egypte</MenuItem>
          <MenuItem value="Marocco">Marroco</MenuItem>
        </TextField>
      </Box> */}
      {/* <Box width={300}>
        <FormControl sx={{ margin: 3 }} color="warning">
          <FormLabel color="secondary" id="taraji-label">Taraji Dawla</FormLabel>
          <RadioGroup color="secondary" onChange={handelChange} name="taraji" aria-labelledby="taraji-label">
            <FormControlLabel control={<Radio />} label="one" value='2-3' sx={{color:"red"}}/>
            <FormControlLabel control={<Radio />} label="two" value="two" sx={{color:"red"}}/>
            <FormControlLabel control={<Radio />} label="three" value="three" sx={{color:"red"}}/>
          </RadioGroup>
        </FormControl>
      </Box> */}
      {/* <Box width={300}>
        <FormControlLabel
          label="Rast"
          sx={{ color: "red", margin: 3 }}
          control={<Checkbox checked={checked} onChange={handelCheck}/>}
        />
      </Box> */}
      {/* <Box width={300} sx={{ backgroundColor: checked ? "yellow" : "green" }}>
        <FormControlLabel
          label="Dark mode"
          sx={{ margin: 6, color: "black" }}
          control={
            <Switch color="warning" checked={checked} onChange={handelCheck} />
          }
        />
      </Box> */}
      {/* <Box width={300}>
        <Rating
          sx={{ margin: 6 }}
          value={ratingValue}
          onChange={handleRating}
          icon={<FavoriteIcon />}
          emptyIcon={<FavoriteBorderIcon />}
          precision={0.1}
        />
      </Box> */}
      {/* <Box width={600} height={600}>
        <Autocomplete
          options={skillOption}
          value={skillName}
          onChange={handleSkillName}
          sx={{ margin: 3 }}
          renderInput={(params) => (
            <TextField
              helperText="Helpertext"
              {...params}
              label="skills"
              sx={{ width: 300 }}
            />
          )}
        />
      </Box> */}
      {/* <Stack
        bgcolor={"primary.light"}
        spacing={2}
        border={1}
        height={500}
        p={5}
        direction={"column-reverse"}
        divider={<Divider sx={{border:3, borderColor:"red"}} />}
      >
        <Box p={2} bgcolor={"primary.main"} width={"30%"} height={"30%"} border={1} borderRadius={"10%"}>
          Box one
        </Box>
        <Box p={2} bgcolor={"secondary.main"} width={"30%"} height={"30%"} border={1} borderRadius={"10%"}>
          Box two
        </Box>
      </Stack> */}
      {/* <Grid
        container
        bgcolor={"darkgray"}
        p={2}
        direction={"row"}
        rowSpacing={4}
        columnSpacing={2}
        columns={1}
      >
        <Grid item xs={6}>
          <Box bgcolor={"blue"} border={1} p={1}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box bgcolor={"blue"} border={1} p={1}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box bgcolor={"blue"} border={1} p={1}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"blue"} border={1} p={1}>
            Item 3
          </Box>
        </Grid>
      </Grid> */}
      {/* <Paper sx={{bgcolor:"white", p:3}}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} bgcolor={"orange"}>
        <Grid item xs={6}>
          <Box border={1}>1</Box>
        </Grid>
        <Grid item xs={6} >
          <Box border={1}  alignContent={"center"}>2</Box>
        </Grid>
        <Grid item xs={6}>
          <Box border={1}>3</Box>
        </Grid>
        <Grid item xs={6}>
          <Box border={1}>4</Box>
        </Grid>
      </Grid>
      <Typography marginTop={2} variant="h4">This is a Table , did you understand that </Typography>
    </Paper> */}
      {/* <Card variant="elevation" sx={{ width: 500 }}>
        <CardMedia
          component="img"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          sx={{ width: "100%" }}
          height="300"
        />
        <CardMedia
          component="iframe"
          sx={{ width: "100%" }}
          height="300"
          src="https://www.youtube.com/embed/nZKlPtQqqgQ?si=JxNLHhbfZr1p-BMy"          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        <CardContent>
          <Typography variant="body1">
            {" "}
            hello hello hello hello hello hello hello hello hello hello hello
            hello hello hello hello hello hello hello hello hello{" "}
          </Typography>
          <Avatar>M</Avatar>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" sx={{ boxShadow: 0.2 }}>
            go there
          </Button>
        </CardActions>
      </Card> */}
    </Box>
  );
};

export default LearningMui;
