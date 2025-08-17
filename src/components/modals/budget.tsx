import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AlignBottom, Calculator, Setting4, TrendUp } from "iconsax-reactjs";
import Image from "next/image";
import React from "react";

const Budget = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <button onClick={open}>
        <Calculator
          size={32}
          variant="Bold"
          className="text-white cursor-pointer"
        />
      </button>

      <Modal
        radius="lg"
        styles={{
          body: {
            padding: 0,
          },
        }}
        size="md"
        withCloseButton={false}
        opened={opened}
        onClose={close}
        centered
      >
        <Image
          src="/media.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full"
        />
        <div className="p-6 w-full max-w-sm mx-auto space-y-6">
          <div className="flex items-center gap-4">
            <Setting4 size="32" variant="Outline" className="flex-none" />
            <div>
              <h4 className="font-semibold text-black">
                Set up annual budgets by account category
              </h4>
              <p className="text-xs text-[#606060]">
                Allocate funds across income and expense lines with full
                visibility.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <TrendUp size="32" variant="Outline" className="flex-none" />
            <div>
              <h4 className="font-semibold text-black">
                Track actuals vs budget in real time
              </h4>
              <p className="text-xs text-[#606060]">
                See how your community is performing against plan, month by
                month.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <AlignBottom size="32" variant="Outline" className="flex-none" />
            <div>
              <h4 className="font-semibold text-black">
                Adjust figures and forecast with ease
              </h4>
              <p className="text-xs text-[#606060]">
                Edit amounts, apply percentage changes, or roll forward last
                year’s data—all in one place.
              </p>
            </div>
          </div>
          <button className="bg-black text-white h-[46px] flex items-center justify-center font-medium w-full rounded-full text-center">
            Create Budget
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Budget;
