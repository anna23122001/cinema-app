// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// export default function ImgMediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345, m: '20px', flexDirection:'row' }}>
//       <div>
//         <CardMedia
//         component="img"
//         alt="cinema photo"
//         height="140"
//         image="https://i.insider.com/5720f05e9105841c008bf53e?width=750&format=jpeg&auto=webp"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           History of cinema
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           The art of making films has existed for more than a hundred years. Motion pictures developed gradually from a carnival innovation to one of the most important tools of communication and entertainment, and mass media in the 20th century.
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//       </div>
      
//       <div>
//         <CardMedia
//         component="img"
//         alt="cinema photo"
//         height="140"
//         image="https://assets-in.bmscdn.com/discovery-catalog/events/et00072466-bhvllfaqhd-landscape.jpg"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Premier 2023
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Thus, for the first thirty years of their history, movies were accompanied by live musicians and sometimes sound effects, and with a dialogue and narration presented in intertitles. 
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>

//       </div>
      
//       <CardMedia
//         component="img"
//         alt="cinema photo"
//         height="140"
//         image="https://townsquare.media/site/442/files/2020/03/best-movie-quotes.jpg?w=980&q=75"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Interesting facts
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           Thus, for the first thirty years of their history, movies were accompanied by live musicians and sometimes sound effects, and with a dialogue and narration presented in intertitles. 
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
  
//   );
// }

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function MyCard({ title, description, imageUrl }) {
  return (
    <Card sx={{ maxWidth: 345, m: '20px', flexDirection: 'row' }}>
      <div>
        <CardMedia
          component="img"
          alt="cinema photo"
          height="140"
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </div>
    </Card>
  );
}

function CardList() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <MyCard
          title="Cinemas history"
          description="The art of making films has existed for more than a hundred years movie movie movie..."
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZE2ow6YPWkg4nofqb0wjf0s29T-Ggg2-fA&usqp=CAU"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <MyCard
          title="Premier 2023"
          description="Thus, for the first thirty years of their history, movies were accompanied by live musicians..."
          imageUrl="https://assets-in.bmscdn.com/discovery-catalog/events/et00072466-bhvllfaqhd-landscape.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <MyCard
          title="Interesting facts"
          description="Thus, for the first thirty years of their history, movies were accompanied by live musicians..."
          imageUrl="https://townsquare.media/site/442/files/2020/03/best-movie-quotes.jpg?w=980&q=75"
        />
      </Grid>
    </Grid>
  );
}

export default CardList;
