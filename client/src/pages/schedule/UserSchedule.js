import { Scheduler } from '@aldabil/react-scheduler';
import { EVENTS } from './events';
import { Button } from '@mui/material';
import vi from 'date-fns/locale/vi';
import 'css/scheldule.css';
export default function UserScheduler() {
    return (
        <Scheduler
            events={EVENTS}
            view="week"
            locale={vi}
            day={null}
            month={null}
            ProcessedEvent={{
                events: {
                    deletable: false,
                    editable: false
                }
            }}
            eventRenderer={(event) => {
                return (
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            background: '#7158e2',
                            padding: 5
                        }}
                    >
                        <div style={{ fontSize: 11 }}>{event.event.title}</div>
                        {/* <div style={{ fontSize: 11 }}>
                            {event.event.start.toLocaleTimeString(vi, {
                                timeStyle: 'short'
                            }) + '- Thời gian 60p'}
                        </div> */}
                    </div>
                );
            }}
            week={{
                weekDays: [0, 1, 2, 3, 4, 5, 6],
                weekStartOn: 1,
                startHour: 7,
                endHour: 18,
                step: 60,
                cellRenderer: ({ height, start, onClick, ...props }) => {
                    // Fake some condition up
                    const hour = start.getHours();
                    const disabled = hour === 14;
                    const restProps = disabled ? {} : props;
                    // return (
                    //     <Button
                    //         style={{
                    //             height: '50%',
                    //             background: disabled ? '#eee' : 'transparent',
                    //             cursor: disabled ? 'not-allowed' : 'pointer'
                    //         }}
                    //         onClick={() => {
                    //             if (disabled) {
                    //                 return alert('Opss');
                    //             }
                    //             onClick();
                    //         }}
                    //         disableRipple={disabled}
                    //         // disabled={disabled}
                    //         {...restProps}
                    //     ></Button>
                    // );
                }
            }}
        />
    );
}
