// export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export const months = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' }
];
export const semesterOptions = [
    { value: '01', label: 'Autumn' },
    { value: '02', label: 'Summer' },
    { value: '03', label: 'Fall' },
];

export type TYears = {
    value: number;
    label: number
}

const currentYear = new Date().getFullYear()
const yearsArray:TYears[] = [] 
yearsArray.push({ value: currentYear, label: currentYear });

for (let i = 1; i <= 4; i++) {
    yearsArray.push({ value: currentYear + i, label: currentYear + i });
}

export default yearsArray



