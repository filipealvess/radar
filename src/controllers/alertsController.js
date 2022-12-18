import staticData from '../database/alerts.json';
import { ASCENDING } from '../static/order';
import sortAlerts from '../utils/sortAlerts';

export default function list() {
  return sortAlerts(staticData, 'title', ASCENDING);
}
