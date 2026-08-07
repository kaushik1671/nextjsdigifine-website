import Link from "next/link";

const SmartLink = ({ to, type, children, ...props }) => {
  if (type === "external") {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={to} {...props}>
      {children}
    </Link>
  );
};

export default SmartLink;