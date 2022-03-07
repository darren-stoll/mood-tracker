import styles from '../styles/MoodHistory.module.css'
import { Footer } from '../components/Footer'
import { FC } from 'react'

type MoodProps = {
  time: number,
  mood: string,
  comment: string
}

const allStorage = () => {
  // Store the localStorage into an array
  let tempLocalStorage:any = []
  let keys = Object.keys(localStorage);
  for (let i = 0; i < keys.length; i++) {
    let item = localStorage.getItem(keys[i]);
    tempLocalStorage.push({time: keys[i], item})
  }

  // Filter the moods from localStorage into its own array
  let moods:MoodProps[] = [];
  for (let i = 0; i < tempLocalStorage.length; i++) {
    if (Number(tempLocalStorage[i].time)) {
      let objectifyItem = JSON.parse(tempLocalStorage[i].item);
      moods.push({
        time: parseInt(tempLocalStorage[i].time),
        mood: objectifyItem.mood,
        comment: objectifyItem.comment
      })
    }
  }

  // Sort the moods by timestamp
  moods.sort((a,b):number => {
    if (a.time > b.time) return -1;
    else if (b.time > a.time) return 1;
    return 0;
  })

  return moods;
}



const MoodListEntry:FC<MoodProps> = ({time, mood, comment}) => {

  return (
    <div className={styles.entry}>
      <div className={styles.datemood}>
        {new Date(time)
          .toLocaleDateString("en-US",{ 
            weekday: "short", 
            year: "2-digit", 
            month: "2-digit", 
            day: "2-digit",
            hour: "numeric",
            minute: "numeric"
          })
          .toString()
        } 
        {" - "}
        {mood}
      </div>
      {comment !== "" ? comment : ""}
    </div>
  )
}

const MoodHistory = () => {
  let moods = allStorage();

  return (
    <div className="container">
      <main className="main">
        <div className="entries">
          {moods.map(m => (
            <MoodListEntry key={m.time} time={m.time} mood={m.mood} comment={m.comment} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MoodHistory