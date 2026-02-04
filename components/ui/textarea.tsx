import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, style, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground focus:ring-2 focus:ring-[#5aa5e7] focus:border-[#5aa5e7] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border border-[#CCCCCC] bg-transparent px-3 py-2 transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "text-base leading-6 text-black",
        className
      )}
      style={{
        fontFamily: "'Basel Grotesk', sans-serif",
        fontWeight: 430,
        ...style,
      }}
      {...props}
    />
  )
}

export { Textarea }
