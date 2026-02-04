import { VariableNode, VariablePath } from "@/components/variable-picker";
import { flattenVariableTree } from "./flatten-variables";

// Generate variable structure for Trigger step
export function generateTriggerVariables(): VariableNode {
  return {
    id: "trigger",
    name: "Trigger event",
    type: "step",
    stepName: "rwebb_object is created",
    stepId: "ID: 1",
    stepIcon: "zap",
    children: [
      {
        id: "employee",
        name: "Employee",
        type: "object",
        children: [
          {
            id: "authentication-settings",
            name: "Authentication settings",
            type: "category",
            children: [
              {
                id: "twoFactorEnabled",
                name: "Two-factor authentication enabled",
                type: "field",
                fieldType: "boolean",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Authentication settings",
                  field: "Two-factor authentication enabled",
                },
              },
              {
                id: "passwordLastChanged",
                name: "Password last changed",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Authentication settings",
                  field: "Password last changed",
                },
              },
              {
                id: "loginMethod",
                name: "Login method",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Authentication settings",
                  field: "Login method",
                },
              },
            ],
          },
          {
            id: "compensation",
            name: "Compensation",
            type: "category",
            children: [
              {
                id: "baseSalary",
                name: "Base salary",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Compensation",
                  field: "Base salary",
                },
              },
              {
                id: "currency",
                name: "Currency",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Compensation",
                  field: "Currency",
                },
              },
              {
                id: "payFrequency",
                name: "Pay frequency",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Compensation",
                  field: "Pay frequency",
                },
              },
              {
                id: "effectiveDate",
                name: "Effective date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Compensation",
                  field: "Effective date",
                },
              },
            ],
          },
          {
            id: "compensation-band",
            name: "Compensation Band",
            type: "category",
            children: [
              {
                id: "bandLevel",
                name: "Band level",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Compensation Band",
                  field: "Band level",
                },
              },
              {
                id: "bandMin",
                name: "Band minimum",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Compensation Band",
                  field: "Band minimum",
                },
              },
              {
                id: "bandMax",
                name: "Band maximum",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Compensation Band",
                  field: "Band maximum",
                },
              },
            ],
          },
          {
            id: "country-specific-employment-info",
            name: "Country-specific employment information",
            type: "category",
            children: [
              {
                id: "country",
                name: "Country",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Country-specific employment information",
                  field: "Country",
                },
              },
              {
                id: "employmentType",
                name: "Employment type",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Country-specific employment information",
                  field: "Employment type",
                },
              },
              {
                id: "taxId",
                name: "Tax ID",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Country-specific employment information",
                  field: "Tax ID",
                },
              },
            ],
          },
          {
            id: "country-specific-personal-info",
            name: "Country-specific personal information",
            type: "category",
            children: [
              {
                id: "nationalId",
                name: "National ID",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Country-specific personal information",
                  field: "National ID",
                },
              },
              {
                id: "passportNumber",
                name: "Passport number",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Country-specific personal information",
                  field: "Passport number",
                },
              },
              {
                id: "citizenship",
                name: "Citizenship",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Country-specific personal information",
                  field: "Citizenship",
                },
              },
            ],
          },
          {
            id: "custom-fields",
            name: "Custom Fields",
            type: "category",
            children: [
              {
                id: "customField1",
                name: "Custom field 1",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Custom Fields",
                  field: "Custom field 1",
                },
              },
              {
                id: "customField2",
                name: "Custom field 2",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Custom Fields",
                  field: "Custom field 2",
                },
              },
            ],
          },
          {
            id: "employee-details",
            name: "Employee Details",
            type: "category",
            children: [
              {
                id: "employeeId",
                name: "Employee ID",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee Details",
                  field: "Employee ID",
                },
              },
              {
                id: "jobTitle",
                name: "Job title",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee Details",
                  field: "Job title",
                },
              },
              {
                id: "department",
                name: "Department",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee Details",
                  field: "Department",
                },
              },
              {
                id: "manager",
                name: "Manager",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee Details",
                  field: "Manager",
                },
              },
            ],
          },
          {
            id: "employee-contractor-details",
            name: "Employee contractor details",
            type: "category",
            children: [
              {
                id: "contractorType",
                name: "Contractor type",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee contractor details",
                  field: "Contractor type",
                },
              },
              {
                id: "contractStartDate",
                name: "Contract start date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee contractor details",
                  field: "Contract start date",
                },
              },
              {
                id: "contractEndDate",
                name: "Contract end date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee contractor details",
                  field: "Contract end date",
                },
              },
            ],
          },
          {
            id: "employee-insurance-fields",
            name: "Employee insurance fields",
            type: "category",
            children: [
              {
                id: "insuranceProvider",
                name: "Insurance provider",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee insurance fields",
                  field: "Insurance provider",
                },
              },
              {
                id: "policyNumber",
                name: "Policy number",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee insurance fields",
                  field: "Policy number",
                },
              },
              {
                id: "coverageType",
                name: "Coverage type",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee insurance fields",
                  field: "Coverage type",
                },
              },
            ],
          },
          {
            id: "employee-login-details",
            name: "Employee login details",
            type: "category",
            children: [
              {
                id: "username",
                name: "Username",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee login details",
                  field: "Username",
                },
              },
              {
                id: "lastLogin",
                name: "Last login",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee login details",
                  field: "Last login",
                },
              },
              {
                id: "accountStatus",
                name: "Account status",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee login details",
                  field: "Account status",
                },
              },
            ],
          },
          {
            id: "employee-personal-information",
            name: "Employee personal information",
            type: "category",
            children: [
              {
                id: "maritalStatus",
                name: "Marital status",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee personal information",
                  field: "Marital status",
                },
              },
              {
                id: "dependents",
                name: "Dependents",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee personal information",
                  field: "Dependents",
                },
              },
              {
                id: "bloodType",
                name: "Blood type",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee personal information",
                  field: "Blood type",
                },
              },
            ],
          },
          {
            id: "employee-info",
            name: "Employee information",
            type: "category",
            children: [
              {
                id: "dateOfBirth",
                name: "Date of birth",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Date of birth",
                },
              },
              {
                id: "eeocEthnicity",
                name: "EEOC Ethnicity",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "EEOC Ethnicity",
                },
              },
              {
                id: "eeocGender",
                name: "EEOC Gender",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "EEOC Gender",
                },
              },
              {
                id: "emergencyContactName",
                name: "Emergency contact name",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Emergency contact name",
                },
              },
              {
                id: "emergencyContactPhoneNumber",
                name: "Emergency contact phone number",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Emergency contact phone number",
                },
              },
              {
                id: "employeeTimezone",
                name: "Employee Timezone",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Employee Timezone",
                },
              },
              {
                id: "employeeLocaleSettings",
                name: "Employee locale settings",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Employee locale settings",
                },
              },
              {
                id: "employeeNameDetails",
                name: "Employee name details",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Employee name details",
                },
              },
              {
                id: "expectedDateForSSN",
                name: "Expected date for SSN",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Expected date for SSN",
                },
              },
              {
                id: "fullHomeAddress",
                name: "Full home address",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Full home address",
                },
              },
              {
                id: "fullName",
                name: "Full name",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Full name",
                },
              },
              {
                id: "homeAddress",
                name: "Home address",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Home address",
                },
              },
              {
                id: "identifiedGender",
                name: "Identified gender",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Identified gender",
                },
              },
              {
                id: "legalGender",
                name: "Legal gender",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Legal gender",
                },
              },
              {
                id: "personalEmail",
                name: "Personal email",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Personal email",
                },
              },
              {
                id: "phoneNumber",
                name: "Phone number",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Phone number",
                },
              },
              {
                id: "preferredFirstName",
                name: "Preferred first name",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Preferred first name",
                },
              },
              {
                id: "preferredLastName",
                name: "Preferred last name",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "Preferred last name",
                },
              },
              {
                id: "ssn",
                name: "SSN",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "SSN",
                },
              },
              {
                id: "tshirtSize",
                name: "T-shirt size",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "T-shirt size",
                },
              },
            ],
          },
          {
            id: "employment-information",
            name: "Employment information",
            type: "category",
            children: [
              {
                id: "hireDate",
                name: "Hire date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employment information",
                  field: "Hire date",
                },
              },
              {
                id: "employmentType",
                name: "Employment type",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employment information",
                  field: "Employment type",
                },
              },
              {
                id: "workLocation",
                name: "Work location",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employment information",
                  field: "Work location",
                },
              },
              {
                id: "workSchedule",
                name: "Work schedule",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employment information",
                  field: "Work schedule",
                },
              },
            ],
          },
          {
            id: "employment-status",
            name: "Employment status",
            type: "category",
            children: [
              {
                id: "status",
                name: "Status",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employment status",
                  field: "Status",
                },
              },
              {
                id: "statusEffectiveDate",
                name: "Status effective date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employment status",
                  field: "Status effective date",
                },
              },
              {
                id: "terminationDate",
                name: "Termination date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employment status",
                  field: "Termination date",
                },
              },
            ],
          },
          {
            id: "entity-contractor-details",
            name: "Entity contractor details",
            type: "category",
            children: [
              {
                id: "entityName",
                name: "Entity name",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Entity contractor details",
                  field: "Entity name",
                },
              },
              {
                id: "entityTaxId",
                name: "Entity tax ID",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Entity contractor details",
                  field: "Entity tax ID",
                },
              },
              {
                id: "contractorRate",
                name: "Contractor rate",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Entity contractor details",
                  field: "Contractor rate",
                },
              },
            ],
          },
          {
            id: "entity-information",
            name: "Entity information",
            type: "category",
            children: [
              {
                id: "entityId",
                name: "Entity ID",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Entity information",
                  field: "Entity ID",
                },
              },
              {
                id: "entityType",
                name: "Entity type",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Entity information",
                  field: "Entity type",
                },
              },
              {
                id: "entityCode",
                name: "Entity code",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Entity information",
                  field: "Entity code",
                },
              },
            ],
          },
          {
            id: "fsa-benefits",
            name: "FSA benefits",
            type: "category",
            children: [
              {
                id: "fsaElection",
                name: "FSA election",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "FSA benefits",
                  field: "FSA election",
                },
              },
              {
                id: "fsaPlanYear",
                name: "FSA plan year",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "FSA benefits",
                  field: "FSA plan year",
                },
              },
              {
                id: "fsaContribution",
                name: "FSA contribution",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "FSA benefits",
                  field: "FSA contribution",
                },
              },
            ],
          },
          {
            id: "leaves",
            name: "Leaves",
            type: "category",
            children: [
              {
                id: "leaveBalance",
                name: "Leave balance",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Leaves",
                  field: "Leave balance",
                },
              },
              {
                id: "leaveType",
                name: "Leave type",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Leaves",
                  field: "Leave type",
                },
              },
              {
                id: "leaveStartDate",
                name: "Leave start date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Leaves",
                  field: "Leave start date",
                },
              },
              {
                id: "leaveEndDate",
                name: "Leave end date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Leaves",
                  field: "Leave end date",
                },
              },
            ],
          },
          {
            id: "payroll",
            name: "Payroll",
            type: "category",
            children: [
              {
                id: "payrollId",
                name: "Payroll ID",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Payroll",
                  field: "Payroll ID",
                },
              },
              {
                id: "bankAccount",
                name: "Bank account",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Payroll",
                  field: "Bank account",
                },
              },
              {
                id: "routingNumber",
                name: "Routing number",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Payroll",
                  field: "Routing number",
                },
              },
              {
                id: "taxWithholding",
                name: "Tax withholding",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Payroll",
                  field: "Tax withholding",
                },
              },
            ],
          },
          {
            id: "recruiting",
            name: "Recruiting",
            type: "category",
            children: [
              {
                id: "applicantId",
                name: "Applicant ID",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Recruiting",
                  field: "Applicant ID",
                },
              },
              {
                id: "applicationDate",
                name: "Application date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Recruiting",
                  field: "Application date",
                },
              },
              {
                id: "interviewDate",
                name: "Interview date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Recruiting",
                  field: "Interview date",
                },
              },
              {
                id: "offerDate",
                name: "Offer date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Recruiting",
                  field: "Offer date",
                },
              },
            ],
          },
          {
            id: "third-party-apps",
            name: "Third Party Apps",
            type: "category",
            children: [
              {
                id: "appName",
                name: "App name",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Third Party Apps",
                  field: "App name",
                },
              },
              {
                id: "appUserId",
                name: "App user ID",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Third Party Apps",
                  field: "App user ID",
                },
              },
              {
                id: "appStatus",
                name: "App status",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Third Party Apps",
                  field: "App status",
                },
              },
            ],
          },
          {
            id: "time-off",
            name: "Time off",
            type: "category",
            children: [
              {
                id: "ptoBalance",
                name: "PTO balance",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Time off",
                  field: "PTO balance",
                },
              },
              {
                id: "ptoRequested",
                name: "PTO requested",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Time off",
                  field: "PTO requested",
                },
              },
              {
                id: "sickLeaveBalance",
                name: "Sick leave balance",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Time off",
                  field: "Sick leave balance",
                },
              },
              {
                id: "timeOffRequestDate",
                name: "Time off request date",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Time off",
                  field: "Time off request date",
                },
              },
            ],
          },
          {
            id: "work-authorization-details",
            name: "Work authorization details",
            type: "category",
            children: [
              {
                id: "workAuthorizationType",
                name: "Work authorization type",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Work authorization details",
                  field: "Work authorization type",
                },
              },
              {
                id: "workAuthorizationNumber",
                name: "Work authorization number",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Work authorization details",
                  field: "Work authorization number",
                },
              },
              {
                id: "workAuthorizationExpiry",
                name: "Work authorization expiry",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Work authorization details",
                  field: "Work authorization expiry",
                },
              },
            ],
          },
        ],
      },
      {
        id: "event-details",
        name: "Event details",
        type: "object",
        children: [
          {
            id: "event-details-category",
            name: "Event details",
            type: "category",
            children: [
              {
                id: "requestedAt",
                name: "Requested at",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Event details",
                  category: "Event details",
                  field: "Requested at",
                },
              },
              {
                id: "requestedBy",
                name: "Requested by",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Event details",
                  category: "Event details",
                  field: "Requested by",
                },
              },
              {
                id: "effectiveFrom",
                name: "Effective from",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Event details",
                  category: "Event details",
                  field: "Effective from",
                },
              },
            ],
          },
        ],
      },
    ],
  };
}

