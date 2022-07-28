class Appointment {
    constructor(doctor, patient, month, date, year, hour) {
        this.doctor = doctor;
        this.patient = patient;
        this.appointment = new Date(year, month, date, hour);

        const today = new Date();

        if (this.appointment < today) {
            throw new AppointmentError("Appointment must be in the future")
        }

        if (!doctor.acceptsInsurance(patient.insurance)) {
            throw new AppointmentError("Patient's insurance not supported")
        }

        if (hour < 8 || hour > 17) {
            throw new AppointmentError("Invalid time slot")
        }

        if (!doctor.addAppointment(this)) {
            throw new AppointmentError("Invalid time slot")
        }
        doctor.addAppointment(this)
    }

}

class AppointmentError extends Error {
    constructor(message) {
        super(message)
    }
}

module.exports = [Appointment, AppointmentError];