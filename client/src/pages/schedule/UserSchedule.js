import { Scheduler } from '@aldabil/react-scheduler';
import { EVENTS } from './events';
import { Button } from '@mui/material';
import vi from 'date-fns/locale/vi';
import * as actions from 'actions/exam.action';
import { useDispatch, useSelector } from 'react-redux';
// import 'css/scheldule.css';
import { useEffect, useState } from 'react';
export default function UserScheduler() {
    const user_id = useSelector((state) => state.account.userAuth);
    const examByUserId = useSelector((state) => state.exam.listExamByUserId);
    const [listExam, setListExam] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        if (user_id) {
            dispatch(actions.getExamByUserId(user_id));
        }
    }, [user_id]);
    useEffect(() => {
        if (examByUserId) {
            const listEvent = [];
            examByUserId?.forEach((e, i) => {
                let event = {
                    event_id: i,
                    title: e.tieude,
                    start: new Date(e.thoigianthi).setMinutes(0),
                    end: new Date(new Date(e.thoigianthi).setHours(new Date(e.thoigianthi).getHours() + 1)).setMinutes(0),
                    disabled: false
                };
                listEvent.push(event);
            });
            setListExam(listEvent);
        }
    }, [examByUserId]);

    return (
        <Scheduler
            key={JSON.stringify(listExam)}
            events={listExam}
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
                    </div>
                );
            }}
            week={{
                weekDays: [0, 1, 2, 3, 4, 5, 6],
                weekStartOn: 1,
                startHour: 7,
                endHour: 18,
                step: 60
            }}
        />
    );
}
