import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import QuestionPart2 from './QuestionPart2';

export default function Part1({ detailGroupQuestion }) {
    return (
        <div>
            <QuestionPart2 detailGroupQuestion={detailGroupQuestion} />
        </div>
    );
}
