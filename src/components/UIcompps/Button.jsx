
export function Button({ onClick, children, variant = "default", size = "medium" }) {
    const variants = {
      default: "bg-blue-500 text-white",
      secondary: "bg-gray-500 text-white",
      ghost: "bg-transparent text-blue-500 border border-blue-500",
    };
    const sizes = {
      icon: "p-2",
      medium: "py-2 px-4",
    };
  
    return (
      <button
        onClick={onClick}
        className={`${variants[variant]} ${sizes[size]} rounded`}
      >
        {children}
      </button>
    );
  }
  