export default function GradientHeadline({
  before,
  highlight,
  after,
}: {
  before: string;
  highlight: string;
  after: string;
}) {
  // On md+ the phrase is kept on one line, so cap its size by viewport width
  // (the phrases run about 6.8x their font size wide) to stop it overflowing.
  return (
    <>
      {before}
      <span className="text-gradient font-script text-[2em] font-normal leading-none whitespace-normal md:whitespace-nowrap md:text-[length:min(2em,calc((100vw_-_6rem)/6.8))]">
        {highlight}
      </span>
      {after}
    </>
  );
}
