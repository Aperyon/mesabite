import Icon from "./Icon";

export default function Paginator({
  page,
  pageCount,
  prev,
  next,
}: {
  page: number;
  pageCount: number;
  prev: any;
  next: any;
}) {
  const isPrevDisabled = page === 1;
  const isNextDisabled = page === pageCount;
  return (
    <div>
      <button
        className={`w-4 text-center ${isPrevDisabled && "text-red-900/50"}`}
        onClick={prev}
        disabled={isPrevDisabled}
      >
        <Icon icon="chevron-left" />
      </button>
      {page}/{pageCount}
      <button
        className={`w-4 text-center ${isNextDisabled && "text-red-900/50"}`}
        onClick={next}
        disabled={isNextDisabled}
      >
        <Icon icon="chevron-right" />
      </button>
    </div>
  );
}
