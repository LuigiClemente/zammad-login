import React from 'react'

const ModalSubmit = ({ modalVisible, toggleModal, handleSave }) => {
  return (
    <>
      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-darkGreen  opacity-50 shadow-md dark:bg-black"></div>
          <div className="z-10  rounded-lg bg-darkGreen shadow-md dark:bg-lightBlack">
            <div className="flex items-center justify-between rounded-t border-b  dark:border-gray-600">
              <h3 className="pl-2 text-xl font-semibold text-gray-900 dark:text-white">
                Confirmation
              </h3>
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-neutral-500  dark:hover:text-white"
                data-modal-hide="default-modal"
                onClick={toggleModal}
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="m-2">
              <p className="p-4 text-txt dark:text-neutral-200">Are Sure you want to Submit?</p>

              <button
                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-txtWhite "
                style={{
                  background: 'linear-gradient(to right, #235475, #56a4d9, #3e95d0, #1495ea)',
                }}
                type="submit"
                onClick={() => {
                  handleSave()
                  toggleModal()
                  handleSave
                }}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalSubmit
