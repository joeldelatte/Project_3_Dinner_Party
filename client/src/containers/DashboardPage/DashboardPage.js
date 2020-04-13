import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../../utils/UserContext";
import { UserIdContext } from "../../utils/UserIdContext";
import './DashboardPage.css';
import YourEvents from '../../components/Dashboard/YourEvents';
import YourRSVPS from '../../components/Dashboard/YourRSVPS';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Heading from '../../components/Heading/Heading';
import API from "../../utils/API";


export default function DashboardPage() {
    const [rsvpEvents, setRsvpEvents] = useState([]);
    const [events, setEvents] = useState([]);
    const { globalUserName } = useContext(UserContext);
    const { globalUserId } = useContext(UserIdContext);

    useEffect(() => {
        loadEvents(globalUserId)
    }, [globalUserId])

    function loadEvents(UserId) {
        API.getEvent(UserId)
            .then(res =>
                setEvents(res.data)
            )
    };

    useEffect(() => {
        loadRsvpEvents(events.UserId)
    }, [events.UserId])

    function loadRsvpEvents(UserId) {
        API.getRsvpEvents(UserId)
            .then(res =>
                setRsvpEvents(res.data)
            )
    };

    return (
        <div className='FeedPage'>
            <Navbar currentUser={globalUserName} />
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Heading>Your Events</Heading>
                        <YourEvents
                            className='feeds'
                            events={events} />
                    </div>
                    <div className='col'>
                        <Heading>Your RSVPs</Heading>
                        <YourRSVPS
                            className='YourEvents'
                            events={rsvpEvents} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
