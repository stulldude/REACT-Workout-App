import { Line } from "recharts"

export default function MyLine({name, color}) {
    console.log('hi')
    return (
        <Line type="monotone" dataKey={name} stroke={color} />
    )
}