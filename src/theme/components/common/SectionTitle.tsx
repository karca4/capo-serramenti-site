const SectionTitle = ({
  eyebrow,
  title,
  paragraph,
  center = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  paragraph?: string;
  center?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={`mb-10 max-w-[640px] md:mb-14 ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-primary mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide uppercase dark:text-white/80 ${
            center ? "justify-center" : ""
          }`}
        >
          <span aria-hidden className="bg-accent h-0.5 w-6 rounded-full" />
          {eyebrow}
        </p>
      )}
      <h2 className="mb-4 text-[1.75rem] leading-tight font-bold text-black sm:text-3xl md:text-4xl dark:text-white">
        {title}
      </h2>
      {paragraph && (
        <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed md:text-lg">
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
