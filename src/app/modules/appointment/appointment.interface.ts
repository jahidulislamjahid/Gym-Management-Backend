export type ICreateAppointmentBookingReq = {
  serviceId: string;
  appointmentDate: Date;
  slotId: string;
  appointmentStatus: appointmentStatus;
};

export type ICreateAppointmentBookingRes = {
  appointmentDate: Date;
  createdAt: Date;
};

export type IUpdateAppointmentBookingReq = {
  serviceId?: string;
  appointmentDate?: Date;
  slotId?: string;
  appointmentStatus?: appointmentStatus;
};

export type IAppointmentFilterRequest = {
  searchTerm?: string | undefined;
  serviceId?: string | undefined;
  appointmentDate?: string | undefined;
  slotId?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  serviceName?: string | undefined;
  appointmentStatus?: appointmentStatus | undefined;
};

export enum appointmentStatus {
  pending = 'pending',
  approved = 'approved',
  rejected = 'rejected',
}
