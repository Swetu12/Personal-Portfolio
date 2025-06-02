"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn("relative w-full overflow-hidden z-0", className)}
      {...props}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={
          {
            "--aurora":
              "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            `after:animate-aurora absolute inset-0 [background-image:var(--white-gradient),var(--aurora)] 
             [background-size:300%,200%] [background-position:50%_50%,50%_50%] 
             opacity-40 blur-2xl filter invert will-change-transform 
             after:absolute after:inset-0 after:content-[""] 
             after:[background-image:var(--white-gradient),var(--aurora)] 
             after:[background-size:200%,100%] after:[background-attachment:fixed] 
             after:mix-blend-difference dark:[background-image:var(--dark-gradient),var(--aurora)] 
             dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]",
          )}
        ></div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
