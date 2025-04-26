import {useMemo, useRef, useState} from "react";
import {Box, Container} from "@mui/material";

type tWords = {
    words: string[];
    addNewWord: (word: string) => void;
}


function ControlledForm({words, addNewWord}: tWords) {

    const [inputValue, setInputValue] = useState("");
    const [lastKey, setLastKey] = useState("");
    const [matchWords, setMatchWords] = useState<string[]>([]);

    const handleKeyDown = (e) => {
        setLastKey(e.key); // сохраняем последнюю клавишу
    };

    const handleChange = (e) => {
            const newValue = e.target.value;
            console.log(lastKey)
            // Только если не Backspace


            if (newValue.length > 0) {
                setMatchWords(words.filter((word) => word.startsWith(inputValue)))
                if (lastKey !== "Backspace") {
                    console.log(lastKey, newValue)
                    const match = words.find((word) => word.startsWith(newValue));
                    console.log(match);
                    if (match) {
                        setInputValue(match);
                        return
                    }
                }
            }

            // Если Backspace или нет совпадений
            setInputValue(newValue);
        }

    const handleClick = () => {
        const match = words.find((word) => word.startsWith(inputValue));
        if (!match) {
            addNewWord(inputValue);
        }
        console.log(words);
    }

    return (
        <Box sx={{display: 'flex', gap: '10px', flexDirection: "column", justifyContent: "center", mt: '10px'}}>
            <Container sx={{display: 'flex', gap: '10px', justifyContent: "center", mt: '10px'}}>
                <input
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Начни вводить..."
                    style={{fontSize: "20px", padding: "5px", width: "300px"}}
                />
                <button onClick={handleClick}>
                    Отправить
                </button>
            </Container>
            <Container sx={{display: 'flex', flexDirection: "column", justifyContent: "center"}}>
                {matchWords.map((word, i) => (
                    <p style={{textAlign: "start"}}>{word}</p>
                ))}
            </Container>
        </Box>
    );
}

export default ControlledForm;