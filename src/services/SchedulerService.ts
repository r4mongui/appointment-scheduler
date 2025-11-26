import AppointmentRepo from "../repos/AppointmentRepo";

class SchedulerService {
  static listAppointments() {
    return AppointmentRepo.list();
  }
  static createAppointment(date:string, start:string, end:string, description:string) {
    return AppointmentRepo.create(date, start, end, description);
  }
  static deleteAppointment(id:number) {
    return AppointmentRepo.delete(id);
  }
}
export default SchedulerService;
