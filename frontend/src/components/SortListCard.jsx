import React from "react";
import { sortingTodo } from "../store/actionCreator/todoAction";
import { useDispatch } from "react-redux";

const SortListCard = () => {
  const dispatch = useDispatch();

  const handleSorting = (e, title) => {
    e.preventDefault();
    dispatch(sortingTodo(title));
  };
  return (
    <>
      <div
        data-cy="sort-selection"
        className="md:w-[14.6875rem] bg-text-white absolute border border-spacing-1 border-second-white -translate-x-3/4 mt-5 rounded-md shadow-sm"
      >
        <button
          data-cy="sort-selection"
          className="flex gap-3 items-center px-5 py-3 border-b-2 w-full border-second-white"
          onClick={(e) => handleSorting(e, "terbaru")}
        >
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5H9.75"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 9H8.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 13.5H8.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 11.25L13.5 13.5L15.75 11.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 4.5V13.5"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="text-sm">Terbaru</p>
        </button>
        <button
          data-cy="sort-selection"
          className="flex gap-3 items-center px-5 py-3 border-b-2 w-full border-second-white"
          onClick={(e) => handleSorting(e, "terlama")}
        >
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5H8.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 9H8.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 13.5H9.75"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.25 6.75L13.5 4.5L15.75 6.75"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.5 4.5V13.5"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="text-sm">Terlama</p>
        </button>
        <button
          data-cy="sort-selection"
          className="flex gap-3 items-center px-5 py-3 border-b-2 w-full border-second-white"
          onClick={(e) => handleSorting(e, "a-z")}
        >
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 7.5V3.75C11.25 2.715 11.715 2.25 12.75 2.25C13.785 2.25 14.25 2.715 14.25 3.75V7.5M14.25 5.25H11.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.25 15.75H11.25L14.25 10.5H11.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 11.25L5.25 13.5L7.5 11.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.25 4.5V13.5"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="text-sm">A-Z</p>
        </button>
        <button
          data-cy="sort-selection"
          className="flex gap-3 items-center px-5 py-3 border-b-2 w-full border-second-white"
          onClick={(e) => handleSorting(e, "z-a")}
        >
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 15.75V12C11.25 10.965 11.715 10.5 12.75 10.5C13.785 10.5 14.25 10.965 14.25 12V15.75M14.25 13.5H11.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.25 7.5H11.25L14.25 2.25H11.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 11.25L5.25 13.5L7.5 11.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.25 4.5V13.5"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="text-sm">Z-A</p>
        </button>
        <button
          data-cy="sort-selection"
          className="flex gap-3 items-center px-5 py-3 border-b-2 w-full border-second-white"
          onClick={(e) => handleSorting(e, "belum-selesai")}
        >
          <span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 6.75L5.25 3.75M5.25 3.75L8.25 6.75M5.25 3.75V14.25"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 11.25L12.75 14.25M12.75 14.25L9.75 11.25M12.75 14.25V3.75"
                stroke="#16ABF8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="text-sm">Belum Selesai</p>
        </button>
      </div>
    </>
  );
};

export default SortListCard;
