import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import loadingGif from '../assets/loading.gif';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { clearNewsList, getNews } from '../features/newsSlice';

const News = () => {
      // bu sekilde yazarsak global state deki tüm reducer lar gelir. Bu nedenle biz asagida destructure ederek alacagiz:
  // const globalState = useSelector(state => state);
  // console.log(globalState);

  const {newsList, loading} = useSelector(state => state.news)
  // console.log(newsList);
  // console.log(loading);

  const dispatch = useDispatch();

    // verimiz api den geldigi icin, api den veri cekme isleminin tetiklenmesi useEffect icerisinde yapiliyor. bu tetiklemeyi yapmazsak ekranda sürekli olarak salyangoz görünecek ve veri gelmeyecektir.
    // user tarafindan dispatch yapildiktan sonra isleyis nasil oluyor bunu newsLice dosyasinda yazdim.

  useEffect(() => {
    dispatch(getNews());

      // bu kisim component will unmount kismi. logout yaptigimizda news component iöldügü icin api den gelmis olan verilerimizi de sileriz.
      // neden verileri temizliyoruz. cünkü api den gelen veriler büyük miktarda veriler olabilir. Bu nedenle user in hafizasinda fazla yer kaplamamak icin siliyoruz.
    return () => {
      dispatch(clearNewsList());
    }
  }, []);

  return (
    <>
      {loading && <img src={loadingGif} alt="loadingGif" style={{width : "300px"}} />}

      {!loading && (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {newsList.map((item, index) => (
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={item?.urlToImage}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" href={item?.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