// Generate variable structure for AI Prompt step
export function generateAIPromptVariables(
  outputFormat: string,
  jsonProperties?: Array<{ name: string; type: string; description: string }>
): VariableNode {
  const children: VariableNode[] = [];

  if (outputFormat === "Text") {
    // If output format is Text, output a string variable called "AI output"
    children.push({
      id: "ai-prompt-output",
      name: "AI prompt output",
      type: "object",
      children: [
        {
          id: "ai-prompt-output-category",
          name: "AI prompt output",
          type: "category",
          children: [
            {
              id: "ai-output",
              name: "AI output",
              type: "field",
              fieldType: "string",
              path: {
                step: "aiPrompt",
                object: "AI prompt output",
                category: "AI prompt output",
                field: "AI output",
              },
            },
          ],
        },
      ],
    });
  } else if (outputFormat === "JSON" && jsonProperties && jsonProperties.length > 0) {
    // If output format is JSON, create variables matching the JSON schema properties
    const fields: VariableNode[] = jsonProperties
      .filter((prop) => prop.name.trim() !== "")
      .map((prop) => {
        // Map JSON schema types to field types
        let fieldType: "string" | "number" | "boolean" | "object" | "date" | "array" = "string";
        if (prop.type === "NUM") fieldType = "number";
        else if (prop.type === "BOOL") fieldType = "boolean";
        else if (prop.type === "OBJ") fieldType = "object";
        else if (prop.type === "ARR") fieldType = "array";

        return {
          id: `ai-json-${prop.name}`,
          name: prop.name,
          type: "field" as const,
          fieldType: fieldType as "string" | "number" | "boolean" | "object" | "date" | "array",
          path: {
            step: "aiPrompt",
            object: "AI prompt output",
            category: "AI prompt output",
            field: prop.name,
          },
        };
      });

    if (fields.length > 0) {
      children.push({
        id: "ai-prompt-output",
        name: "AI prompt output",
        type: "object",
        children: [
          {
            id: "ai-prompt-output-category",
            name: "AI prompt output",
            type: "category",
            children: fields,
          },
        ],
      });
    }
  }

  return {
    id: "aiPrompt",
    name: "AI prompt",
    type: "step",
    stepName: "Prompt 1",
    stepId: "ID: 12",
    stepIcon: "sparkles",
    children,
  };
}

// Get available steps for a given current step
export function getAvailableSteps(
  currentStep: SelectedNode,
  outputFormat?: string,
  jsonProperties?: Array<{ name: string; type: string; description: string }>
): VariableNode[] {
  const steps: VariableNode[] = [flattenVariableTree(generateTriggerVariables())];

  if (currentStep === "sms") {
    steps.push(flattenVariableTree(generateAIPromptVariables(outputFormat || "Text", jsonProperties)));
  }

  return steps;
}

export type SelectedNode = "trigger" | "aiPrompt" | "sms";

