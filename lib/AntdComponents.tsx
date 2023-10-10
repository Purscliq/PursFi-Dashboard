"use client";
import {
  ConfigProvider,
  Button,
  ButtonProps,
  Input,
  InputProps,
  Radio,
  RadioProps,
} from "antd";
import { Archivo } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"] });
const primaryConfig = {
  fontFamily: archivo.style.fontFamily,
  colorPrimary: "#3180E7",
};

export const CustomButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Button {...props} className="" />
  </ConfigProvider>
);
export const CustomPasswordInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: {
        ...primaryConfig,
      },
    }}
  >
    <Input.Password {...props} style={{ padding: 8 }} />
  </ConfigProvider>
);

export const CustomInput = ({ ...props }: InputProps) => (
  <ConfigProvider
    theme={{
      token: { ...primaryConfig },
    }}
  >
    <Input {...props} style={{ padding: 8 }} />
  </ConfigProvider>
);
export const CustomRadio = ({ ...props }: RadioProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Radio {...props} className="!text-white" />
  </ConfigProvider>
);
