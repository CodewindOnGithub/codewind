import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import styles from './home.module.css';

export const AppHome = () => {
  return (
    <div className={styles.page}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          className={styles['card-media']}
          sx={{ height: 140 }}
          image='https://cdn-icons-png.flaticon.com/512/4697/4697260.png'
          title='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            My ToDo's
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Manage your daily tasks
          </Typography>
        </CardContent>
        <CardActions>
          <Button href='/todos' size='small'>
            Add Todo
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default AppHome;
