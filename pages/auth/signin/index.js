// ** React Imports

// ** Next Imports
import Link from "next/link";

// ** MUI Components
import { yupResolver } from "@hookform/resolvers/yup";
import { Facebook, GitHub, Google, Twitter } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { Input } from "../../../reactHookForm";
import { Schema } from "../../../reactHookForm/Schema";
// ** Icons Imports

// ** Configs

const RegisterPage = () => {
  const {
    control,
    trigger,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  return (
    <Box className="content-center w-[40%] mx-auto">
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(7, 8, 7)} !important` }}
        >
          <Box
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 1.5 }}
            >
              Tabsera
            </Typography>
            <Typography variant="body2">Digital Service Portal! 🚀</Typography>
          </Box>
          <form>
            <Input
              name="username"
              propsInput={{
                control: control,
                defaultValue: "",
              }}
              errors={errors}
              label="Email"
              width="100%"
              placeholder="Enter your email address"
            />
            <Input
              name="password"
              propsInput={{
                control: control,
                defaultValue: "",
              }}
              errors={errors}
              label="Password"
              width="100%"
              placeholder="Enter your password"
            />

            <Button
              fullWidth
              size="large"
              type="submit"
              variant="outlined"
              sx={{ marginBottom: 7 }}
            >
              Sign in
            </Button>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" sx={{ marginRight: 2 }}>
                Do not have any account?
              </Typography>
              <Typography variant="body2">
                <Link passHref href="/pages/login" className="text-[#1466e7]">
                  Sign up instead
                </Link>
              </Typography>
            </Box>
          </form>

          <Divider sx={{ my: 5 }}>or</Divider>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16",
            }}
          >
            <Link href="/" passHref>
              <Facebook sx={{ color: "#497ce2" }} />
            </Link>
            <Link href="/" passHref>
              <Twitter sx={{ color: "#1da1f2" }} />
            </Link>
            <Link href="/" passHref>
              <GitHub />
            </Link>
            <Link href="/" passHref>
              <Google sx={{ color: "#db4437" }} />
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegisterPage;
