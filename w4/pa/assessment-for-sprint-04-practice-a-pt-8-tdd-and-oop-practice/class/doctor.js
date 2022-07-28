const User = require('./user');

class Doctor extends User {
    constructor(username, month, day, year) {
        super(username, month, day, year);
        this.acceptedInsurance = [];
        this.appointments = [];
    }

    addInsurance(provider) {
        this.acceptedInsurance.push(provider);
    }

    acceptsInsurance(provider) {
        if (this.acceptedInsurance.includes(provider)) {
            return true;
        }
        return false;
    }

    removeInsurance(provider) {
        this.acceptedInsurance.splice(this.acceptedInsurance.indexOf(provider), 1);
    }

    addAppointment(appointment) {
        for (let booking of this.appointments) {
            if (booking.appointment.toString() === appointment.appointment.toString()) {
                return false;
            }
        }
        this.appointments.push(appointment);
        return true;
    }

}

module.exports = Doctor;