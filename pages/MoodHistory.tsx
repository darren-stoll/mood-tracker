import styles from '../styles/MoodHistory.module.css'
import { Footer } from '../components/Footer'

type mood = {
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
  let moods:mood[] = [];
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

  return moods;
}

const MoodHistory = () => {
  let moods = allStorage();

  return (
    <div className="container">
      <main className="main">
        {moods.map(m => (
          <div key={m.time}>
            {new Date(m.time).toString()}
            {" - "}
            {m.mood}
            {" - "}
            {m.comment}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  )
}

export default MoodHistory