import db from "../db/Database";

class AppointmentRepo {
  static list() {
    return db;
  }
  static create(date:string, start:string, end:string, description:string) {
    return { id: Date.now(), date, start_time:start, end_time:end, description };
  }
  static delete(id:number) { return true; }
}
export default AppointmentRepo;
