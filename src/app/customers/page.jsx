import { BackgroundBoxesDemo } from "@/components/BackgroundBox"
import {CustomerSection} from "@/components/CustomerSection"

export default function Customers() {
  return (
    <div className="">
      {/* <Lamp /> */}
      <BackgroundBoxesDemo title={"Our Clients"}/>
      <CustomerSection/>
    </div>
  )
}
