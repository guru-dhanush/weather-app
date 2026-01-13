interface InlineErrorProps {
  title: string;
  description?: string;
}

export const InlineError = ({
  title,
  description,
}: InlineErrorProps) => (
  <div style={{ padding: "1rem", textAlign: "center" }}>
    <p>{title}</p>
    {description && (
      <p style={{ fontSize: "0.875rem", opacity: 0.7 }}>
        {description}
      </p>
    )}
  </div>
);
