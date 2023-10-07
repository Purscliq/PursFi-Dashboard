"use client";
import { ConfigProvider, Button, ButtonProps } from "antd";
import { Archivo } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"] });
const primaryConfig = {
  fontFamily: archivo.style.fontFamily,
  colorPrimary: "#3180E7",
};

export const CustomButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Button {...props} />
  </ConfigProvider>
);
