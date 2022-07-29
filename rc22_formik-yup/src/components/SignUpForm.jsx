
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { FaLock } from "react-icons/fa";
import { Formik, Form } from "formik";

const SignUpForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
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
  );
};

export default SignUpForm;
