"use client";
import {
  ConfigProvider,
  Button,
  ButtonProps,
  Input,
  InputProps,
  Radio,
  RadioProps,
  Tabs,
  TabsProps,
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
export const CustomTabs = ({ ...props }: TabsProps) => (
  <ConfigProvider
    theme={{
      token: { ...primaryConfig },
      components: {
        Tabs: {
          itemSelectedColor: "#181336",
          itemActiveColor: "#181336",
          itemColor: "#515B6F",
          fontSize: 16,
          fontWeightStrong: 600,
        },
      },
    }}
  >
    <Tabs {...props} />
  </ConfigProvider>
);
