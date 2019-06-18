import Dexie from 'dexie';

const db = new Dexie('dailies');
db.version(1).stores({
    lists: '++id,date,name,weight',
    tasks: '++id,date,summary,details,bounty,status,postpone_count'
});

export default db;