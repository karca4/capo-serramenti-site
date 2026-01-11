const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-3 text-2xl font-bold leading-tight! text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
          {title}
        </h2>
        <p className="text-base font-medium leading-relaxed! text-body-color">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
