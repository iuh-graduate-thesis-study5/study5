import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import 'css/question.css';

export default function QuestionPart4() {
    const listQuestion = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {listQuestion.map((e) => (
                <div style={{ margin: '1rem 0' }} key={e}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <strong className="number-question">{e}</strong>
                        </div>
                        <div>
                            <p style={{ fontSize: 16, marginTop: 3, marginBottom: 10 }}>
                                What kind of business is the speaker most likely calling?
                            </p>
                            <input type="radio" id="html" name="fav_language" value="A" />
                            <label htmlFor="A" style={{ fontSize: 16 }}>
                                A. A move to a new a city
                            </label>
                            <br />
                            <input type="radio" id="css" name="fav_language" value="B" />
                            <label htmlFor="B" style={{ fontSize: 16 }}>
                                B. A business trip
                            </label>
                            <br />
                            <input type="radio" id="javascript" name="fav_language" value="C" />
                            <label htmlFor="C" style={{ fontSize: 16 }}>
                                C. A building tour
                            </label>
                            <br />
                            <input type="radio" id="javascript" name="fav_language" value="C" />
                            <label htmlFor="D" style={{ fontSize: 16 }}>
                                D. A meeting with visiting colleagues
                            </label>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
