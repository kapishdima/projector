import React, { useState } from 'react';

import {
  addMonths,
  startOfMonth,
  endOfMonth,
  format,
  endOfWeek,
  add,
  addDays,
  isSameMonth,
  isSameDay,
  setDefaultOptions,
} from 'date-fns';
import { Col, Row, Button, Text, Spacer } from '@nextui-org/react';

import { AngleLeftIcon } from '../../../shared/icons/AngleLeftIcon';
import { AngleRightIcon } from '../../../shared/icons/AngleRightIcon';
import { startOfWeek } from 'date-fns/esm';

type Direction = -1 | 1;

setDefaultOptions({ weekStartsOn: 1 });

const daysOfWeek = (date: Date) => {
  let currentDate = date;
  const week: Date[] = [];

  for (let day = 0; day < 7; day++) {
    week.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  return week;
};

const getWeekDatsNames = (date: Date) => {
  const startDateOfWeek = startOfWeek(date);
  const days = [];

  for (let day = 0; day < 7; day++) {
    days.push(format(addDays(startDateOfWeek, day), 'E'));
  }

  return days;
};

const getDaysInMonth = (month: Date) => {
  const startDateOfMonth = startOfMonth(month);
  const endDateOfMonth = endOfMonth(month);
  const startDate = startOfWeek(startDateOfMonth);
  const endDate = endOfWeek(endDateOfMonth);

  let currentDate = startDate;
  let days: Date[] = [];

  while (currentDate <= endDate) {
    days.push(...daysOfWeek(currentDate));
    currentDate = addDays(currentDate, 7);
  }

  return days;
};

const includesInInterval = (date: Date, interval: Date[]) =>
  interval.some((day) => isSameDay(date, day));

const activityDays: Date[] = [
  new Date('August 20, 2022'),
  new Date('August 21, 2022'),
  new Date('August 24, 2022'),
  new Date('August 25, 2022'),
  new Date('August 26, 2022'),
  new Date('August 29, 2022'),
];

export const ActivityCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [daysInMonth, setDaysInMonth] = useState<Date[]>(getDaysInMonth(currentMonth));

  const onChangeMonthButtonClick = (direction: Direction) => {
    onMonthChange(direction);
  };

  const onMonthChange = (direction: Direction) => {
    const month = addMonths(currentMonth, direction);
    const days = getDaysInMonth(month);
    setCurrentMonth(month);
    setDaysInMonth(days);
  };

  return (
    <Col>
      <Row align="center" justify="space-between">
        <Button auto flat size="xs" onClick={() => onChangeMonthButtonClick(-1)}>
          <AngleLeftIcon width={10} fill="white" />
        </Button>
        <Text b size={12}>
          {format(currentMonth, 'MMMM yyyy')}
        </Text>
        <Button auto flat size="xs" onClick={() => onChangeMonthButtonClick(1)}>
          <AngleRightIcon width={10} fill="white" />
        </Button>
      </Row>
      <Spacer y={1} />
      <Row align="center">
        {getWeekDatsNames(currentMonth).map((dayOfWeek) => (
          <Text b color="$gray600" size={12} css={{ minWidth: '40px', maxWidth: '40px' }}>
            {dayOfWeek}
          </Text>
        ))}
      </Row>
      <Spacer y={1} />
      <Row wrap="wrap" align="flex-start" css={{ gap: '4px' }}>
        {daysInMonth.map((day) => (
          <Button
            auto
            flat={!includesInInterval(day, activityDays)}
            disabled={!isSameMonth(day, currentMonth)}
            color={includesInInterval(day, activityDays) ? 'success' : 'primary'}
            size="xs"
            css={{ minWidth: '35px', maxWidth: '35px', minHeight: '35px', maxHeight: '35px' }}>
            {day.getDate()}
          </Button>
        ))}
      </Row>
    </Col>
  );
};
