import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import MyLine from "../../components/MyLine/MyLine"

export default function ProgressPage({userRoutineInfo}){
    const colors = ["red", "green", "teal", "purple", "blue", "black", "white",]
    const data = [];
    const lines = [];
    let idx = 0;
    console.log(userRoutineInfo.completedExercises);
    let completedExercises = userRoutineInfo.completedExercises;
    completedExercises.forEach((exercise, idx) => {
        lines.push(<MyLine name={exercise.name} color={colors[idx]}/>)
    })
    while (completedExercises.some(arr => arr.weightsCompleted.length - 1 >= idx)) {
        
        let dataItem = {};
        dataItem.name = `Day ${idx + 1}`;
        completedExercises.forEach(exercise => {
            if (exercise.weightsCompleted[idx]) dataItem[exercise.name] = exercise.weightsCompleted[idx];
        })
        data.push(dataItem);
        idx++;
    }
    console.log(data)
    return (
        <div styles="white">
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="Squat" stroke={colors[0]} />
                <Line type="monotone" dataKey="Bench" stroke={colors[1]} />
                <Line type="monotone" dataKey="Deadlift" stroke={colors[2]} />
                <Line type="monotone" dataKey="Overhead Press" stroke={colors[3]} />
                <Line type="monotone" dataKey="Bentover Row" stroke={colors[4]} />
                <MyLine name="Bench" color={colors[1]} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
}