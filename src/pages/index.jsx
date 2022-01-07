import Door from "../components/door";
import Gift from "../components/gift";

export default function Home() {
  return (
    <div>
      <Gift></Gift>
      <Door></Door>
      <Door selected></Door>
    </div>
  )
}
