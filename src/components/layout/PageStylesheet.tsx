interface PageStylesheetProps {
  href: string;
}

export function PageStylesheet({ href }: PageStylesheetProps) {
  return (
    <>
      <link rel="stylesheet" href={href} precedence="page" />
      <link
        rel="stylesheet"
        href="/assets/caliora-custom.css?v=78"
        precedence="custom"
      />
    </>
  );
}
