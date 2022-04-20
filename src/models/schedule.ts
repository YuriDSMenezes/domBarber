import { Schedule as ScheduleType } from './types/schedule';

export const Schedule = (schedule: ScheduleType): ScheduleType => ({
  kitId: schedule?.kitId || '',
  clientId: schedule.clientId,
  commandId: schedule?.commandId || '',
  serviceIds: schedule.serviceIds,
  professionalId: schedule.professionalId,
  end: schedule.end,
  start: schedule.start,
  title: schedule.title,
  color: schedule.color,
  block: schedule.block,
  from: schedule.from,
  done: schedule?.done,
  payed: schedule?.payed,
  canceled: {
    date: schedule?.canceled?.date || undefined,
    description: schedule?.canceled?.description || '',
  },
  id: schedule.id,
  projectId: schedule.projectId,
  companyId: schedule.companyId,
  createdAt: schedule.createdAt || new Date(),
  updatedAt: schedule.updatedAt || undefined,
  deletedAt: schedule.deletedAt || undefined,
});
