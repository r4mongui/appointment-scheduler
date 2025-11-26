import { Router } from "express";
import SchedulerService from "../services/SchedulerService";

const router = Router();

router.get("/", (req, res) => {
  res.json(SchedulerService.listAppointments());
});

router.post("/", (req, res) => {
  const { date, start_time, end_time, description } = req.body;
  try {
    res.status(201).json(
      SchedulerService.createAppointment(date, start_time, end_time, description)
    );
  } catch (e:any) {
    res.status(400).json({ error: e.message });
  }
});

router.delete("/:id", (req, res) => {
  SchedulerService.deleteAppointment(Number(req.params.id));
  res.json({ message: "Deleted" });
});

export default router;
