
import * as Yup from "yup";

const SignUpValidation = Yup.object().shape({
  fullName: Yup.string()
    .max(20, "It must be max 20 Characters")
    .required("It must be filled"),
  email: Yup.string().email("Lütfen gecerli email adresi giriniz!").required(),
  password: Yup.string()
    .min(8)
    .max(16)
    .required()
    .matches(/\d+/, "Sifre rakam icermelidir.")
    .matches(/[a-z]+/, "Sifre Kücük harf icermelidir")
    .matches(/[A-Z]+/, "Sifre Büyük Hrf icermelidir.")
    .matches(/[!,."§$%&/(){}?]+/, "Sifre Özel karakter icermelidir"),
});

export default SignUpValidation;