export default function GradientHeadline({
  before,
  highlight,
  after,
}: {
  before: string;
  highlight: string;
  after: string;
}) {
  return (
    <>
      {before}
      <span className="text-gradient font-serif italic">{highlight}</span>
      {after}
    </>
  );
}
