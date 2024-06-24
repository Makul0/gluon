import dynamic from 'next/dynamic';
import { ReactElement } from 'react';
import 'react-quill/dist/quill.snow.css'; // Import Quill stylesheet

// Define the component props with optional theme
interface ReactQuillProps {
  theme?: string;
  value: string;
  onChange: (value: string) => void;
}

// Dynamically import Quill with no SSR
const QuillNoSSRWrapper = dynamic(() => {
  return import('react-quill');
}, {
  ssr: false,
  loading: () => <p>Loading...</p>,
}) as React.ComponentType<ReactQuillProps>;

interface WriterProps {
  value: string;
  onChange: (value: string) => void;
}

const Writer = ({ value, onChange }: WriterProps): ReactElement => {
  return (
    <QuillNoSSRWrapper theme="snow" value={value} onChange={onChange} />
  );
};

export default Writer;
