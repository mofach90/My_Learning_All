import { Box, ImageList, ImageListItem, ImageListItemBar, Stack } from "@mui/material";

const ImageListe = () => {
  return (
    <Stack spacing={10} padding={5}>
      <ImageList variant="woven" gap={30} sx={{ width: 500, height: 500 }} cols={3} rowHeight={200}>
        {ImagList.map((item,index) => (
          <ImageListItem key={index} sx={{p:1, backgroundColor:"white"}} cols={1} rows={1}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <Box sx={{ bgcolor:"blue", width: 500, height: 500, overflowY:"scroll" }}>
        <ImageList variant="masonry" gap={3}  cols={3} >
          {ImagList.map((item,index) => (
            <ImageListItem key={index} sx={{p:1, backgroundColor:"white"}} cols={1} rows={1}>
              <img src={item.img} alt={item.title} loading="lazy" />
              <ImageListItemBar title={item.title} position="top" sx={{color:"red"}}/>
              <ImageListItemBar title={item.title} position="below" sx={{color:"red"}}/>
            </ImageListItem>
          ))}
        </ImageList>        
      </Box>
    </Stack>
  );
};

const ImagList = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/440px-Maradona-Mundial_86_con_la_copa.JPG",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/440px-Maradona-Mundial_86_con_la_copa.JPG",
    title: "Diego Maradona",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/440px-Maradona-Mundial_86_con_la_copa.JPG",
    title: "Diego Maradona",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/440px-Maradona-Mundial_86_con_la_copa.JPG",
    title: "Diego Maradona",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/440px-Maradona-Mundial_86_con_la_copa.JPG",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/440px-Maradona-Mundial_86_con_la_copa.JPG",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/440px-Maradona-Mundial_86_con_la_copa.JPG",
    title: "Diego Maradona",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/440px-Maradona-Mundial_86_con_la_copa.JPG",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Diego Maradona",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/440px-Maradona-Mundial_86_con_la_copa.JPG",
    title: "Diego Maradona",
  },
];

export default ImageListe;
