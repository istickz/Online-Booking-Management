import React, { useState, Fragment, useEffect } from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import NavMobile from "./Navigation/NavMobile";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

export interface MenuBarProps {
  className?: string;
  iconClassName?: string;
}

const MenuBar: React.FC<MenuBarProps> = ({
  className = "p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300",
  iconClassName = "h-8 w-8",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(false);
  }, [pathname]);

  const handleOpenMenu = () => setIsVisible(true);
  const handleCloseMenu = () => setIsVisible(false);

  return (
    <>
      <button
        onClick={handleOpenMenu}
        className={`focus:outline-none flex items-center justify-center ${className}`}
      >
        <Bars3Icon className={iconClassName} />
      </button>

      <Transition appear show={isVisible} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleCloseMenu}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 dark:bg-black/70" />
          </TransitionChild>

          <div className="fixed inset-0">
            <div className="flex justify-end min-h-full">
              <TransitionChild
                as={Fragment}
                enter="transition transform duration-100"
                enterFrom="translate-x-56 opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transition transform duration-150"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-56 opacity-0"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden transition-all">
                  <NavMobile onClickClose={handleCloseMenu} />
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MenuBar;
