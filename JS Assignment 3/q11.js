const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const averages = students.map(student => {
    const scores = Object.values(student).flatMap(Object.values);
    const sum = scores.reduce((total, score) => total + score, 0);
    const average = sum / scores.length;
    return { average };
});

console.log(averages);
