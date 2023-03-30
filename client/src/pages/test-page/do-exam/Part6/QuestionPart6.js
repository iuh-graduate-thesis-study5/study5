import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import 'css/question.css';

export default function QuestionPart6() {
    const listQuestion = [1, 2, 3, 4, 5, 6];
    const listGroupQuestion = [1, 2, 3, 4];

    return (
        <>
            {listQuestion.map((e) => (
                <Grid container style={{ margin: '0 -1rem', paddingBottom: 32 }}>
                    <Grid
                        item
                        xs={7.5}
                        style={{
                            borderBottom: '1px solid #e0e0e0',
                            backgroundColor: '#F8F9FA',
                            padding: 16
                        }}
                    >
                        <p style={{ fontSize: 16, marginTop: 3, marginBottom: 10 }}>
                            Dear Director Yoshida, <br />
                            Thank you for your school's interest in visiting our farm next month. Please note that children must be at least
                            six years old to visit and tour the farm.-----(139). I have enclosed a list of the ----- ( 140) activities
                            available for our young visitors. Two of these ----- (141) must be scheduled in advance. They are a
                            cheese-making class and an introduction to beekeeping. Both are very popular with our visitors. Please let -----
                            (142) know your selection by early next week. I look forward to welcoming your group soon! Sincerely, Annabel
                            Romero, Coordinator Merrytree Family Farm.
                        </p>
                    </Grid>
                    <Grid
                        item
                        xs={4.5}
                        style={{
                            borderBottom: '1px solid #e0e0e0',
                            padding: '0 16px 16px 16px'
                        }}
                    >
                        {listGroupQuestion.map((i) => (
                            <div style={{ margin: '1rem 0' }} key={i}>
                                <div style={{ display: 'flex' }}>
                                    <div>
                                        <strong className="number-question">{e}</strong>
                                    </div>
                                    <div>
                                        <input type="radio" id="html" name="fav_language" value="A" />
                                        <label htmlFor="A" style={{ fontSize: 16 }}>
                                            A.
                                        </label>
                                        <br />
                                        <input type="radio" id="css" name="fav_language" value="B" />
                                        <label htmlFor="B" style={{ fontSize: 16 }}>
                                            B.
                                        </label>
                                        <br />
                                        <input type="radio" id="javascript" name="fav_language" value="C" />
                                        <label htmlFor="C" style={{ fontSize: 16 }}>
                                            C.
                                        </label>
                                        <br />
                                        <input type="radio" id="javascript" name="fav_language" value="C" />
                                        <label htmlFor="D" style={{ fontSize: 16 }}>
                                            D.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Grid>
                </Grid>
            ))}
        </>
    );
}
