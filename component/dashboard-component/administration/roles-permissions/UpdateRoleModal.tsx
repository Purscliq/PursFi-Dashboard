import { Modal } from "antd";
import {
  FormEventHandler,
  ChangeEventHandler,
  useState,
  useEffect,
} from "react";
import {
  useUpdateRoleMutation,
  useGetPermissionsQuery,
  useLazyGetSingleRoleQuery,
} from "@/services/managementService";
import {
  CustomInput as Input,
  CustomButton as Button,
  CustomRadioGroup as RadioGroup,
} from "@/lib/AntdComponents";
import { message } from "antd";
import { useAppSelector } from "@/store/hooks";
const permissions: string[] | [] = [];
const initialState = {
  roleId: "",
  roleName: "",
  businessId: "",
  description: "",
  permissions,
};
type DataType = { label: string; value: string };
const UpdateRoleModal = ({
  open,
  setOpen,
  id,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  id: string;
}) => {
  const [getRole, { data: role, isLoading: isFetchingRole }] =
    useLazyGetSingleRoleQuery();
  const [getSingleRole, { isLoading: isUpdatingEmployee }] =
    useLazyGetSingleRoleQuery();
  const [formData, setFormData] = useState(initialState);
  const [rolePermission, setRolePermission] = useState<Record<string, boolean>>(
    {
      CreateNewUser: false,
      ModifyUser: false,
      CreateRole: false,
      ModifyRole: false,
      ViewRole: false,
      ViewUser: false,
      ViewBusiness: false,
      ViewWallet: false,
      ViewTransaction: false,
      ViewTransactionStatement: false,
      CreateCollections: false,
      CreateDisbursement: false,
      ViewDisbursement: false,
      CreateInvoice: false,
      ViewInvoice: false,
      CreatePayroll: false,
      ModifyPayroll: false,
      ViewPayroll: false,
      UpdateBusiness: false,
    }
  );
  useEffect(() => {
    if (id) {
      getRole(id)
        .unwrap()
        .then((res) => {
          setRolePermission((prev) => {
            const permissions: string[] = res?.data?.permissions;
            for (var i = 0; i < permissions.length; i++) {
              prev[permissions[i]] = true;
            }
            return prev;
          });
          console.log(res);
          setFormData((prev) => ({
            ...prev,
            roleName: res?.data?.roleName,
            description: res?.data?.description,
          }));
        });
    }
  }, [id]);
  const businessProfile = useAppSelector((state) => state?.user?.business);
  const { data } = useGetPermissionsQuery({});
  const [updateRole, { isLoading }] = useUpdateRoleMutation();
  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const permissionsList: string[] = [];
    for (var [key, value] of Object.entries(rolePermission)) {
      if (value) permissionsList.push(key);
    }
    setFormData((prev) => ({ ...prev, permissions: permissionsList }));
    if (formData.permissions.length > 0)
      updateRole({ ...formData, businessId: businessProfile?.id, roleId: id })
        .unwrap()
        .then((res) => {
          setFormData(initialState);
          getSingleRole(id)
            .unwrap()
            .finally(() => {
              setOpen(false);
              message.success("role updated successfully");
            });
        })
        .catch((err) => {
          message.error(
            err?.data?.responseDescription || "something went wrong"
          );
        });
  };
  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      centered={true}
      width="35%"
    >
      <div className=" flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-1 text-center">
          Edit Roles and Permission
        </h2>
        <p className="text-sm text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur. Sollicitudin mauris sit
          egestas gravida nisl nunc diam libero amet. Aliquam nunc.
        </p>
        <form
          onSubmit={onFormSubmit}
          className="w-full space-y-4 mt-6 items-center px-2"
        >
          <div className="w-full space-y-1">
            <label htmlFor="roleName" className="font-semibold text-sm">
              what do you want to call this role
            </label>
            <Input
              id="roleName"
              placeholder="Role Name"
              className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              required
              name="roleName"
              onChange={onInputChange}
              value={formData.roleName}
            />
          </div>
          <div className="w-full  space-y-1">
            <label htmlFor="roleDesc" className="font-semibold text-sm">
              Role Description
            </label>
            <Input
              id="roleDesc"
              placeholder="Role Description"
              className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
              required
              name="description"
              onChange={onInputChange}
              value={formData.description}
            />
          </div>
          <div className="h-[20rem] overflow-y-scroll">
            <div className="flex flex-col gap-[0.3rem]">
              <h4 className="text-[#181336] text-[16px] font-[700]">
                User management
              </h4>
              <span className="flex items-center justify-between w-full">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Create User
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      CreateNewUser: e.target.value,
                    }))
                  }
                  value={rolePermission?.CreateNewUser}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
              <span className="flex items-center justify-between w-full">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Modify User
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      ModifyUser: e.target.value,
                    }))
                  }
                  value={rolePermission?.ModifyUser}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
              <span className="flex items-center justify-between w-full">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Create Role
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      CreateRole: e.target.value,
                    }))
                  }
                  value={rolePermission?.CreateRole}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
              <span className="flex items-center justify-between w-full">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Modify Role
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      ModifyRole: e.target.value,
                    }))
                  }
                  value={rolePermission?.ModifyRole}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
              <span className="flex items-center justify-between w-full">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  View Role
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      ViewRole: e.target.value,
                    }))
                  }
                  value={rolePermission?.ViewRole}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
              <span className="flex items-center justify-between w-full">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  View User
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      ViewUser: e.target.value,
                    }))
                  }
                  value={rolePermission?.ViewUser}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
            </div>
            <div className="flex flex-col gap-[0.3rem]">
              <h4 className="text-[#181336] text-[16px] font-[700]">Account</h4>
              <span className="flex items-center justify-between">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Can View Account
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      ViewWallet: e.target.value,
                    }))
                  }
                  value={rolePermission?.ViewWallet}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
              <span className="flex items-center justify-between">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Can download statement
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      ViewTransactionStatement: e.target.value,
                    }))
                  }
                  value={rolePermission?.ViewTransactionStatement}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
              <span className="flex items-center justify-between">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Can create payment
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      CreateDisbursement: e.target.value,
                    }))
                  }
                  value={rolePermission?.CreateDisbursement}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
            </div>
            <div className="flex flex-col gap-[0.3rem]">
              <h4 className="text-[#181336] text-[16px] font-[700]">Invoice</h4>
              <span className="flex items-center justify-between">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Can create invoice
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      CreateInvoice: e.target.value,
                    }))
                  }
                  value={rolePermission?.CreateInvoice}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
              <span className="flex items-center justify-between">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Can view invoice
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      ViewInvoice: e.target.value,
                    }))
                  }
                  value={rolePermission?.ViewInvoice}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
            </div>
            <div className="flex flex-col gap-[0.3rem]">
              <h4 className="text-[#181336] text-[16px] font-[700]">Payroll</h4>
              <span className="flex items-center justify-between">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Can create payroll
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      CreatePayroll: e.target.value,
                    }))
                  }
                  value={rolePermission?.CreatePayroll}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
              <span className="flex items-center justify-between">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Can view payroll
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      ViewPayroll: e.target.value,
                    }))
                  }
                  value={rolePermission?.ViewPayroll}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
            </div>
            <div className="flex flex-col gap-[0.3rem]">
              <h4 className="text-[#181336] text-[16px] font-[700]">
                Business Profile
              </h4>
              <span className="flex items-center justify-between">
                <p className="text-[#515B6F] text-[16px] font-[400]">
                  Can update Business
                </p>
                <RadioGroup
                  onChange={(e) =>
                    setRolePermission((prev) => ({
                      ...prev,
                      UpdateBusiness: e.target.value,
                    }))
                  }
                  value={rolePermission?.UpdateBusiness}
                  options={[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ]}
                />
              </span>
            </div>
          </div>
          <Button
            loading={isLoading}
            type="primary"
            htmlType="submit"
            className="!h-[3rem] !bg-black w-full text-white hover:!textwhite"
          >
            save Role
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateRoleModal;
