
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import Button from "@mui/material/Button";


const SignUpForm = ({values, handleChange, handleBlur, errors, touched }) => {
  return (
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
  );
}

export default SignUpForm