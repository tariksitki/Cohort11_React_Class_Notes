import * as React from "react";
import { Button, Divider, Stack, Typography } from "@mui/material";
// import LoadingButton from "@mui/lab/LoadingButton";
// import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import { Box, Container } from "@mui/system";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

const TypoButtons = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const handleTypography = (e) => {
    console.log(e.target.children);
  };
  return (
    <>
      <Container sx={{ border: "2px solid red" }} maxWidth="300px">
        <Button variant="contained">CONTAINED</Button>
        {/* <Button loading variant="text">Text</Button>
      <Button loading variant="outlined">Outlined</Button> */}

        {/* children prob u element in altinda bulunan child elementi gösterir */}
        <Typography
          variant="h3"
          component="div"
          align="center"
          children
          onClick={handleTypography}
          sx={{ width: "600px", background: "grey" }}
          noWrap
          color="error.dark"
        >
          Typography variant h3 component div Typography variant h3 component
          div Typography variant h3 component div
          <p>children</p>
        </Typography>

        <br />

        <Typography variant="body1" component="p" align="center">
          Paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Recusandae molestiae est, esse odit natus cum repellendus consequatur
          nobis quos aspernatur numquam suscipit nisi nostrum voluptatem nihil
          eaque explicabo distinctio inventore.
        </Typography>

        <br />
        <Typography variant="body2" align="center">
          Paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Recusandae molestiae est, esse odit natus cum repellendus consequatur
          nobis quos aspernatur numquam suscipit nisi nostrum voluptatem nihil
          eaque explicabo distinctio inventore.
        </Typography>

        <br />

        <Typography
          variant="button"
          align="center"
          sx={{ display: "inline-block", mt: 5 }}
        >
          Paragraph Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Recusandae molestiae est, esse odit natus cum repellendus consequatur
          nobis quos aspernatur numquam suscipit nisi nostrum voluptatem nihil
          eaque explicabo distinctio inventore.
        </Typography>
      </Container>
      <br /> <br />
      {/* Flex Kullanimi  */}
      <Container>
        <Box
          sx={{
            padding: 3,
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Button variant="contained" startIcon={<SaveIcon />}>
            SAVE
          </Button>

          <Button variant="outlined" endIcon={<DeleteIcon />}>
            DELETE
          </Button>

          <Button variant="outlined">SUBMIT</Button>
        </Box>
      </Container>
      <br />
      <br />
      {/* Stack Kullanimi (stack de default yön column) */}
      <Container>
        <Stack spacing={5}>
          <Button variant="contained" startIcon={<SaveIcon />}>
            SAVE
          </Button>

          <Button variant="outlined" endIcon={<DeleteIcon />}>
            DELETE
          </Button>

          <Button variant="outlined">SUBMIT</Button>
        </Stack>
      </Container>
      <br />
      <br />
      <br />
      <br />
      {/* divider her bir element arasina cizgi koyar */}
      <Container>
        <Stack
          // spacing={5}
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Button variant="contained" startIcon={<SaveIcon />}>
            SAVE
          </Button>

          <Button variant="outlined" endIcon={<DeleteIcon />}>
            DELETE
          </Button>

          <Button variant="outlined">SUBMIT</Button>
        </Stack>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default TypoButtons;

// noWrap kullanmak icin elementin bir width inin olmasi gerekir. eger bu genisligi asarsa element 3 nokta ile kesilir ve devam etmez.

// GutterBottom  true ise element alttan marginli olur.

// primary ve error calisir. success warning calismiyor. ama color seceneginde normal yellow gibi renkler yazabiliyoruz.

// inline styling sx ile verilir. key value seklinde. burada backgroundColor calismiyor background ile oluyor.

// material ui react native ile kullanilabilir.

// eger bir component sx i destekliyorsa, burada tüm styling ler verilebilir.

// bgcolor, background ve backgroundColor 3 secenek

// typography de variant i button yaparsak elementi span yapar ve tüm harfleri büyük yapar. body yaparsak da p elementi yapar ve normal harf.

// span elementine margin verebilmek icin display inline block yada block

// bootstrap ile buranin brekpointleri farkli. mesela container elementinde maxWidth verdigimizde, su sekilde calisir. mesela lg verdigimizde large ve altinda responsive olarak calisir. daha yukarisinda responsive olmaz. ayrica lg verdigimizde container boyutu large olur. sm verdigimizde sm olur.

// eger container a xl verirsek fluid gibi davranir neredeyse

// container daki maxWidth pprobu ile neredeyse tüm responsive islmelerimizi görebiliirz.

// Box stillendirilmis div dir. mesela 3 tane button umuz var ve biz bunlari alt alta dizmek istiyoruz. Bu durumda bunlarin hepsini box icine aliriz ve grid yada flex ile stillendirebiliriz.
// Box in sadece 2 tane prop u var. birincisi sx ikinci component. component ile dom da nasil görünmesi gerektigini belirliyoruz. Box in default u div dir.

// box a alternatif olarak stack de kullanilabilir. grid 2 boyutlu stack tek boyutla ilgilenir.

//
