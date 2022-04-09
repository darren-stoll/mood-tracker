import React, { Dispatch, FC, SetStateAction } from "react"
import { classNames } from "../helpers/classNames"
import styles from "../styles/MoodEntry.module.css"

type EmojiButtonProps = {
  value: string
  setMood: Dispatch<SetStateAction<string>>
  currentValue: string
}

export const EmojiButton: FC<EmojiButtonProps> = ({ value, setMood, currentValue }) => {
  return (
    <div
      className={classNames(styles.emoji, currentValue === value && styles.selected)}
      onClick={(e) => setMood(value)}
    >
      {value}
    </div>
  )
}
