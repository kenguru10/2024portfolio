const variants = {
    default: "bg-blue-900 text-white",
    outline: "bg-transparent border border-blue-900 text-blue-900",
    danger: "bg-red-900 text-red-300",
};

export default function Badge({ children, variant = "default" }: { children: React.ReactNode; variant?: keyof typeof variants }) {
    return <span className={`${variants[variant]} text-[0.6em] font-medium me-2 flex items-center justify-center py-[0.25em] px-[0.8em] rounded-full`}>{children}</span>;
}
