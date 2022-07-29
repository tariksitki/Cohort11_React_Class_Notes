
import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
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
    .matches(/[!,?<>%&§$#+-.]+/, "Sifre Özel karakter icermelidir."),
  // biz required icin text girmedik. kendisi default text yazar.
});