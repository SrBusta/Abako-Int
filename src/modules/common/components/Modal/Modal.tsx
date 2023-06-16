import { Dialog, Transition, DialogPanelProps } from "@headlessui/react";

import React, { Fragment, ReactElement } from "react";
import { Button } from "../Button";
import { IoIosClose } from "react-icons/io";

export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CustomModalProps extends BaseModalProps, DialogPanelProps<"div"> {
  initialFocus?: React.MutableRefObject<any | null>;
  children?: React.ReactNode;
  titleHeader?: React.ReactNode;
  haveCloseButton?: boolean;
  defaultStyle?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  initialFocus,
  children,
  titleHeader,
  className,
  haveCloseButton = true,
  defaultStyle = true,
  ...props
}: CustomModalProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={onClose}
        className="relative z-50"
        initialFocus={initialFocus}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-700/50 dark:bg-black/50  " />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-5">
              <Dialog.Panel
                {...props}
                className={
                  defaultStyle
                    ? `dark:bg-neutral-750 w-full rounded-md border-[1px] bg-white shadow-lg shadow-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:shadow-neutral-900 ${className} relative`
                    : className
                }
              >
                {haveCloseButton && defaultStyle ? (
                  <span className="absolute right-1 top-1 text-xl hover:text-neutral-600 ">
                    <Button
                      onClick={onClose}
                      colorSchema="unstyled"
                      size="none"
                    >
                      <IoIosClose />
                    </Button>
                  </span>
                ) : null}

                {titleHeader && defaultStyle ? (
                  <div className="border-b-[1px] border-neutral-200 px-3 py-3 dark:border-neutral-700">
                    <Dialog.Title
                      className={"p-3 text-xl font-medium capitalize "}
                    >
                      {titleHeader}
                    </Dialog.Title>
                  </div>
                ) : null}

                {children}
              </Dialog.Panel>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
