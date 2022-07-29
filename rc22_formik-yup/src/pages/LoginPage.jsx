import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";

/// Note: clean code icin bu sayfadaki kod lari SignUpPage de bölünmüs olarak yazdik. 

// bir sayfa icinde hem mui den hem de formik den form kullanmak icin import asamasinda ikisinden birinin ismi degistirilmesi gerekir.

// mui den hersey tek tek import edilir. yup da ise * ile hepsi import edilir.

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
        sizes="100px"
      >
        <FaLock size="40" />
      </Avatar>
      <Typography variant="h4" align="center" mb={4} color="primary.light">
        Login
      </Typography>

      <Formik
        initialValues={{ fullName: "", email: "", password: "" }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string()
            .max(20, "Must be 20 or less characters")
            .required("Full name girilmek zorunda"),

          email: Yup.string()
            .email("Lütfen gecerli bir email adresi giriniz")
            .required("Lütfen email kismini bos birakmayiniz"),

          password: Yup.string()
            .min(8, "Sifre en az 8 Karakter olmali")
            .max(16, "Sifre en fazla 16 karakter icermelidir.")
            .required()
            .matches(/\d+/, "Sifre rakam icermelidir.")
            .matches(/[a-z]+/, "Sifre Kücük Harf icermeli")
            .matches(/[A-Z]+/, "Sifre Büyük Harf icermeli")
            .matches(/[!,?<>%&§$#+-.]+/, "Sifre Özel karakter icermelidir.")
          // biz required icin text girmedik. kendisi default text yazar.
        })}
        onSubmit={(values, actions) => {
          // iki parametre alir.
          alert(`
          fullname = ${values.fullName}
          email = ${values.email}
          password = ${values.password}
          `);
          actions.resetForm();
          actions.setSubmitting(false); // submit edildiginde false a kurar
        }}
      >
        {({ values, handleChange, errors, touched, handleBlur }) => (
          <Form>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <TextField
                label="Full Name"
                name="fullName"
                id="fullName"
                type="text"
                variant="outlined"
                onBlur={handleBlur}
                value={values.fullName}
                onChange={handleChange}
                helperText={touched.fullName && errors.fullName}
                error={touched.fullName && Boolean(errors.fullName)}
              />
              <TextField
                label="Email"
                name="email"
                id="email"
                type="email"
                variant="outlined"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                error={touched.email && Boolean(errors.email)}
              />
              <TextField
                label="password"
                name="password"
                id="password"
                type="password"
                variant="outlined"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                helperText={touched.password && errors.password}
                error={touched.password && Boolean(errors.password)}
              />
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
