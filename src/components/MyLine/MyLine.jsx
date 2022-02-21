import { Line } from "recharts"

export default function MyLine({name, color}) {
    return (
        <Line type="monotone" dataKey={name} stroke={color} />
    )
}