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
            id: "employee-info",
            name: "Employee information",
            type: "category",
            children: [
              {
                id: "firstName",
                name: "firstName",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "firstName",
                },
              },
              {
                id: "lastName",
                name: "lastName",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "lastName",
                },
              },
              {
                id: "email",
                name: "email",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "email",
                },
              },
              {
                id: "phone",
                name: "phone",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Employee information",
                  field: "phone",
                },
              },
            ],
          },
          {
            id: "employee-address",
            name: "Address",
            type: "category",
            children: [
              {
                id: "street",
                name: "street",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Address",
                  field: "street",
                },
              },
              {
                id: "city",
                name: "city",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Employee",
                  category: "Address",
                  field: "city",
                },
              },
            ],
          },
        ],
      },
      {
        id: "request",
        name: "Request",
        type: "object",
        children: [
          {
            id: "request-details",
            name: "Request details",
            type: "category",
            children: [
              {
                id: "requestId",
                name: "requestId",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Request",
                  category: "Request details",
                  field: "requestId",
                },
              },
              {
                id: "status",
                name: "status",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Request",
                  category: "Request details",
                  field: "status",
                },
              },
              {
                id: "priority",
                name: "priority",
                type: "field",
                fieldType: "number",
                path: {
                  step: "trigger",
                  object: "Request",
                  category: "Request details",
                  field: "priority",
                },
              },
            ],
          },
        ],
      },
      {
        id: "trip",
        name: "Trip",
        type: "object",
        children: [
          {
            id: "trip-info",
            name: "Trip information",
            type: "category",
            children: [
              {
                id: "destination",
                name: "destination",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Trip",
                  category: "Trip information",
                  field: "destination",
                },
              },
              {
                id: "startDate",
                name: "startDate",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Trip",
                  category: "Trip information",
                  field: "startDate",
                },
              },
              {
                id: "endDate",
                name: "endDate",
                type: "field",
                fieldType: "date",
                path: {
                  step: "trigger",
                  object: "Trip",
                  category: "Trip information",
                  field: "endDate",
                },
              },
            ],
          },
        ],
      },
      {
        id: "department",
        name: "Department",
        type: "object",
        children: [
          {
            id: "department-single",
            name: "Department info",
            type: "category",
            children: [
              {
                id: "name",
                name: "name",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Department",
                  category: "Department info",
                  field: "name",
                },
              },
            ],
          },
        ],
      },
      {
        id: "project",
        name: "Project",
        type: "object",
        children: [
          {
            id: "project-single",
            name: "Project details",
            type: "category",
            children: [
              {
                id: "projectName",
                name: "projectName",
                type: "field",
                fieldType: "string",
                path: {
                  step: "trigger",
                  object: "Project",
                  category: "Project details",
                  field: "projectName",
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
        let fieldType = "string";
        if (prop.type === "NUM") fieldType = "number";
        else if (prop.type === "BOOL") fieldType = "boolean";
        else if (prop.type === "OBJ") fieldType = "object";
        else if (prop.type === "ARR") fieldType = "array";

        return {
          id: `ai-json-${prop.name}`,
          name: prop.name,
          type: "field" as const,
          fieldType,
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

