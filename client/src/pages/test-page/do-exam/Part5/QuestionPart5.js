import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import 'css/question.css';

export default function QuestionPart5() {
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
                                Mougey Fine Gifts is known for its large range of _____ goods.
                            </p>
                            <input type="radio" id="html" name="fav_language" value="A" />
                            <label htmlFor="A" style={{ fontSize: 16 }}>
                                A. regional
                            </label>
                            <br />
                            <input type="radio" id="css" name="fav_language" value="B" />
                            <label htmlFor="B" style={{ fontSize: 16 }}>
                                B. regionally
                            </label>
                            <br />
                            <input type="radio" id="javascript" name="fav_language" value="C" />
                            <label htmlFor="C" style={{ fontSize: 16 }}>
                                C. region
                            </label>
                            <br />
                            <input type="radio" id="javascript" name="fav_language" value="C" />
                            <label htmlFor="D" style={{ fontSize: 16 }}>
                                D. regions
                            </label>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
