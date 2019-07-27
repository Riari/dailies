import { PlusCircle } from 'react-feather';

import DefaultLayout from '../../layouts/Default';
import TaskList from '../../partials/TaskList';
import Task from '../../../models/Task';

const Home = ({ children, ...props }) => {
    const SidebarContent = (
        <div>
            <div class="section">
                <h2>Lists</h2>
                <ul>
                    <li class="active">Work</li>
                    <li>Side project</li>
                    <li>Fitness</li>
                </ul>
            </div>
            <div class="section stats">
                <h2>Stats</h2>
                <div class="item">
                    <span>Level <strong>43</strong></span>
                    <div class="bar">
                        <div class="background"></div>
                        <div class="fill" style="width: 65%"></div>
                    </div>
                </div>
                <div class="item">
                    <span>XP earned (today) <strong>500</strong></span>
                </div>
                <div class="item">
                    <span>XP earned (lifetime) <strong>35,250</strong></span>
                </div>
            </div>
            <div class="section records">
                <h2>Records</h2>
                <div class="item">
                    <span>Longest streak <strong>9 days</strong></span>
                </div>
                <div class="item">
                    <span>Most completions in a day <strong>6 tasks</strong></span>
                </div>
            </div>
        </div>
    );
    
    return (
        <DefaultLayout heading="Dailies" sidebarContent={SidebarContent}>
            <div class="tasks">
                <h2>Incomplete</h2>
                <a href="/task/new" class="action">
                    <PlusCircle /> New task
                </a>
                <TaskList status={Task.STATUS_INCOMPLETE} />
                <h2>Completed Today</h2>
                <TaskList status={Task.STATUS_COMPLETED} />
            </div>
        </DefaultLayout>
    );
}

export default Home;