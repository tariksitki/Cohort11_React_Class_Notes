

/// ************  Önemli Not:  Bu sayfada yazdigimiz kodalri birinci yöntem ile yazdik. yani tüm kodlar tek dosyada. Ikinci yöntem ve best practice olarak; yup ve formik e ait kodlari farkli dosyalarda yazdik. o kodlar da signUpPage de. Eger kodalrimiz uzun ise harici bir sayfaya koymak daha iyi bir yöntem.

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik, Form } from "formik"; /// component seklinde kullanim icin Formik
// Bu sayfada kullanilan Form un hangi form oldugunu nasil anlariz. Buradaki import kismindan. eger kücük f ile basliyorsa zaten html tag i dir.
// ayni sayfa da hem mui den hem de formik den Form kullanmak istersek import asamasinda birisinin ismi degistirilir.
import * as Yup from "yup";
// mui library nin boyutu cok büyük oldugu icin; orada her bir veriyi tek tek import ediyoruz. ama burada hepsini import ettik.

const LoginPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: "10rem", textAlign: "center" }}>
      <Avatar
        sx={{
          backgroundColor: "primary.main",
          m: "auto",
          width: 60,
          height: 60,
        }}
        // sizes="100px"
      >
        <FaLock size="40" />
      </Avatar>
      <Typography variant="h4" align="center" mb={4} color="secondary.light">
        Login
      </Typography>

      {/* Burada form kullanilmamis normal bir div kullanilmis. Gönderme islemi icin de button un type i submit yapilmis. */}

      {/* Formik in parametreleri ilk acilis tagi icinde verilir  */}
      <Formik
        initialValues={{ fullName: "", email: "", password: "" }}
        // validation da eger max ve required gibi verilerin icini doldurmazsak default kendisi doldurur.
        validationSchema={Yup.object().shape({
          fullName: Yup.string()
            .max(20, "It must be max 20 Characters")
            .required("It must be filled"),
          email: Yup.string()
            .email("Lütfen gecerli email adresi giriniz!")
            .required(),
          password: Yup.string()
            .min(8)
            .max(16)
            .required()
            .matches(/\d+/, "Sifre rakam icermelidir.")
            .matches(/[a-z]+/, "Sifre Kücük harf icermelidir")
            .matches(/[A-Z]+/, "Sifre Büyük Hrf icermelidir.")
            .matches(/[!,."§$%&/(){}?]+/, "Sifre Özel karakter icermelidir")
        })}
        onSubmit={(values, actions) => {
          alert(`${values.fullName} ${values.email} ${values.password}`);
          actions.resetForm();
          actions.setSubmitting(false);
          // submit islemi basladiginda formik otomatik olarak submitting i true ya kurar. Biz de submit islemi bittikten sonra manuel olarak false a kuruyoruz. Buradaki setSubmitting i, loading cemberi gösterilmesinde yada submit butonunu disable yapma da kullaniyoruz.
        }}
      >
        {/* Normal form kullaniminda state leri kendimiz elimiz ile yaziyorduk. Burada ise state ler bu state leri degistirecek onChange ler otomatik yazilmis durumda. Ancak bunlari bir sekilde tanimlayip kullanmamiz gerekir. Bunun icin komple Form elemntini bir callback func icinde cagirioruz. Bu func önceden tanimlanmis olan tüm degerleri ve func lari parametre olarak alir.  */}
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <TextField
                label="Full Name"
                name="fullName"
                id="fullName"
                type="text"
                variant="outlined"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.fullName && errors.fullName}
                error={touched.fullName && Boolean(errors.fullName)}
                // helpertext normal de mui de textField a ait bir özellik. Burada diyoruz ki; eger fullname inputuna dokunulduysa ve bu input da error varsa o zaman helpertext i göster.
                // eger fullname inputunda bir error olursa bu durumda true olacak ve error property sinin degeri true olacak. Ve error true oldugu icin helpertext de calisacak.
                // helpertext kisminda boolean kullanmadik. Cünkü burada bir hata mesaji verdirecegiz. Buradaki hata mesajinin icerigini, validation kisminda yazacagiz.
                // validation kisminda girmis oldugumuz hata mesaji; burada errors.fullName icinde yer alacaktir.
                // blur kullanma sebebimiz su:  eger kullanici bir input a tiklarsa ve doldurmaktan vazgecerse sumbit tusuna basmasina gerek kalmadan hata versin
                // hata oldugunda input larin kirmizi olma sebebi; error property si
              />
              <TextField
                label="Email"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
              />
              <TextField
                label="Password"
                name="password"
                id="password"
                type="password"
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
              />

              {/* Button a coor verilmedigi icin rengi primary olur */}
              <Button type="submit" variant="contained" size="large">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginPage;
