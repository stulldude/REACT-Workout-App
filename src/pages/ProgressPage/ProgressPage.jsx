import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import MyLine from "../../components/MyLine/MyLine"
import "./ProgressPage.css"

export default function ProgressPage({userRoutineInfo, x, y}){
    const colors = ["red", "green", "teal", "purple", "blue", "black", "white",]
    const data = [];
    const lines = [];
    let idx = 0;
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

    return (
        <ResponsiveContainer  width="80%" height="80%" minHeight={x} minWidth={y}>
            <LineChart className="chart" data={data}>
                <Line type="monotone" dataKey="Squat" stroke={colors[0]} />
                <Line type="monotone" dataKey="Bench" stroke={colors[1]} />
                <Line type="monotone" dataKey="Deadlift" stroke={colors[2]} />
                <Line type="monotone" dataKey="Overhead Press" stroke={colors[3]} />
                <Line type="monotone" dataKey="Bentover Row" stroke={colors[4]} />
                <MyLine name="Bench" color={colors[1]} />
                <XAxis dataKey="name" stroke="#000000"/>
                <YAxis stroke="#000000"/>
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
}