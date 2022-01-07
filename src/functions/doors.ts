import DoorModel from "../model/door"

export const createDoorsArray = (number: number, selected: number):DoorModel[] => {
  return Array.from({length: number}, (_, i) => {
    const index = i + 1
    const hasGift = index === selected
    return new DoorModel(index, hasGift)
  })
}

export const changeDoorState = (doors: DoorModel[], modified: DoorModel):DoorModel[] => {
  return doors.map(
    door => door.number === modified.number
      ? modified
      : modified.open
      ? door
      : door.selectDoor(false)
  )
}