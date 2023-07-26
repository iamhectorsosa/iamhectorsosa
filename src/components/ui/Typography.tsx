import { cn } from "@utils/cn";
import { ComponentPropsWithoutRef, forwardRef } from "react";

const HeadingAnchor = (props: ComponentPropsWithoutRef<"a">) => {
  const { children, ...otherProps } = props;
  return (
    <a
      className="after:ml-2 after:opacity-80 hover:after:content-['#']"
      {...otherProps}
    >
      {children}
    </a>
  );
};

const ProseH1 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h1">>(
  (props, ref) => {
    const { children, id, className, ...otherProps } = props;
    return (
      <h1
        id={id}
        className={cn(
          "scroll-m-9 text-4xl font-semibold tracking-tight",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
        ) : (
          children
        )}
      </h1>
    );
  }
);

ProseH1.displayName = "ProseH1";

const ProseH2 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h2">>(
  (props, ref) => {
    const { children, id, className, ...otherProps } = props;
    return (
      <h2
        id={id}
        className={cn(
          "scroll-m-9 text-3xl font-semibold tracking-tight",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
        ) : (
          children
        )}
      </h2>
    );
  }
);

ProseH2.displayName = "ProseH2";

const ProseH3 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h3">>(
  (props, ref) => {
    const { children, id, className, ...otherProps } = props;
    return (
      <h3
        id={id}
        className={cn(
          "scroll-m-9 text-2xl font-semibold tracking-tight",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
        ) : (
          children
        )}
      </h3>
    );
  }
);

ProseH3.displayName = "ProseH3";

const ProseH4 = forwardRef<HTMLHeadingElement, ComponentPropsWithoutRef<"h4">>(
  (props, ref) => {
    const { children, id, className, ...otherProps } = props;
    return (
      <h4
        id={id}
        className={cn(
          "scroll-m-9 text-xl font-semibold tracking-tight",
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {id ? (
          <HeadingAnchor href={`#${id}`}>{children}</HeadingAnchor>
        ) : (
          children
        )}
      </h4>
    );
  }
);

ProseH4.displayName = "ProseH4";

const ProseP = forwardRef<HTMLParagraphElement, ComponentPropsWithoutRef<"p">>(
  (props, ref) => {
    const { children, className, ...otherProps } = props;
    return (
      <p
        className={cn("font-light leading-loose", className)}
        ref={ref}
        {...otherProps}
      >
        {children}
      </p>
    );
  }
);

ProseP.displayName = "ProseP";

const ProseStrong = forwardRef<HTMLElement, ComponentPropsWithoutRef<"strong">>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <strong className="font-semibold" ref={ref} {...otherProps}>
        {children}
      </strong>
    );
  }
);

ProseStrong.displayName = "ProseStrong";

const ProseAnchor = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a">
>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <a
      className="font-semibold underline underline-offset-8 transition-colors hover:opacity-80"
      ref={ref}
      {...otherProps}
    >
      {children}
    </a>
  );
});

ProseAnchor.displayName = "ProseAnchor";

const QuoteIcon = (props: ComponentPropsWithoutRef<"svg">) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 409.294 409.294"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      {...props}
    >
      <path d="M0 204.647v175.412h175.412V204.647H58.471c0-64.48 52.461-116.941 116.941-116.941V29.235C78.684 29.235 0 107.919 0 204.647zM409.294 87.706V29.235c-96.728 0-175.412 78.684-175.412 175.412v175.412h175.412V204.647H292.353c0-64.48 52.461-116.941 116.941-116.941z" />
    </svg>
  );
};

const ProseBlockquote = forwardRef<
  HTMLQuoteElement,
  ComponentPropsWithoutRef<"blockquote">
>((props, ref) => {
  const { children, ...otherProps } = props;
  return (
    <div className="relative px-9 lg:px-16">
      <QuoteIcon className="absolute top-2 left-1 opacity-10 lg:left-6" />
      <blockquote
        className="text-xl font-light leading-10 lg:text-2xl lg:leading-loose [&>p]:text-xl [&>p]:leading-loose lg:[&>p]:text-2xl lg:[&>p]:leading-10"
        ref={ref}
        {...otherProps}
      >
        {children}
      </blockquote>
    </div>
  );
});

ProseBlockquote.displayName = "ProseBlockquote";

const ProseUL = forwardRef<HTMLUListElement, ComponentPropsWithoutRef<"ul">>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <ul
        className="list-inside list-disc font-light leading-loose marker:text-muted-foreground [&>li>p]:inline"
        ref={ref}
        {...otherProps}
      >
        {children}
      </ul>
    );
  }
);

ProseUL.displayName = "ProseUL";

const ProseInlineCode = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"code">
>((props, ref) => {
  const { children, ...otherProps } = props;
  if (Object.entries(otherProps).length) {
    return (
      <code ref={ref} {...otherProps}>
        {children}
      </code>
    );
  }
  return (
    <code
      className="whitespace-nowrap rounded bg-muted py-[0.2rem] px-[0.3rem] font-mono font-medium"
      ref={ref}
      {...otherProps}
    >
      {children}
    </code>
  );
});

ProseInlineCode.displayName = "ProseInlineCode";

const ProsePre = forwardRef<HTMLPreElement, ComponentPropsWithoutRef<"pre">>(
  (props, ref) => {
    const { children, ...otherProps } = props;
    return (
      <pre
        className="border border-border rounded text-[14px] py-5 overflow-x-scroll [&>code]:grid [&>code>span]:px-5"
        ref={ref}
        {...otherProps}
      >
        {children}
      </pre>
    );
  }
);

ProsePre.displayName = "ProsePre";

export {
  ProseH1,
  ProseH2,
  ProseH3,
  ProseH4,
  ProseP,
  ProseStrong,
  ProseAnchor,
  ProseBlockquote,
  ProseUL,
  ProseInlineCode,
  ProsePre,
};
