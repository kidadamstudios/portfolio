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
      <span className="text-gradient font-script text-[2em] font-normal leading-none whitespace-normal md:whitespace-nowrap">
        {highlight}
      </span>
      {after}
    </>
  );
}
