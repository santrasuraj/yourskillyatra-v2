import { getContent } from '@/lib/getContent';
import Navbar from './Navbar';

export default function ServerNavbar() {
  const content = getContent();
  return <Navbar data={content?.navbar} />;
}
