import React, { useState, useEffect } from "react";
import EmptyActivity from "../components/EmptyActivity";
import ActivityCard from "../components/ActivityCard";
import DeleteModal from "../components/modal/deleteModal";
import AlertSuccess from "../components/modal/alertSuccess";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllActivity,
  createActivity,
} from "../store/actionCreator/activitiesAction";

const Activity = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [successDelete, setSuccessDelete] = useState(false);
  const [deletedData, setDeletedData] = useState({});
  const { activities, error, loading } = useSelector(
    (state) => state.activities
  );
  const dispatch = useDispatch();

  const addActivity = (e) => {
    e.preventDefault();
    let payload = {
      title: "New Activity",
      email: "sysswyndar@gmail.com",
    };
    dispatch(createActivity(payload))
      .then((res) => {
        dispatch(getAllActivity());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    dispatch(getAllActivity());
  }, []);

  return (
    <>
      <div
        data-cy="activity-container"
        className="py-11 lg:px-56 md:px-32 sm:px-10"
      >
        <div data-cy="activity-header" className=" w-full flex justify-between">
          <h1
            data-cy="activity-title"
            className="md:text-4xl sm:text-[24px] font-[700]"
          >
            Activity
          </h1>
          <button
            data-cy="activity-add-button"
            className="flex items-center bg-primary md:px-[2.1rem] sm:px-[1.1rem] md:py-[0.8rem] sm:py-[0.5rem] gap-[0.4rem] text-text-white font-[700] rounded-full md:text-[18px] sm:text-[14px]"
            onClick={(e) => addActivity(e)}
          >
            <span data-cy="activity-button-icon">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[14px] sm:w-[12px] md:h-[14px] sm:h-[12px]"
              >
                <path
                  d="M8 0.999878V14.9999"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Tambah
          </button>
        </div>
        {activities?.length === 0 ? (
          <EmptyActivity />
        ) : (
          <div
            data-cy="activity-item"
            className="pt-10 flex flex-wrap gap-5 w-full"
          >
            {activities?.map((item) => {
              return (
                <ActivityCard
                  key={item.id}
                  data={item}
                  deletedData={() => setDeletedData(item)}
                  openModalDelete={() => setOpenDeleteModal(true)}
                />
              );
            })}
          </div>
        )}
      </div>
      <div data-cy="modal-delete">
        {openDeleteModal && (
          <DeleteModal
            closeModal={() => setOpenDeleteModal(false)}
            data={deletedData}
            penanda="Activity"
            successDelete={() => setSuccessDelete(true)}
          />
        )}
      </div>
      <div data-cy="modal-information">
        {successDelete && (
          <AlertSuccess closeModal={() => setSuccessDelete(false)} />
        )}
      </div>
    </>
  );
};

export default Activity;
