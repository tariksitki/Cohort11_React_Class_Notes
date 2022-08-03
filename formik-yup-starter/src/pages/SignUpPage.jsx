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
import SignUpValidation from "../components/SignUpValidation";
import SignUpForm from "../components/SignUpForm";

// mui library nin boyutu cok büyük oldugu icin; orada her bir veriyi tek tek import ediyoruz. ama burada hepsini import ettik.

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
        validationSchema={SignUpValidation}
        onSubmit={(values, actions) => {
          alert(`${values.fullName} ${values.email} ${values.password}`);
          actions.resetForm();
          actions.setSubmitting(false);
          // submit islemi basladiginda formik otomatik olarak submitting i true ya kurar. Biz de submit islemi bittikten sonra manuel olarak false a kuruyoruz. Buradaki setSubmitting i, loading cemberi gösterilmesinde yada submit butonunu disable yapma da kullaniyoruz.
        }}
        component = {(props) => <SignUpForm {...props} /> }
        // component property si sayesinde Form u baska dosyaya atabildik.
        // touched values gibi tüm parametreleri gönderdik karsida yakalayacagiz. 
      >
        {/* Normal form kullaniminda state leri kendimiz elimiz ile yaziyorduk. Burada ise state ler bu state leri degistirecek onChange ler otomatik yazilmis durumda. Ancak bunlari bir sekilde tanimlayip kullanmamiz gerekir. Bunun icin komple Form elemntini bir callback func icinde cagirioruz. Bu func önceden tanimlanmis olan tüm degerleri ve func lari parametre olarak alir.  */}
        
      </Formik>
    </Container>
  );
};

export default SignUpPage;
