import { VariableNode } from "@/components/variable-picker";

/**
 * Flattens the variable tree structure by removing unnecessary nesting:
 * - If a field is the only item in a category, show it directly under the object
 * - If a category is the only category in an object, show fields directly under the object
 * - If an object is the only object in a step, show categories/fields directly under the step
 */
export function flattenVariableTree(node: VariableNode): VariableNode {
  if (!node.children || node.children.length === 0) {
    return node;
  }

  // Process children bottom-up (flatten children first)
  let processedChildren = node.children.map((child) => {
    if (child.type === "field") {
      return child;
    }
    // Recursively flatten children first
    return flattenVariableTree(child);
  });

  // Apply flattening rules based on node type
  if (node.type === "category") {
    // If category has only one field, return just that field (skip category level)
    if (processedChildren.length === 1 && processedChildren[0].type === "field") {
      return processedChildren[0];
    }
  } else if (node.type === "object") {
    // If object has only one category, promote category's children directly
    if (processedChildren.length === 1 && processedChildren[0].type === "category") {
      const onlyCategory = processedChildren[0];
      if (onlyCategory.children) {
        processedChildren = onlyCategory.children;
      }
    }
  } else if (node.type === "step") {
    // If step has only one object, promote object's children directly
    if (processedChildren.length === 1 && processedChildren[0].type === "object") {
      const onlyObject = processedChildren[0];
      if (onlyObject.children) {
        processedChildren = onlyObject.children;
      }
    }
  }

  return {
    ...node,
    children: processedChildren,
  };
}

