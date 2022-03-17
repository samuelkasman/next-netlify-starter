import { FC, useEffect, useState } from 'react'

type ScramblerProps = {
  startText: string
  endText: string
  withSizeChange?: boolean
}

export const Scrambler: FC<ScramblerProps> = ({
  startText,
  endText,
  withSizeChange,
}) => {
  const shuffle = (word: string) => {
    return word
      .split('')
      .sort(() => {
        return 0.5 - Math.random()
      })
      .join('')
  }

  const gen = () => {
    let textArray = []
    if (withSizeChange) {
      //variation with change in size
      for (let i = startText.length; i >= 0; i--) {
        let tmp = shuffle(startText)
        tmp = tmp.slice(0, startText.length - i)
        textArray.push(tmp)
      }
    } else {
      //variation without change in size
      for (let i = 0; i < 6; i++) {
        textArray.push(shuffle(startText))
      }
    }

    //normal text
    textArray.push(endText)

    return textArray
  }

  const [textArray] = useState(gen)
  const [activeText, setActiveText] = useState(0)
  const [play, setPlay] = useState(false)
  const [isPlayed, setIsPlayed] = useState(false)

  const click = () => {
    if (activeText == textArray.length - 1) {
      setActiveText(0)
    }
    setPlay(true)
    setIsPlayed(true)
  }

  useEffect(() => {
    let interval: NodeJS.Timer
    if (play && activeText < textArray.length - 1) {
      interval = setInterval(() => {
        setActiveText(activeText + 1)
      }, 80)
    } else if (!play) {
      click()
    }

    return () => clearInterval(interval)
  }, [play, activeText])

  return (
    <div>
      <h1>{isPlayed ? textArray[activeText] : startText}</h1>

      {withSizeChange ? (
        <p onClick={click}>spusti efekt so zmenou dlzky</p>
      ) : (
        <p onClick={click}>spusti efekt</p>
      )}

      <p onClick={() => setIsPlayed(false)}>reset</p>
    </div>
  )
}
