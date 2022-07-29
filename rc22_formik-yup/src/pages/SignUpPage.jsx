import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { signUpSchema } from "../components/signUpSchema";
import SignUpForm from "../components/SignUpForm";

/// *************  Bu sayfada yaptiklariiz LoginPage nin aynisi sadece oradakilerin hepsi ayni dosyada buradakileri clean code icin böldük

// bir sayfa icinde hem mui den hem de formik den form kullanmak icin import asamasinda ikisinden birinin ismi degistirilmesi gerekir.

// mui den hersey tek tek import edilir. yup da ise * ile hepsi import edilir.

const SignUpPage = () => {
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
        validationSchema={ signUpSchema }
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
        component = {(props) => <SignUpForm {...props} />}
        // bu sekilde göndermezsek probs icinde props olur. 
      >
        
      </Formik>
    </Container>
  );
};

export default SignUpPage;
