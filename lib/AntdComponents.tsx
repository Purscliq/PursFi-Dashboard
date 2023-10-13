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
  Upload,
  UploadProps,
  Select,
  SelectProps,
  DatePicker,
  DatePickerProps,
  Checkbox,
  CheckboxProps,
} from "antd";
import { Archivo } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"] });
const primaryConfig = {
  fontFamily: archivo.style.fontFamily,
  colorPrimary: "#000000",
};

export const CustomButton = ({ ...props }: ButtonProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Button {...props} />
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
    <Input {...props} />
  </ConfigProvider>
);
export const CustomRadio = ({ ...props }: RadioProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Radio {...props} />
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

export const CustomUpload = ({ ...props }: UploadProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Upload.Dragger {...props} />
  </ConfigProvider>
);

export const CustomSelect = ({ ...props }: SelectProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Select {...props} />
  </ConfigProvider>
);

export const CustomDatePicker = ({ ...props }: DatePickerProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <DatePicker {...props} />
  </ConfigProvider>
);

export const CustomCheckBox = ({ ...props }: CheckboxProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Checkbox {...props} />
  </ConfigProvider>
);
