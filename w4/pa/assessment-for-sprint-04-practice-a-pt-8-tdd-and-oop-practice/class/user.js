
class User {
    constructor(username, month, day, year) {
        this.name = username;
        this.birthdate = new Date(year, month-1, day);
    }

    getBirthday() {
        return this.birthdate.toDateString();
    }

    getAge() {
        const today = new Date();
        let age = today.getFullYear() - 1985;

        if (today.getMonth() < this.birthdate.getMonth() ||
            today.getMonth() === this.birthdate.getMonth() && today.getDate() < this.birthdate.getDate()) {
        age--;
        }
        return age;
    }
}

module.exports = User;