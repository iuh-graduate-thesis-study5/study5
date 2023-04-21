import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import 'css/question.css';

export default function QuestionPart5({ question }) {
    const listQuestion = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {question?.map((e, i) => (
                <div style={{ margin: '1rem 0' }} key={i}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <strong className="number-question">{i + 25}</strong>
                        </div>
                        <div>
                            <p style={{ fontSize: 16, marginTop: 3, marginBottom: 10 }}>{e?.nhomcauhoi?.noidungcauhoi}</p>
                            {e?.nhomcauhoi?.cauhois[0].dapans.map((da) => (
                                <>
                                    <label htmlFor={da.dapanthu} style={{ fontSize: 16 }}>
                                        {da.dapanthu}. {da.noidung}
                                    </label>
                                    <br />
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
