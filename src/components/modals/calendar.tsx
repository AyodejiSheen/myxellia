import { colors } from "@/utils/constants";
import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ArrowLeft, ArrowLeft2, ArrowRight2, Calendar } from "iconsax-reactjs";
import React, { useCallback, useMemo, useState } from "react";
import { Iconify } from "../icon";
import { cn } from "@/utils/helper";

interface CalendarMonth {
  year: number;
  month: number;
  date: Date;
}

const CalendarModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentDate, setCurrentDate] = useState(new Date());
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const displayMonths = useMemo(() => {
    const months: CalendarMonth[] = [];
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    for (let i = 0; i < 1; i++) {
      const monthDate = new Date(
        startDate.getFullYear(),
        startDate.getMonth() + i,
        1
      );
      months.push({
        year: monthDate.getFullYear(),
        month: monthDate.getMonth(),
        date: monthDate,
      });
    }
    return months;
  }, [currentDate]);

  const getCalendarDays = useCallback((year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();

    const days: (Date | null)[] = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }, []);

  const goToPrevious = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      return newDate;
    });
  };

  const goToNext = () => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      return newDate;
    });
  };

  return (
    <>
      <button onClick={open}>
        <Calendar
          size="32"
          className="text-white cursor-pointer"
          variant="Bold"
        />
      </button>

      <Drawer
        position="right"
        withCloseButton={false}
        opened={opened}
        onClose={close}
        styles={{
          body: {
            backgroundColor: "#0D0D0D",
            padding: 0,
            height: "100dvh",
          },
        }}
      >
        <div className="bg-[#171717] p-5 flex items-center gap-4 justify-between text-white">
          <button onClick={close} className="flex gap-3 items-center">
            <ArrowLeft size="20" color="white" variant="Outline" />
            <h1 className="font-medium">Calendar</h1>
          </button>
          <button onClick={close}>
            <Iconify
              icon="material-symbols:close-rounded"
              className="text-white text-xl"
            />
          </button>
        </div>

        <div className="flex items-center gap-6 justify-center">
          <button
            type="button"
            onClick={goToPrevious}
            className="p-2 rounded-full border-none hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft2 size="32" color="#98a2b3" variant="Bold" />
          </button>

          <div className="flex space-x-20">
            {displayMonths.map((month, index) => (
              <h2 key={index} className="text-lg font-semibold text-gray-800 text-white">
                {monthNames[month.month]} {month.year}
              </h2>
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="p-2 rounded-full border-none hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowRight2 size="32" color="#98a2b3" variant="Bold" />
          </button>
        </div>

        <div className="p-5">
          <div
            className="grid gap-12 border p-3 border-gray/10"
            style={{ gridTemplateColumns: `repeat(1, 1fr)` }}
          >
            {displayMonths.map((month, monthIndex) => (
              <div key={monthIndex} className="min-w-0 text-white space-y-4">
                <div className="grid grid-cols-7 mb-2 border-b border-gray">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="p-2 text-center text-sm font-medium text-gray-500"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {getCalendarDays(month.year, month.month).map(
                    (date, dayIndex) => (
                      <div
                        key={dayIndex}
                        className="aspect-square flex items-center justify-center gap-y-20"
                      >
                        {date ? (
                          <button
                            type="button"
                            className={cn(`
                                w-full h-24 text-sm font-semibold transition-all duration-200
                                ${
                                  isToday(date)
                                    ? "bg-blue text-white"
                                    : "border border-gray/10"
                                }
                              `)}
                          >
                            {date.getDate()}
                          </button>
                        ) : null}
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CalendarModal;
