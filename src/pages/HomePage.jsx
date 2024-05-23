// import React from 'react';
import { useEffect } from 'react';
import InputThread from '../components/InputThread';
import ListThread from '../components/ListThread';
import { useSelector, useDispatch } from 'react-redux';
import { asyncPopulatedUsersAndThreads } from '../states/shared/action';
import { asyncAddThread } from '../states/thread/action';

function HomePage() {
    const {
        threads = [],
        users = [],
        authUser,
    } = useSelector((states) => states);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPopulatedUsersAndThreads());
    }, [dispatch]);

    const onAddThread = ({ title, body }) => {
        // console.log(title, body)
        dispatch(asyncAddThread({ title, body }));
    };

    const threadList = threads.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
        authUser: authUser.id,
    }));

    return (
        <section>
            <InputThread addThread={onAddThread} />
            <ListThread threads={threadList} />
        </section>
    );
}

export default HomePage;