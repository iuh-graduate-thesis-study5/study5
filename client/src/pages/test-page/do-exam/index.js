import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TabPartExam from './TabPartExam';
import ListQuestion from './ListQuestion';

export default function DoExam() {
    return (
        <div style={{ margin: '2rem -7rem' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>ĐỀ THI ĐÁNH GIÁ NĂNG LỰC</h2>
                <h4>ETS TOEIC 2022 Test 2</h4>
            </div>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={9.8}
                    style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 5,
                        background: 'white',
                        boxShadow: '0 4px 0 0 rgba(143,156,173,.2)'
                    }}
                >
                    <audio controls style={{ width: '98.5%', margin: '1rem 0' }}>
                        <source
                            src="https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_2_ets_2022_test02.mp3"
                            type="audio/mpeg"
                        />
                        <track
                            src="https://s9.converto.io/download-file/zwXZbmwDyWGN7qkqvVPMcQm0pIajpwdE/file.mp3"
                            kind="captions"
                            srcLang="en"
                            label="english_captions"
                        ></track>
                        Your browser does not support the audio element.
                    </audio>
                    <TabPartExam />
                </Grid>
                <Grid item xs={0.2}></Grid>
                <Grid
                    item
                    xs={1.8}
                    style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: 5,
                        background: 'white',
                        boxShadow: '0 4px 0 0 rgba(143,156,173,.2)',
                        padding: '1rem 1rem'
                    }}
                >
                    <ListQuestion />
                </Grid>
            </Grid>
        </div>
    );
}
