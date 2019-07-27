import Model from './Model';

export default class Task extends Model {
  static STATUS_INCOMPLETE = 0;
  static STATUS_COMPLETED = 1;
  static STATUS_ABANDONED = 3;
  static DEFAULT_BOUNTY = 250;

  create(summary, details, bounty) {
    if (bounty == null) {
      bounty = Task.DEFAULT_BOUNTY;
    }

    return this.db.tasks.put({
      date: Date.now(),
      summary,
      details,
      status: Task.STATUS_INCOMPLETE,
      bounty,
      postpone_count: 0
    });
  }

  update(id, changes) {
    return this.db.tasks.update(id, changes);
  }

  remove(id) {
    return this.db.tasks.delete(id);
  }

  getAll() {
    return this.db.tasks.toArray();
  }

  getByStatus(status) {
    let query = this.db.tasks.where('status');

    query = (status instanceof Array)
      ? query.anyOf(status)
      : query.equals(status);

    return query.toArray();
  }
}
