import React, { useRef } from "react";

const AlertSuccess = ({ closeModal }) => {
  const ref = useRef();

  const handleOutsideClick = (e) => {
    if (!ref.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <>
      <div
        data-cy="modal-information"
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-secondary-text/60"
        onClick={(e) => handleOutsideClick(e)}
      >
        <div
          data-cy="success-alert-modal-content"
          className="relative w-auto my-6 mx-auto"
        >
          {/*content*/}
          <div
            ref={ref}
            data-cy="success-alert-modal-body"
            className="border-0 rounded-md shadow-lg relative flex flex-col md:w-[30rem] sm:w-[20rem] bg-text-white outline-none focus:outline-none px-7 py-3"
          >
            {/*body*/}
            <div className="relative flex-auto">
              <div
                data-cy="success-alert-modal-icon"
                className="flex items-center gap-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="#00A790"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V12"
                    stroke="#00A790"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16H12.01"
                    stroke="#00A790"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Activity berhasil dihapus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AlertSuccess;
