"use client";
import {
  ConfigProvider,
  Button,
  ButtonProps,
  Input,
  InputNumber,
  InputNumberProps,
  InputProps,
  Radio,
  RadioProps,
  RadioGroupProps,
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
  Table,
  TableProps,
  MenuProps,
  Menu,
} from "antd";
import { TextAreaProps } from "antd/es/input";
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
export const CustomInputNumber = ({ ...props }: InputNumberProps) => (
  <ConfigProvider
    theme={{
      token: { ...primaryConfig },
    }}
  >
    <InputNumber controls={false} {...props} />
  </ConfigProvider>
);
export const CustomText = ({ ...props }: TextAreaProps) => (
  <ConfigProvider
    theme={{
      token: { ...primaryConfig },
    }}
  >
    <Input.TextArea {...props} />
  </ConfigProvider>
);
export const CustomRadio = ({ ...props }: RadioProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Radio {...props} />
  </ConfigProvider>
);
export const CustomRadioGroup = ({ ...props }: RadioGroupProps) => (
  <ConfigProvider theme={{ token: { ...primaryConfig } }}>
    <Radio.Group {...props} />
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

export const ThemeRadioGroup = ({ ...props }: RadioGroupProps) => (
  <ConfigProvider
    theme={{
      token: {
        ...primaryConfig,
        borderRadius: 5,
      },
      components: {
        Radio: {
          buttonBg: "transparent",
          buttonCheckedBg: "rgb(0, 0, 0,0.5)",
          buttonSolidCheckedColor: "rgb(0, 0, 0,0.5)",
          colorBorder: "rgb(0, 0, 0,0.1)",
        },
      },
    }}
  >
    <Radio.Group
      {...props}
      style={{
        borderRadius: 8,
        textAlign: "center",
      }}
    />
  </ConfigProvider>
);

export const ThemeRadioButton = ({ ...props }: RadioProps) => (
  <ConfigProvider
    theme={{
      token: {
        ...primaryConfig,
        borderRadius: 5,
      },
      components: {
        Radio: {
          buttonCheckedBg: "rgb(0, 0, 0,0.5)",
          buttonSolidCheckedColor: "rgb(0, 0, 0,0.5)",
          colorBorder: "rgb(0, 0, 0,0.1)",
        },
      },
    }}
  >
    <Radio.Button
      {...props}
      style={{
        borderRadius: 8,
        textAlign: "center",
        color: "#000",
        width: "100%",
        ...props.style,
      }}
    />
  </ConfigProvider>
);

export const CustomTable = ({ ...props }: TableProps<any>) => (
  <ConfigProvider
    theme={{
      token: {
        ...primaryConfig,
        borderRadius: 5,
      },
    }}
  >
    <Table {...props} />
  </ConfigProvider>
);

export const CustomMenu = ({ ...props }: MenuProps) => (
  <ConfigProvider
    theme={{
      token: {
        borderRadius: 5,
        fontSize: 16,
        ...primaryConfig,
      },
      components: {
        Menu: {},
      },
    }}
  >
    <Menu {...props} />
  </ConfigProvider>
);
