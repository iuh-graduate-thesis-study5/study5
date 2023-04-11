import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import QuestionPart1 from './QuestionPart1';

export default function Part1({ detailGroupQuestion }) {
    return (
        <div>
            <QuestionPart1 detailGroupQuestion={detailGroupQuestion} />
        </div>
    );
}
