"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface StyledTextareaProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onSelectionChange?: (start: number, end: number) => void;
}

export function StyledTextarea({
  id,
  value,
  onChange,
  className,
  placeholder,
  onKeyDown,
  onSelectionChange,
}: StyledTextareaProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isUpdatingRef = useRef(false);

  // Parse content and create HTML with styled variables
  const renderContent = (text: string) => {
    if (!text) return null;

    const parts: Array<{ text: string; isVariable: boolean }> = [];
    let lastIndex = 0;
    
    // Find all {{ }} pairs - must have exactly {{ on left and }} on right
    const regex = /\{\{([^}]+)\}\}/g;
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push({
          text: text.substring(lastIndex, match.index),
          isVariable: false,
        });
      }
      
      // Add the variable (with the brackets)
      parts.push({
        text: match[0], // Includes {{ and }}
        isVariable: true,
      });
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({
        text: text.substring(lastIndex),
        isVariable: false,
      });
    }
    
    // If no matches, return the whole text as non-variable
    if (parts.length === 0) {
      parts.push({ text, isVariable: false });
    }
    
    return parts.map((part, index) => {
      if (part.isVariable) {
        return (
          <span
            key={index}
            className="bg-[#e8f4f8] rounded px-0.5"
            style={{ backgroundColor: "#e8f4f8" }}
          >
            {part.text}
          </span>
        );
      }
      return <span key={index}>{part.text}</span>;
    });
  };

  // Update the content when value changes externally
  useEffect(() => {
    if (contentRef.current && !isUpdatingRef.current) {
      const selection = window.getSelection();
      const range = selection?.rangeCount ? selection.getRangeAt(0) : null;
      
      // Save cursor position
      let cursorOffset = 0;
      if (range && contentRef.current.contains(range.commonAncestorContainer)) {
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(contentRef.current);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        cursorOffset = preCaretRange.toString().length;
      }
      
      // Update content
      isUpdatingRef.current = true;
      const newContent = renderContent(value);
      if (contentRef.current) {
        contentRef.current.innerHTML = "";
        if (newContent) {
          newContent.forEach((node) => {
            if (typeof node === "object" && "props" in node) {
              const span = document.createElement("span");
              if (node.props.className) {
                span.className = node.props.className;
                span.style.backgroundColor = "#e8f4f8";
              }
              span.textContent = node.props.children;
              contentRef.current?.appendChild(span);
            } else {
              const textNode = document.createTextNode(String(node));
              contentRef.current?.appendChild(textNode);
            }
          });
        }
        
        // Restore cursor position
        if (cursorOffset > 0 && contentRef.current.textContent) {
          const textLength = contentRef.current.textContent.length;
          const newPos = Math.min(cursorOffset, textLength);
          
          try {
            const walker = document.createTreeWalker(
              contentRef.current,
              NodeFilter.SHOW_TEXT,
              null
            );
            
            let currentPos = 0;
            let targetNode: Node | null = null;
            let targetOffset = 0;
            
            while (walker.nextNode()) {
              const node = walker.currentNode;
              const nodeLength = node.textContent?.length || 0;
              
              if (currentPos + nodeLength >= newPos) {
                targetNode = node;
                targetOffset = Math.min(newPos - currentPos, nodeLength);
                break;
              }
              
              currentPos += nodeLength;
            }
            
            // If we didn't find a node, use the last text node
            if (!targetNode) {
              const allTextNodes: Node[] = [];
              const textWalker = document.createTreeWalker(
                contentRef.current,
                NodeFilter.SHOW_TEXT,
                null
              );
              while (textWalker.nextNode()) {
                allTextNodes.push(textWalker.currentNode);
              }
              if (allTextNodes.length > 0) {
                targetNode = allTextNodes[allTextNodes.length - 1];
                targetOffset = targetNode.textContent?.length || 0;
              }
            }
            
            if (targetNode && targetNode.textContent !== null) {
              // Ensure offset is within bounds
              const maxOffset = targetNode.textContent.length;
              targetOffset = Math.min(targetOffset, maxOffset);
              
              const newRange = document.createRange();
              newRange.setStart(targetNode, targetOffset);
              newRange.setEnd(targetNode, targetOffset);
              selection?.removeAllRanges();
              selection?.addRange(newRange);
            }
          } catch (e) {
            // If cursor restoration fails, just place it at the end
            try {
              const textNodes: Node[] = [];
              const textWalker = document.createTreeWalker(
                contentRef.current,
                NodeFilter.SHOW_TEXT,
                null
              );
              while (textWalker.nextNode()) {
                textNodes.push(textWalker.currentNode);
              }
              if (textNodes.length > 0) {
                const lastNode = textNodes[textNodes.length - 1];
                const lastOffset = lastNode.textContent?.length || 0;
                const newRange = document.createRange();
                newRange.setStart(lastNode, lastOffset);
                newRange.setEnd(lastNode, lastOffset);
                selection?.removeAllRanges();
                selection?.addRange(newRange);
              }
            } catch (e2) {
              // Silently fail if we can't restore cursor
            }
          }
        }
      }
      isUpdatingRef.current = false;
    }
  }, [value]);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    if (isUpdatingRef.current) return;
    
    const text = e.currentTarget.textContent || "";
    onChange(text);
    
    // Update selection
    const selection = window.getSelection();
    if (selection && selection.rangeCount && onSelectionChange) {
      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(e.currentTarget);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      const start = preCaretRange.toString().length;
      onSelectionChange(start, start);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    const selection = window.getSelection();
    if (selection && selection.rangeCount) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      const textNode = document.createTextNode(text);
      range.insertNode(textNode);
      range.setStartAfter(textNode);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    const newText = contentRef.current?.textContent || "";
    onChange(newText);
  };

  return (
    <div className="relative">
      <div
        ref={contentRef}
        id={id}
        contentEditable
        onInput={handleInput}
        onPaste={handlePaste}
        onKeyDown={onKeyDown}
        className={cn(
          "w-full min-h-[251px] resize-y border border-[#bfbebe] rounded-md bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-[#5aa5e7] focus:border-[#5aa5e7]",
          "overflow-y-auto",
          className
        )}
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
        suppressContentEditableWarning
        data-placeholder={placeholder}
      />
      {value === "" && placeholder && (
        <div
          className="absolute left-3 top-2 text-gray-400 pointer-events-none"
          style={{ fontSize: "inherit" }}
        >
          {placeholder}
        </div>
      )}
    </div>
  );
}
