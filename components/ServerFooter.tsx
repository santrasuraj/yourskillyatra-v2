import { getContent } from '@/lib/getContent';
import Footer from './Footer';

export default function ServerFooter() {
  const content = getContent();
  return <Footer data={content?.footer} />;
}
