import PropTypes from 'prop-types';

// material-ui
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import BarChartIcon from '@mui/icons-material/BarChart';
// assets
import { RiseOutlined, FallOutlined } from '@ant-design/icons';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ color, title, count, percentage, isLoss, extra, list_exam, listtest }) => (
    <MainCard contentSX={{ p: 2.25 }}>
        <Stack spacing={0.5}>
            <Typography variant="h6" color="textSecondary">
                {title}
            </Typography>
            <Grid container alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h4" color="inherit">
                        {count}
                    </Typography>
                </Grid>
                {percentage && (
                    <Grid item xs={4}>
                        <Chip
                            variant="combined"
                            color={color}
                            icon={
                                <>
                                    {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                                    {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                                </>
                            }
                            label={`${percentage}%`}
                            sx={{ mt: 1.25, pl: 1 }}
                            size="small"
                        />
                    </Grid>
                )}
                {list_exam && (
                    <Grid item xs={4}>
                        <Chip
                            variant="combined"
                            color={color}
                            // icon={
                            //     <>
                            //         {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                            //         {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                            //     </>
                            // }
                            label={`Đề thi: ${list_exam}`}
                            sx={{ mt: 1.25, pl: 1 }}
                            size="small"
                        />
                    </Grid>
                )}
                {listtest && (
                    <Grid item xs={4}>
                        <Chip
                            variant="combined"
                            color={color}
                            icon={
                                <>
                                    {!isLoss && <RiseOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                                    {isLoss && <FallOutlined style={{ fontSize: '0.75rem', color: 'inherit' }} />}
                                </>
                            }
                            label={`${percentage}%`}
                            sx={{ mt: 1.25, pl: 1 }}
                            size="small"
                        />
                    </Grid>
                )}
            </Grid>
        </Stack>
        <Box sx={{ pt: 2.25 }}>
            <BarChartIcon style={{ color: '#1890FF', fontSize: 50 }} />
        </Box>
    </MainCard>
);

AnalyticEcommerce.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.string,
    percentage: PropTypes.number,
    isLoss: PropTypes.bool,
    extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

AnalyticEcommerce.defaultProps = {
    color: 'primary'
};

export default AnalyticEcommerce;
