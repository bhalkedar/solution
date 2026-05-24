const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50";

const variants = {
  primary: "bg-matte text-white shadow-soft hover:bg-accent",
  secondary: "bg-white text-matte border border-lightgray hover:border-matte/40",
  ghost: "text-matte hover:bg-softwhite",
};

export default function Button({
  as: Component = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  return <Component className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />;
}
